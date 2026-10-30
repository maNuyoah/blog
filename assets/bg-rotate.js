/* =========================================================
   背景轮播：双图层交叉淡入（真·丝滑溶解）
   - 预加载下一张，加载完成后才切换，绝不出现“黑屏等图”
   - 两个 bg-layer 交叉控制 opacity：新的淡入、旧的淡出
   - 某张图加载失败自动跳过，绝不停摆
   - 用户系统开启“减弱动态效果”时退化为直接切换
   - 跨页面续播：当前背景下标存 sessionStorage，主页↔相册互穿不重置
   ========================================================= */
(function () {
  "use strict";

  // 背景图清单：ACGN 区横构图（比例 ≥1.6）共 13 张
  // 排序从“干净柔和”到“抢眼杂乱”，方便直观对比每张当壁纸的效果
  var BG_IMAGES = [
    "assets/bg/bg-10000.webp", // 紫藤花
    "assets/bg/bg-10001.webp", // 雪夜街道
    "assets/bg/bg-10006.webp", // 雨窗
    "assets/bg/bg-10005.webp", // 草原拔剑
    "assets/bg/bg-10004.webp", // 木屋少女
    "assets/bg/bg-10008.webp", // 和服少女
    "assets/bg/bg-10007.webp", // 渔船夜色
    "assets/bg/bg-10003.webp", // 粉紫和服
    "assets/bg/bg-58.webp",    // 樱花少女
    "assets/bg/bg-9989.webp",  // 草地女孩
    "assets/bg/bg-9967.webp",  // 台阶众少女
    "assets/bg/bg-9969.webp",  // 暖黄街道
    "assets/bg/bg-9979.webp",  // 人群剪影
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

  // 预加载：成功 ok(true)，失败 ok(false)
  function preload(url, ok) {
    var im = new Image();
    im.onload = function () { ok(true); };
    im.onerror = function () { ok(false); };
    im.src = url;
  }

  // 从 idx 之后找下一张能加载的图；全部失败则放弃本轮
  // firstIdx 非空时首拍直接落在指定下标（跨页面续播：接着别的页面那张放）
  function advance(ok, firstIdx) {
    var tries = 0;
    if (firstIdx != null && firstIdx >= 0 && firstIdx < BG_IMAGES.length) {
      idx = firstIdx - 1; // 让下面 attempt 的 +1 正好落在 firstIdx 上
    }
    (function attempt() {
      if (tries >= BG_IMAGES.length) { ok(null); return; }
      tries++;
      idx = (idx + 1) % BG_IMAGES.length;
      preload(BG_IMAGES[idx], function (fine) {
        if (fine) ok(BG_IMAGES[idx]);
        else attempt();
      });
    })();
  }

  // 首图：接着上次那张淡入到可见层（首次访问才是第一张），并回存下标
  advance(function (url) {
    if (!url) return;
    setImage(front, url);
    // 强制回流一次，保证 opacity 过渡从 0 开始播放
    void front.offsetWidth;
    front.style.opacity = String(ALPHA);
    writeIdx(idx);
  }, readIdx());

  // 循环切换：新图淡入、旧图淡出，过渡结束后交换两层身份
  setInterval(function () {
    if (busy) return;
    advance(function (url) {
      if (!url) return;
      busy = true;
      setImage(back, url);
      void back.offsetWidth;
      back.style.opacity = String(ALPHA);
      front.style.opacity = "0";
      setTimeout(function () {
        var t = front; front = back; back = t;
        busy = false;
      }, FADE + 60);
      writeIdx(idx); // 回存，别的页面加载时接着这张放
    });
  }, DWELL);
})();
