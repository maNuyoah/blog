const fs = require("fs");
const path = require("path");

// 载入零依赖 ID3 解析器（与浏览器版同源）
const code = fs.readFileSync("assets/vendor/id3.js", "utf8");
eval(code); // 挂到 globalThis.readID3

const musicDir = "assets/music";
const coversDir = "assets/covers";
const lyricsDir = "assets/lyrics";
const lyricsFile = "assets/lyrics-data.js";
fs.mkdirSync(coversDir, { recursive: true });
fs.mkdirSync(lyricsDir, { recursive: true });

const files = fs.readdirSync(musicDir).filter(f => f.toLowerCase().endsWith(".mp3"));
const lyricsMap = {};

for (const f of files) {
  const buf = fs.readFileSync(path.join(musicDir, f));
  const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  const t = globalThis.readID3(ab);
  const base = f.replace(/\.mp3$/i, "");

  // 封面 -> assets/covers/<同名>.<ext>
  if (t.cover && t.cover.data && t.cover.data.length) {
    let ext = "jpg";
    const m = (t.cover.mime || "").toLowerCase();
    if (m.includes("png")) ext = "png";
    else if (m.includes("webp")) ext = "webp";
    else if (m.includes("gif")) ext = "gif";
    const out = path.join(coversDir, base + "." + ext);
    fs.writeFileSync(out, Buffer.from(t.cover.data));
    console.log("封面 OK :", base + "." + ext, "(" + t.cover.data.length + " bytes)");
  } else {
    console.log("封面 无 :", base);
  }

  // 歌词优先级：assets/lyrics/<同名>.lrc（手动转换的 .wrc/.yrc 等）> MP3 内嵌歌词
  const lrcPath = path.join(lyricsDir, base + ".lrc");
  if (fs.existsSync(lrcPath)) {
    const manual = fs.readFileSync(lrcPath, "utf8");
    if (manual.trim()) {
      lyricsMap[base] = manual.replace(/\r\n/g, "\n").trim();
      console.log("歌词 OK :", base, "(来自 " + lyricsDir + "/" + base + ".lrc, " + lyricsMap[base].length + " 字)");
      continue;
    }
  }
  if (t.lyrics && t.lyrics.trim()) {
    lyricsMap[base] = t.lyrics;
    console.log("歌词 OK :", base, "(内嵌, " + t.lyrics.length + " 字)");
  } else {
    console.log("歌词 无 :", base);
  }
}

// 生成歌词数据文件：双击 file:// 也能直接读，无需本地服务器
let out = "// 由 extract_tags.js 自动生成（生成于 2026-10-28）。\n";
out += "// 歌词来源：assets/lyrics/<同名>.lrc 优先，其次 MP3 内嵌歌词；双击打开 index.html 即可读取，无需本地服务器。\n";
out += "window.XB_LYRICS = " + JSON.stringify(lyricsMap, null, 2) + ";\n";
fs.writeFileSync(lyricsFile, out);
console.log("\n已写入歌词数据文件:", lyricsFile);
console.log("曲目数:", files.length, "| 含歌词:", Object.keys(lyricsMap).length);
