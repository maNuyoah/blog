/* 极简 ID3v2 解析器（零依赖，本地使用）
   读取 MP3 内嵌的：标题(TIT2)、歌手(TPE1)、歌词(USLT)、封面(APIC)
   输入 ArrayBuffer，返回 { title, artist, lyrics, cover:{mime,data} }，缺失为 null。
   cover.data 是 Uint8Array，调用方用 URL.createObjectURL(new Blob([data],{type:mime})) 显示。 */
(function (global) {
  function synchsafe(a, b, c, d) {
    return ((a & 0x7f) << 21) | ((b & 0x7f) << 14) | ((c & 0x7f) << 7) | (d & 0x7f);
  }
  function decodeText(bytes, enc) {
    if (!bytes || !bytes.length) return "";
    let out;
    try {
      if (enc === 1) out = new TextDecoder("utf-16").decode(bytes);        // UTF-16 (带 BOM)
      else if (enc === 2) out = new TextDecoder("utf-16be").decode(bytes);  // UTF-16BE (无 BOM)
      else if (enc === 3) out = new TextDecoder("utf-8").decode(bytes);     // UTF-8
      else out = new TextDecoder("iso-8859-1").decode(bytes);               // Latin1
    } catch (e) { out = ""; }
    return out.replace(/^﻿/, "").replace(/^\uFEFF/, "").trim();
  }

  function readID3(ab) {
    const bytes = new Uint8Array(ab);
    const res = { title: null, artist: null, lyrics: null, cover: null };
    if (bytes[0] !== 0x49 || bytes[1] !== 0x44 || bytes[2] !== 0x33) return res; // 无 ID3v2 头
    const major = bytes[3];
    const tagSize = synchsafe(bytes[6], bytes[7], bytes[8], bytes[9]);
    let off = 10;

    while (off + 10 <= 10 + tagSize && off + 10 <= bytes.length) {
      const id = String.fromCharCode(bytes[off], bytes[off + 1], bytes[off + 2], bytes[off + 3]);
      let size;
      if (major === 4) size = synchsafe(bytes[off + 4], bytes[off + 5], bytes[off + 6], bytes[off + 7]);
      else size = (bytes[off + 4] << 24) | (bytes[off + 5] << 16) | (bytes[off + 6] << 8) | bytes[off + 7];
      if (size <= 0 || off + 10 + size > bytes.length) break;
      const frame = bytes.subarray(off + 10, off + 10 + size);

      if (id === "TIT2" && !res.title) res.title = decodeText(frame.subarray(1), frame[0]);
      else if (id === "TPE1" && !res.artist) res.artist = decodeText(frame.subarray(1), frame[0]);
      else if (id === "USLT" && !res.lyrics) {
        const enc = frame[0]; let p = 4; // 跳过 enc(1) + language(3)
        if (enc === 1 || enc === 2) { while (p + 1 < frame.length && !(frame[p] === 0 && frame[p + 1] === 0)) p += 2; p += 2; }
        else { while (p < frame.length && frame[p] !== 0) p++; p += 1; }
        res.lyrics = decodeText(frame.subarray(p), enc);
      }
      else if (id === "APIC" && !res.cover) {
        const enc = frame[0]; let p = 1;
        const mimeStart = p; while (p < frame.length && frame[p] !== 0) p++;
        const mime = decodeText(frame.subarray(mimeStart, p), 0) || "image/jpeg";
        p++; // 图片类型字节
        if (enc === 1 || enc === 2) { while (p + 1 < frame.length && !(frame[p] === 0 && frame[p + 1] === 0)) p += 2; p += 2; }
        else { while (p < frame.length && frame[p] !== 0) p++; p += 1; }
        const imgData = frame.subarray(p);
        if (imgData.length > 0) res.cover = { mime: mime, data: imgData };
      }
      off += 10 + size;
    }
    return res;
  }

  global.readID3 = readID3;
})(typeof window !== "undefined" ? window : globalThis);
