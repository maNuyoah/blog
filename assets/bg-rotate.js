/* =========================================================
   背景轮播：双图层交叉淡入（真·丝滑溶解）
   - 首图立即挂上 front 层并显示（绝不等待预加载，弱网也能尽快出图，不会卡在 opacity:0）
   - 后续图：预加载成功才淡入；预加载失败自动跳下一张，且 front 仍显示当前图，绝不黑屏
   - 用户系统开启“减弱动态效果”时退化为直接切换
   - 跨页面续播：当前背景下标存 sessionStorage，主页↔相册互穿不重置
   ========================================================= */
(function () {
  "use strict";

  // 背景图清单：ACGN 区横构图（比例 ≥1.6）共 13 张
  // 排序从“干净柔和”到“抢眼杂乱”，方便直观对比每张当壁纸的效果
  var BG_IMAGES = [
    "assets/bg/bg-10000.webp?v=20261031x", // 紫藤花
    "assets/bg/bg-10001.webp?v=20261031x", // 雪夜街道
    "assets/bg/bg-10006.webp?v=20261031x", // 雨窗
    "assets/bg/bg-10005.webp?v=20261031x", // 草原拔剑
    "assets/bg/bg-10004.webp?v=20261031x", // 木屋少女
    "assets/bg/bg-10008.webp?v=20261031x", // 和服少女
    "assets/bg/bg-10007.webp?v=20261031x", // 渔船夜色
    "assets/bg/bg-10003.webp?v=20261031x", // 粉紫和服
    "assets/bg/bg-58.webp?v=20261031x",    // 樱花少女
    "assets/bg/bg-9989.webp?v=20261031x",  // 草地女孩
    "assets/bg/bg-9967.webp?v=20261031x",  // 台阶众少女
    "assets/bg/bg-9969.webp?v=20261031x",  // 暖黄街道
    "assets/bg/bg-9979.webp?v=20261031x",  // 人群剪影
  ];

  var DWELL = 6000; // 每张停留时长
  var FADE = 1600;  // 交叉淡入时长（与 CSS transition 保持一致）
  var ALPHA = 0.85; // 背景层不透明度（与改版前单层视觉一致）
  var STORE_KEY = "xb_bg_idx"; // 跨页面续播：记住当前是第几幅

  // 读上次的下标；没有/越界/存储不可用都返回 -1（表示从第一张开始）
  function readIdx() {
    try {
      var v = parseInt(window.sessionStorage.getItem(STORE_KEY), 10);
      if (isFinite(v) && v >= 0 && v < BG_IMAGES.length) return v;
    } catch (e) { /* 隐私模式/file:// 下可能抛错，忽略 */ }
    return -1;
  }
  function writeIdx(i) {
    try { window.sessionStorage.setItem(STORE_KEY, String(i)); } catch (e) { /* 同上 */ }
  }

  var layerA = document.getElementById("bgLayerA");
  var layerB = document.getElementById("bgLayerB");
  if (!layerA || !layerB || !BG_IMAGES.length) return;

  var calm = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (calm) FADE = 1; // 减弱动态：瞬间切换，不搞淡入淡出

  var front = layerA; // 当前可见层
  var back = layerB;  // 备用层
  var idx = -1;       // 当前背景下标
  var busy = false;   // 正在切换中，防止连点

  function setImage(layer, url) {
    layer.style.backgroundImage = 'url("' + url + '")';
  }

  // 首图：立即挂上 front 层并淡入（不等待预加载，弱网下浏览器原生加载，加载好即显示）
  (function paintFirst() {
    var start = readIdx();
    idx = (start != null && start >= 0 && start < BG_IMAGES.length) ? start : 0;
    setImage(front, BG_IMAGES[idx]);
    void front.offsetWidth;                 // 强制回流，保证 opacity 过渡从 0 开始
    front.style.opacity = String(ALPHA);
    writeIdx(idx);
  })();

  // 后续切换：先预加载下一张，成功才淡入；失败自动跳下一张
  // （front 始终保留当前图，哪怕全部预加载失败也只是不换图，绝不黑屏）
  function next() {
    if (busy) return;
    busy = true;
    var tries = 0;
    (function attempt() {
      if (tries >= BG_IMAGES.length) { busy = false; return; }
      tries++;
      idx = (idx + 1) % BG_IMAGES.length;
      var im = new Image();
      im.onload = function () {
        setImage(back, BG_IMAGES[idx]);
        void back.offsetWidth;
        back.style.opacity = String(ALPHA);
        front.style.opacity = "0";
        setTimeout(function () {
          var t = front; front = back; back = t;
          busy = false;
        }, FADE + 60);
        writeIdx(idx); // 回存，别的页面加载时接着这张放
      };
      im.onerror = function () { attempt(); }; // 这张坏了，试下一张
      im.src = BG_IMAGES[idx];
    })();
  }

  setInterval(next, DWELL);
})();
