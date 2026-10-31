# -*- coding: utf-8 -*-
"""把酷狗 .wrc / 网易云 .yrc 逐字歌词转换成标准 LRC（与 lyrics-data.js 现有规格一致）"""
import re, sys, io

def ms_to_lrc(ms):
    ms = max(0, int(round(ms)))
    m, rem = divmod(ms, 60000)
    s = rem // 1000
    cs = (rem % 1000) // 10
    return "[%02d:%02d.%02d]" % (m, s, cs)

def wrc_to_lrc(text):
    """[mm:ss.fff]<...>字<...>字 → [mm:ss.xx]整行文本（行级时间轴，与既有 LRC 同规格）"""
    out = []
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        m = re.match(r"^\[(\d{1,2}):(\d{1,2})(?:\.(\d{1,3}))?\]", line)
        if not m:
            continue  # 跳过 [kuwo:] [ver:] [ti:] 等文件头
        mm, ss, ff = int(m.group(1)), int(m.group(2)), m.group(3) or "0"
        ms = mm * 60000 + ss * 1000 + int(ff.ljust(3, "0"))
        content = re.sub(r"<[^>]*>", "", line[m.end():]).strip()
        if content:
            out.append(ms_to_lrc(ms) + content)
    return "\n".join(out) + "\n"

def yrc_to_lrc(text):
    """[start_ms,dur](start,dur,0)字(start,dur,0)字 → [mm:ss.xx]整行文本"""
    out = []
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        m = re.match(r"^\[(\d+),(\d+)\]", line)
        if not m:
            continue  # 跳过 [al:] [ar:] [by:] 等文件头
        ms = int(m.group(1))
        content = re.sub(r"\(\d+,\d+,\d+\)", "", line[m.end():]).strip()
        if content:
            out.append(ms_to_lrc(ms) + content)
    return "\n".join(out) + "\n"

if __name__ == "__main__":
    src, dst, kind = sys.argv[1], sys.argv[2], sys.argv[3]
    with io.open(src, "r", encoding="utf-8-sig") as f:
        text = f.read()
    lrc = wrc_to_lrc(text) if kind == "wrc" else yrc_to_lrc(text)
    with io.open(dst, "w", encoding="utf-8") as f:
        f.write(lrc)
    n = len([l for l in lrc.splitlines() if l.strip()])
    print("转换完成: %s -> %s（%d 行）" % (src, dst, n))
