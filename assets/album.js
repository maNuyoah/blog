/* =========================================================
   相册二级页（album.html）交互
   ---------------------------------------------------------
   · 按分区渲染（随手一拍 / ACGN），网格里只加载缩略图
   · 点缩略图 → 从它在页面上的位置平滑放大到居中（FLIP：只动 transform）
   · 放大后才后台加载原图并换上（尺寸一致，画面不跳）
   · 点任意位置 / ESC → 反向缩回缩略图原位
   ========================================================= */
(function () {
  "use strict";

  const DATA = window.XB_ALBUM || {};
  const PLACEHOLDER = "assets/photos/placeholder.svg";

  // 兼容两种数据：新格式 sections[] / 老格式 photos[]
  const SECTIONS = (function () {
    if (Array.isArray(DATA.sections)) {
      return DATA.sections.map((s) => ({
        title: s.title || "相册",
        desc: s.desc || "",
        photos: Array.isArray(s.photos) ? s.photos : [],
      }));
    }
    return [{ title: DATA.title || "相册", desc: DATA.desc || "", photos: Array.isArray(DATA.photos) ? DATA.photos : [] }];
  })();

  const TOTAL = SECTIONS.reduce((n, s) => n + s.photos.length, 0);

  /* ---------------- 主题（与首页共用 localStorage 的 xb-theme） ---------------- */
  function applyTheme(theme) {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const light = theme === "light" || (theme === "auto" && prefersLight);
    document.body.classList.toggle("light", light);
    const icon = document.querySelector(".theme-icon");
    if (icon) icon.textContent = light ? "☀️" : "🌙";
    try { localStorage.setItem("xb-theme", theme); } catch (e) { /* 隐私模式忽略 */ }
  }

  /* ---------------- 灯箱 ---------------- */
  const lb = document.getElementById("lightbox");
  const lbBackdrop = document.getElementById("lbBackdrop");
  let lbImg = null;
  let lbCap = null;
  let curCard = null;
  let token = 0;
  let hideTimer = null;
  const lbDownload = document.getElementById("lbDownload");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");
  let flatList = [], curIdx = -1; // 扁平化的全部照片，供灯箱内上一张/下一张使用

  // 下载按钮只对 ACGN 分区开放；「随手一拍」是自己的照片，不提供下载
  function paintDownload(entry) {
    if (!lbDownload) return;
    const ok = !!(entry && entry.sec && entry.sec.key === "acgn");
    lbDownload.style.display = ok ? "" : "none";
    if (!ok) return;
    lbDownload.href = entry.photo.src;
    lbDownload.setAttribute("download", (entry.photo.src || "").split("/").pop().split("?")[0]);
  }

  // 把原图等比塞进视口。
  // 有说明文字：整体略微上移，底部多留一段给文字；没文字的图保持原来的居中位置。
  function fitRect(w, h, hasCap) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const narrow = vw < 640;
    const padX = narrow ? 10 : 44;
    const padTop = hasCap ? (narrow ? 46 : 52) : (narrow ? 54 : 64);
    const padBottom = hasCap ? (narrow ? 104 : 126) : (narrow ? 62 : 76);
    const maxW = Math.max(80, vw - padX * 2);
    const maxH = Math.max(80, vh - padTop - padBottom);
    const s = Math.min(maxW / w, maxH / h);
    const fw = Math.round(w * s);
    const fh = Math.round(h * s);
    return {
      left: Math.round((vw - fw) / 2),
      top: Math.round(padTop + (maxH - fh) / 2),
      width: fw,
      height: fh,
    };
  }

  function openLightbox(card, photo) {
    const thumb = card && card.querySelector("img");
    if (!photo || !thumb) return;

    clearTimeout(hideTimer);
    token++;
    const myToken = token;

    const from = thumb.getBoundingClientRect();
    const nw = photo.w || thumb.naturalWidth || from.width;
    const nh = photo.h || thumb.naturalHeight || from.height;
    const to = fitRect(nw, nh, !!photo.cap);

    if (lbImg) { lbImg.remove(); lbImg = null; }
    if (lbCap) { lbCap.remove(); lbCap = null; }

    const img = document.createElement("img");
    img.className = "lb-img";
    img.alt = photo.cap || "";
    img.draggable = false;
    img.src = photo.thumb || photo.src;    // 先用缩略图，点开即有画面
    img.style.left = to.left + "px";
    img.style.top = to.top + "px";
    img.style.width = to.width + "px";
    img.style.height = to.height + "px";
    img.style.borderRadius = "16px";
    img.style.transition = "none";         // 首帧直接摆到缩略图位置，不做过渡

    // 起始状态 = 缩略图当前在页面上的位置（中心对齐 + 等比缩放）
    const dx = (from.left + from.width / 2) - (to.left + to.width / 2);
    const dy = (from.top + from.height / 2) - (to.top + to.height / 2);
    const scale = from.width / to.width;
    img.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + scale + ")";

    lb.appendChild(img);
    lbImg = img;

    // 说明文字：贴在大图下沿外侧；大图放满时整体提上来，避免压到底部提示条
    if (photo.cap) {
      const cap = document.createElement("div");
      cap.className = "lb-cap";
      cap.textContent = photo.cap;
      lb.appendChild(cap);
      lbCap = cap;
      const maxTop = window.innerHeight - 66 - cap.offsetHeight;
      let top = to.top + to.height + 12;
      if (top > maxTop) top = maxTop;
      cap.style.top = Math.max(8, top) + "px";
    }

    curCard = card;

    lb.classList.remove("closing");
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-lock");

    void lb.offsetWidth;                   // 强制回流，让背景的 opacity 过渡生效
    lbBackdrop.style.opacity = "1";

    // 恢复过渡后，在下一帧开始放大（分两帧，保证从缩略图位置出发）
    requestAnimationFrame(() => {
      if (myToken !== token) return;
      img.style.transition = "";
      requestAnimationFrame(() => {
        if (myToken !== token) return;
        img.style.transform = "translate(0,0) scale(1)";
        img.style.borderRadius = "8px";
      });
    });

    // 后台静默加载原图；宽高与容器一致，换上时不会跳动
    const hi = new Image();
    hi.onload = () => {
      if (myToken === token && lbImg === img) img.src = photo.src;
    };
    hi.src = photo.src;

    curIdx = flatList.findIndex((x) => x.card === card);
    paintDownload(flatList[curIdx]);
  }

  function closeLightbox() {
    if (!lb.classList.contains("open") || !lbImg) return;
    const img = lbImg;
    const card = curCard;
    token++;                               // 让尚未回来的原图加载 / rAF 失效

    const from = img.getBoundingClientRect();
    const thumb = card ? card.querySelector("img") : null;
    const to = thumb ? thumb.getBoundingClientRect() : null;

    lb.classList.remove("open");
    lb.classList.add("closing");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-lock");
    lbBackdrop.style.opacity = "0";

    if (to && to.width > 0) {
      const dx = (to.left + to.width / 2) - (from.left + from.width / 2);
      const dy = (to.top + to.height / 2) - (from.top + from.height / 2);
      const scale = to.width / from.width;
      img.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + scale + ")";
      img.style.borderRadius = "16px";
    } else {
      img.style.transform = "scale(.72)";
      img.style.opacity = "0";
    }

    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      lb.classList.remove("closing");
      if (lbImg) { lbImg.remove(); lbImg = null; }
      if (lbCap) { lbCap.remove(); lbCap = null; }
      curCard = null;
    }, 450);
  }

  // 灯箱内切换上一张/下一张：淡出→换图→淡入；尺寸/文案/下载链接同步更新
  function setLbImage(photo) {
    if (!photo || !lbImg) return;
    const nw = photo.w || lbImg.naturalWidth || 4;
    const nh = photo.h || lbImg.naturalHeight || 3;
    const to = fitRect(nw, nh, !!photo.cap);
    lbImg.src = photo.thumb || photo.src;
    lbImg.alt = photo.cap || "";
    lbImg.style.left = to.left + "px";
    lbImg.style.top = to.top + "px";
    lbImg.style.width = to.width + "px";
    lbImg.style.height = to.height + "px";
    if (lbCap) { lbCap.remove(); lbCap = null; }
    if (photo.cap) {
      const cap = document.createElement("div");
      cap.className = "lb-cap";
      cap.textContent = photo.cap;
      lb.appendChild(cap);
      lbCap = cap;
      const maxTop = window.innerHeight - 66 - cap.offsetHeight;
      let top = to.top + to.height + 12;
      if (top > maxTop) top = maxTop;
      cap.style.top = Math.max(8, top) + "px";
    }
    // 下载按钮可见性跟随分区（仅 ACGN 可下载）；翻图跨分区时同步切换
    paintDownload(flatList.find((x) => x.photo === photo));
    const hi = new Image();
    hi.onload = () => { if (lbImg) lbImg.src = photo.src; };
    hi.src = photo.src;
  }
  function step(dir) {
    if (!flatList.length || curIdx < 0 || !lbImg) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = (curIdx + dir + flatList.length) % flatList.length;
    const enter = () => {
      lbImg.style.transition = "none";
      lbImg.style.transform = "translateX(" + (dir > 0 ? 26 : -26) + "px)";
      lbImg.style.opacity = "0";
      void lbImg.offsetWidth;
      lbImg.style.transition = reduce ? "none" : "opacity .22s ease, transform .22s ease";
      lbImg.style.transform = reduce ? "none" : "translateX(0)";
      lbImg.style.opacity = "1";
    };
    const swap = () => { curIdx = n; curCard = flatList[n].card; setLbImage(flatList[n].photo); enter(); };
    if (reduce) { swap(); return; }
    lbImg.style.transition = "opacity .18s ease, transform .18s ease";
    lbImg.style.opacity = "0";
    lbImg.style.transform = "translateX(" + (dir > 0 ? -26 : 26) + "px)";
    setTimeout(swap, 180);
  }

  /* ---------------- 渲染分区 + 缩略图 ---------------- */
  let revealObserver = null;

  function watch(cards) {
    if (!cards.length) return;
    if ("IntersectionObserver" in window) {
      if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              revealObserver.unobserve(en.target);
            }
          });
        }, { rootMargin: "120px 0px" });
      }
      cards.forEach((c) => revealObserver.observe(c));
    } else {
      cards.forEach((c) => c.classList.add("in"));
    }
    // 兜底：万一观察器没触发（异常/老浏览器），1.2s 后也统一显示
    setTimeout(() => cards.forEach((c) => c.classList.add("in")), 1200);
  }

  function buildCard(photo) {
    const fig = document.createElement("figure");
    fig.className = "album-card";

    const img = document.createElement("img");
    img.src = photo.thumb || photo.src;
    img.alt = photo.cap || "相册照片";
    img.loading = "lazy";
    img.decoding = "async";
    img.draggable = false;
    if (photo.w && photo.h) { img.width = photo.w; img.height = photo.h; } // 先占好比例，加载时不抖
    img.onerror = () => { img.onerror = null; img.src = PLACEHOLDER; };
    fig.appendChild(img);

    if (photo.cap) {
      const cap = document.createElement("figcaption");
      cap.textContent = photo.cap;
      fig.appendChild(cap);
    }

    fig.addEventListener("click", () => openLightbox(fig, photo));
    return fig;
  }

  function renderSections() {
    const host = document.getElementById("albumSections");
    const countEl = document.getElementById("albumCount");
    const tipEl = document.getElementById("albumTip");
    if (!host) return;

    if (DATA.desc) document.getElementById("albumDesc").textContent = DATA.desc;
    if (countEl) countEl.textContent = TOTAL + " 张";

    host.innerHTML = "";

    SECTIONS.forEach((sec) => {
      const section = document.createElement("section");
      section.className = "album-section";

      const head = document.createElement("div");
      head.className = "album-section-head";
      head.innerHTML =
        '<h2 class="album-section-title">' + sec.title + "</h2>" +
        (sec.desc ? '<span class="album-section-desc">' + sec.desc + "</span>" : "") +
        '<span class="album-section-count">' + sec.photos.length + " 张</span>";
      section.appendChild(head);

      if (!sec.photos.length) {
        const empty = document.createElement("div");
        empty.className = "album-empty";
        empty.textContent = "这个分区还没有照片，之后慢慢往里放~";
        section.appendChild(empty);
        host.appendChild(section);
        return;
      }

      const grid = document.createElement("div");
      grid.className = "album-grid";
      const cards = sec.photos.map((p) => {
        const card = buildCard(p);
        grid.appendChild(card);
        flatList.push({ card, photo: p, sec: sec });
        return card;
      });
      section.appendChild(grid);
      host.appendChild(section);

      watch(cards);
    });

    if (tipEl) tipEl.style.display = TOTAL ? "" : "none";
  }

  /* ---------------- 启动 ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    try {
      applyTheme(localStorage.getItem("xb-theme") || "dark");
    } catch (e) {
      applyTheme("dark");
    }

    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        applyTheme(document.body.classList.contains("light") ? "dark" : "light");
      });
    }

    renderSections();
    // 背景轮播由 assets/bg-rotate.js 统一负责（与首页共用）

    if (lb) {
      // 整块灯箱都是关闭热区：点图片、点空白、点提示条都收起
      lb.addEventListener("click", (e) => { e.preventDefault(); closeLightbox(); });
      lb.addEventListener("contextmenu", (e) => e.preventDefault());
    }
    // 翻图按钮 / 下载：阻止冒泡，否则会触发灯箱“点任意处收起”
    if (lbPrev) lbPrev.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); step(-1); });
    if (lbNext) lbNext.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); step(1); });
    if (lbDownload) lbDownload.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft" && lb.classList.contains("open")) step(-1);
      else if (e.key === "ArrowRight" && lb.classList.contains("open")) step(1);
    });
  });
})();
