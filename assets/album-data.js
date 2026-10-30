/* =========================================================
   相册数据（首页相册入口 + album.html 二级页共用）
   ---------------------------------------------------------
   分区：sections[]，按数组顺序从上往下排
     · 随手一拍  —— 现实里拍的照片
     · ACGN     —— 动画截图 / 插画

   每张照片的字段：
     src   原图路径（点开大图才加载）
     thumb 缩略图路径（网格只用它，长边 400px，约 10–30KB/张）
     w/h   原图宽高，用来在放大前先算好目标尺寸，避免跳动
     cap   说明文字（可留空）

   新增照片（按现有约定）：
     原图 → assets/photos/      缩略图 → assets/photos/thumbs/（同名）
     再往对应分区的 photos 数组最前面加一条（新的放最上面）
   ========================================================= */
window.XB_ALBUM = {
  title: "相册",
  desc: "随手一拍留住现实，ACGN 收着自己喜欢的画面。",
  sections: [
    {
      key: "life",
      title: "随手一拍",
      desc: "现实里随手拍下的",
      photos: [
        { src: "assets/photos/6591.webp?v=20261031x", thumb: "assets/photos/thumbs/6591.webp?v=20261031x", w: 1196, h: 1600, cap: "夕草间的猎手" },
        { src: "assets/photos/9915.webp?v=20261031x", thumb: "assets/photos/thumbs/9915.webp?v=20261031x", w: 900,  h: 1600, cap: "偶遇可爱修茂密，走过来立正让我摸" },
        { src: "assets/photos/7760.webp?v=20261031x", thumb: "assets/photos/thumbs/7760.webp?v=20261031x", w: 1600, h: 1200, cap: "信阳的府衙，升堂！！！" },
        { src: "assets/photos/9917.webp?v=20261031x", thumb: "assets/photos/thumbs/9917.webp?v=20261031x", w: 1600, h: 1200, cap: "河南博物馆里的青花瓷" },
        { src: "assets/photos/6669.webp?v=20261031x", thumb: "assets/photos/thumbs/6669.webp?v=20261031x", w: 1200, h: 1600, cap: "这么热啊，军训热死了要" },
        { src: "assets/photos/1469.webp?v=20261031x", thumb: "assets/photos/thumbs/1469.webp?v=20261031x", w: 1600, h: 1200, cap: "荷兰弟版最好看的一部" },
        { src: "assets/photos/9914.webp?v=20261031x", thumb: "assets/photos/thumbs/9914.webp?v=20261031x", w: 1200, h: 1600, cap: "夜间校园怪谈之神秘掌印" },
        { src: "assets/photos/9913.webp?v=20261031x", thumb: "assets/photos/thumbs/9913.webp?v=20261031x", w: 1200, h: 1600, cap: "展示一波推批的书架（持续扩容中）" },
        { src: "assets/photos/7126.webp?v=20261031x", thumb: "assets/photos/thumbs/7126.webp?v=20261031x", w: 1600, h: 1200, cap: "夜间校园，如此骇人😭" },
        { src: "assets/photos/6662.webp?v=20261031x", thumb: "assets/photos/thumbs/6662.webp?v=20261031x", w: 1600, h: 899,  cap: "三国公园，直接狠狠出片😡" },
        { src: "assets/photos/5131.webp?v=20261031x", thumb: "assets/photos/thumbs/5131.webp?v=20261031x", w: 1200, h: 1600, cap: "我去，第一次见彼岸花，妖艳" },
        { src: "assets/photos/69.webp?v=20261031x",   thumb: "assets/photos/thumbs/69.webp?v=20261031x",   w: 1600, h: 1600, cap: "赊店古镇" },
        { src: "assets/photos/70.webp?v=20261031x",   thumb: "assets/photos/thumbs/70.webp?v=20261031x",   w: 1597, h: 1600, cap: "依旧赊店古镇" }
      ]
    },
    {
      key: "acgn",
      title: "ACGN",
      desc: "动画截图 / 插画",
      photos: [
        { src: "assets/photos/9958.webp?v=20261031x", thumb: "assets/photos/thumbs/9958.webp?v=20261031x", w: 775,  h: 1365, cap: "" },
        { src: "assets/photos/9960.webp?v=20261031x", thumb: "assets/photos/thumbs/9960.webp?v=20261031x", w: 1280, h: 864,  cap: "" },
        { src: "assets/photos/9967.webp?v=20261031x", thumb: "assets/photos/thumbs/9967.webp?v=20261031x", w: 1920, h: 1080, cap: "" },
        { src: "assets/photos/9969.webp?v=20261031x", thumb: "assets/photos/thumbs/9969.webp?v=20261031x", w: 1742, h: 980,  cap: "" },
        { src: "assets/photos/9983.webp?v=20261031x", thumb: "assets/photos/thumbs/9983.webp?v=20261031x", w: 1920, h: 1080, cap: "" },
        { src: "assets/photos/9979.webp?v=20261031x", thumb: "assets/photos/thumbs/9979.webp?v=20261031x", w: 1920, h: 1080, cap: "" },
        { src: "assets/photos/9977.webp?v=20261031x", thumb: "assets/photos/thumbs/9977.webp?v=20261031x", w: 1920, h: 800,  cap: "" },
        { src: "assets/photos/9975.webp?v=20261031x", thumb: "assets/photos/thumbs/9975.webp?v=20261031x", w: 825,  h: 825,  cap: "" },
        { src: "assets/photos/9971.webp?v=20261031x", thumb: "assets/photos/thumbs/9971.webp?v=20261031x", w: 1479, h: 1024, cap: "" },
        { src: "assets/photos/9996.webp?v=20261031x", thumb: "assets/photos/thumbs/9996.webp?v=20261031x", w: 1080, h: 1215, cap: "" },
        { src: "assets/photos/9994.webp?v=20261031x", thumb: "assets/photos/thumbs/9994.webp?v=20261031x", w: 1819, h: 1024, cap: "" },
        { src: "assets/photos/9989.webp?v=20261031x", thumb: "assets/photos/thumbs/9989.webp?v=20261031x", w: 1920, h: 1080, cap: "" },
        { src: "assets/photos/9987.webp?v=20261031x", thumb: "assets/photos/thumbs/9987.webp?v=20261031x", w: 1280, h: 720,  cap: "" },
        { src: "assets/photos/9985.webp?v=20261031x", thumb: "assets/photos/thumbs/9985.webp?v=20261031x", w: 1372, h: 1080, cap: "" },
        { src: "assets/photos/10003.webp?v=20261031x", thumb: "assets/photos/thumbs/10003.webp?v=20261031x", w: 1400, h: 788,  cap: "" },
        { src: "assets/photos/10002.webp?v=20261031x", thumb: "assets/photos/thumbs/10002.webp?v=20261031x", w: 1363, h: 2500, cap: "" },
        { src: "assets/photos/10001.webp?v=20261031x", thumb: "assets/photos/thumbs/10001.webp?v=20261031x", w: 2000, h: 1125, cap: "" },
        { src: "assets/photos/10000.webp?v=20261031x", thumb: "assets/photos/thumbs/10000.webp?v=20261031x", w: 2200, h: 1237, cap: "" },
        { src: "assets/photos/9999.webp?v=20261031x",  thumb: "assets/photos/thumbs/9999.webp?v=20261031x",  w: 2160, h: 1440, cap: "" },
        { src: "assets/photos/10008.webp?v=20261031x", thumb: "assets/photos/thumbs/10008.webp?v=20261031x", w: 1355, h: 813,  cap: "" },
        { src: "assets/photos/10007.webp?v=20261031x", thumb: "assets/photos/thumbs/10007.webp?v=20261031x", w: 1767, h: 1041, cap: "" },
        { src: "assets/photos/10006.webp?v=20261031x", thumb: "assets/photos/thumbs/10006.webp?v=20261031x", w: 2200, h: 1247, cap: "" },
        { src: "assets/photos/10005.webp?v=20261031x", thumb: "assets/photos/thumbs/10005.webp?v=20261031x", w: 2200, h: 1237, cap: "" },
        { src: "assets/photos/10004.webp?v=20261031x", thumb: "assets/photos/thumbs/10004.webp?v=20261031x", w: 2200, h: 1100, cap: "" },
        { src: "assets/photos/2390.webp?v=20261031x", thumb: "assets/photos/thumbs/2390.webp?v=20261031x", w: 2200, h: 1238, cap: "" },
        { src: "assets/photos/3202.webp?v=20261031x", thumb: "assets/photos/thumbs/3202.webp?v=20261031x", w: 2200, h: 1238, cap: "" },
        { src: "assets/photos/4124.webp?v=20261031x", thumb: "assets/photos/thumbs/4124.webp?v=20261031x", w: 2200, h: 918,  cap: "" },
        { src: "assets/photos/9247.webp?v=20261031x", thumb: "assets/photos/thumbs/9247.webp?v=20261031x", w: 2200, h: 1506, cap: "" },
        { src: "assets/photos/9250.webp?v=20261031x", thumb: "assets/photos/thumbs/9250.webp?v=20261031x", w: 2200, h: 1506, cap: "" },
        { src: "assets/photos/72.webp?v=20261031x",   thumb: "assets/photos/thumbs/72.webp?v=20261031x",   w: 2200, h: 1238, cap: "" },
        { src: "assets/photos/76.webp?v=20261031x",   thumb: "assets/photos/thumbs/76.webp?v=20261031x",   w: 1016, h: 2200, cap: "" },
        { src: "assets/photos/643.webp?v=20261031x",  thumb: "assets/photos/thumbs/643.webp?v=20261031x",  w: 1080, h: 1080, cap: "" },
        { src: "assets/photos/58.webp?v=20261031x",   thumb: "assets/photos/thumbs/58.webp?v=20261031x",   w: 1920, h: 1080, cap: "" },
        { src: "assets/photos/60.webp?v=20261031x",   thumb: "assets/photos/thumbs/60.webp?v=20261031x",   w: 1920, h: 1080, cap: "" }
      ]
    }
  ]
};
