# -*- coding: utf-8 -*-
"""FLAC -> MP3（lameenc），并提取 FLAC 内嵌封面（METADATA_BLOCK_PICTURE）"""
import os, sys, struct
import numpy as np
import soundfile as sf
import lameenc

def read_flac_picture(path):
    """解析 FLAC 元数据块，取出第一张 PICTURE，返回 (mime, bytes) 或 None"""
    with open(path, "rb") as f:
        if f.read(4) != b"fLaC":
            return None
        while True:
            head = f.read(1)
            if not head:
                return None
            btype = head[0] & 0x7F
            last = bool(head[0] & 0x80)
            length = struct.unpack(">I", f.read(3) + b"\x00")[0]
            if btype == 6:  # PICTURE
                data = f.read(length)
                ptype = struct.unpack(">I", data[0:4])[0]
                p = 4
                def rd_str(p):
                    n = struct.unpack(">I", data[p:p + 4])[0]; p += 4
                    s = data[p:p + n]; p += n
                    return s, p
                mime, p = rd_str(p)
                desc, p = rd_str(p)
                p += 16  # width/height/depth/colors 各 4 字节
                dlen = struct.unpack(">I", data[p:p + 4])[0]; p += 4
                return mime.decode("ascii", "ignore"), data[p:p + dlen]
            else:
                f.seek(length, 1)
            if last:
                return None

def flac_to_mp3(flac_path, mp3_path, bitrate=256):
    data, sr = sf.read(flac_path, dtype="int16")
    if data.ndim == 1:
        channels = 1
    else:
        channels = data.shape[1]
    enc = lameenc.Encoder()
    enc.set_bit_rate(bitrate)
    enc.set_in_sample_rate(sr)
    enc.set_out_sample_rate(sr)
    enc.set_channels(channels)
    enc.set_quality(2)  # 高质量
    pcm = data.tobytes()
    mp3 = enc.encode(pcm)
    mp3 += enc.flush()
    with open(mp3_path, "wb") as f:
        f.write(mp3)
    dur = (len(data) / sr) if data.ndim > 1 else len(data) / sr
    return dur, sr, channels, len(mp3)

if __name__ == "__main__":
    for src in sys.argv[1:]:
        base = os.path.splitext(os.path.basename(src))[0]
        out_dir = os.path.dirname(os.path.abspath(src))
        dst = os.path.join(out_dir, base + ".mp3")
        dur, sr, ch, size = flac_to_mp3(src, dst)
        print("MP3 完成: %s  %.1fMB  %dHz %dch  时长 %d:%02d" % (
            os.path.basename(dst), size / 1048576.0, sr, ch, int(dur) // 60, int(dur) % 60))
        pic = read_flac_picture(src)
        if pic:
            mime, blob = pic
            ext = ".png" if "png" in mime else ".jpg"
            cover_dir = os.path.join(out_dir, "..", "covers")
            os.makedirs(cover_dir, exist_ok=True)
            cover_path = os.path.join(cover_dir, base + ext)
            with open(cover_path, "wb") as f:
                f.write(blob)
            print("  封面已提取: covers/%s%s  (%.0fKB, %s)" % (base, ext, len(blob) / 1024.0, mime))
        else:
            print("  （无内嵌封面）")
