/* =========================================================
   XingHuiSama 风格静态博客模板 — 交互 & 占位数据
   所有模块均已激活（轮播 / 滚动 / 主题 / 播放 / 点击反馈）。
   想换内容？直接改下面这几个数组就行。
   ========================================================= */

/* ---------------- 站点配置 ---------------- */
const SITE = {
  title: "XingHuiSama の 宝藏之地",
  photoCount: 128,
  // 歌词 / 弹幕轮播文案
  lyrics: [
    "BUG 修复进度 99%，剩下 1% 永远修不完。",
    "在干嘛呢？有笨蛋嘛？",
    "睡大觉中，请勿打扰（其实在发呆）",
    "今天也要元气满满地写代码喵~",
    "别戳我，我正在跟眼皮子做殊死搏斗",
    "社会派推理退退退，我只爱本格",
    "别催我学习，补番ing",
    "偷偷告诉你，站长是懒猪",
    "本条字幕没有任何意义，就是凑数的",
    "你搁这盯我半天了，该干嘛干嘛去",
  ],
};

/* ---------------- 文章（占位） ---------------- */
const POSTS = [
];

/* ---------------- 台词の番组放送（金句展示） ----------------
   每组 3 句，每句前自动加 📌。点“换一换”平滑切到下一组（循环）。
   想换内容？直接改下面的 QUOTE_GROUPS 数组：每个子数组 = 一组，里面放 3 句即可。
   当前为占位示例，收到真实句子后整体替换这里。 */
const QUOTE_GROUPS = [
  ["如果樱花飘落的时间是秒速五厘米，两颗心要多久才能靠近。——《秒速五厘米》", "人类的赞歌是勇气的赞歌，人类的伟大是勇气的伟大。——《JOJO的奇妙冒险》", "一切都是命运石之门的选择。——《命运石之门》"],
  ["又到了白色相薄的季节。——《白色相薄》", "不管你我相距多远，我都想告诉你，我对你的心意都不会变。——《月色真美》", "都是时臣的错。——《fate zero》"],
  ["樱花满地集于我心 楪舞纷飞祈愿相随。——《罪恶王冠》", "吾王剑之所指，吾等心之所向。——《fate zero》", "邪王真眼是最强的。——《中二病也要谈恋爱》"],
  ["你为什么这么熟练啊！——《白色相簿2》", "今天的风儿甚为喧嚣啊。——《男子高中生的日常》", "没有未来的未来不是我想要的未来。——《境界的彼方》"],
  ["你指尖跳跃的电光是我此生不变的信仰，唯我超电磁炮永世长存。——《某科学的超电磁炮》", "面码，找到你了。——《未闻花名》", "音无结弦之时，天使跃动之心，立于浮华之世，奏响天籁之音。——《Angel beats》"],
  ["能哭的地方只有厕所和爸爸的怀里。——《CLANNAD》", "正因为不会发生，所以才叫奇迹——《KANON》", "愿你终有一天能与重要的人重逢。——《可塑性记忆》"],
  ["无需为者，自不为之；务需为者，应付了之。——《冰菓》", "你看，很简单吧，谁都不会受伤的世界完成了。——《我的青春恋爱物语果然有问题》", "万水千山，你愿意陪我一起看吗。——《狐妖小红娘》"],
  ["只要是活物,即便是神我也杀给你看。——《空之境界》", "欺骗世界，欺骗最初的你。——《命运石之门》", "空白永不败北！——《游戏人生》"],
  ["今后无论发生什么，请不要后悔与我相遇。 ——《CLANNAD》", "我们每天度过的称之为日常的生活，其实是一个个连续发生的奇迹也说不定。——《日常》", "所谓的王者，就是要活的比任何人都要耀眼，成为万民敬仰的存在。——《FateZero》"],
  ["我的朋友，不妨动一动你那小小的黑色细胞。——赫尔克里·波洛", "我讨厌公平竞争。——里染天马", "那种可能性，早已料及。——上苙丞"],
  ["在排除所有不可能之后，剩下的无论多么不合乎情理，那就是真相。——夏洛克·福尔摩斯", "步行九英里并非易事，何况在雨中。——《The Nine Mile Walk 》", "错误，不代表无意义。——《关于地的运动》"],
  ["完结撒花！——《樱花庄的宠物女孩》", "流泪告别并不适合我们，因为下次再见会很难为情。——《葬送的芙莉莲》", "我会跨越七大海洋与你相会，把爱意注入你的心。——《夏日口袋》"],
  ["你反手无力，正手不精，脚步松散，反应迟钝，没一个动作像样！就你还想跟我同台较量吗，做你的美梦！——《乒乓》", "女人分为两种，分别是青梅竹马和偷腥猫！——《败犬女主太多了》", "你为什么要演奏春日影？！——《BanG Dream! It's MyGO!!!!!》"],
  ["赌上爷爷的名义！——《金田一少年事件簿》", "我喜欢了你十年，却用四月编织了一个我不爱你的谎言。——《四月是你的谎言》", "未闻花名，但识花香。再遇花时，泪已千行。——《未闻花名》"],
  ["井底之蛙不识海之宽广，却知晓天之蓝。《知晓天之蓝的人啊》", "这个时候，只要微笑就可以了。——《EVA》"],
];

/* ---------------- 说说（占位） ---------------- */
const CHATTERS = [
  { text: "就剩下一个留言板和打包上传到github仓库的工作了，这俩得让我先学习学习咋弄的", date: "2026.10.30" },
  { text: "相册终于也搞完了，就剩一些零碎的小部分了", date: "2026.10.29" },
  { text: "光一个音乐播放器就让ai足足改了17次，总算搞出我想要的效果了", date: "2026.10.28" },
  { text: "今天开始改模块透明度，音乐模块和图片模块，任务也是非常之艰巨啊，希望能搞完。", date: "2026.10.28" },
  { text: "喜报！！我的网站终于是诞生了！！只不过现在还是婴儿阶段，好多都还要完善。", date: "2026.10.27" },
];

/* ---------------- 播放列表 ----------------
   src 用音乐文件夹里的真实文件名（含后缀）。
   title/artist 是网页显示名；留空则自动用文件名 / “未知歌手”兜底。
   cover 指向 assets/covers/ 里同名封面（已由 extract_tags.js 从 MP3 内嵌提取）。
   歌词由 assets/lyrics-data.js (window.XB_LYRICS) 提供，键=文件名去后缀。
   封面与歌词均为本地文件，双击 file:// 打开即可显示，无需本地服务器。
   改歌/加歌后重跑 node extract_tags.js 即可重新提取封面与歌词。

   【省流量】src 现指向 assets/music-128/（128kbps、已剥内嵌封面的压缩版，约原体积 40%）；
   原 320k 文件保留在 assets/music/ 未动。想听回高清：把 src 里的 "music-128/" 改回 "music/"。
   加新歌后如需同步压缩：用 ffmpeg -i 原文件 -map 0:a -vn -c:a libmp3lame -b:a 128k 输出到 music-128/。
   播放为懒加载：点播放才开始下载（audio preload=metadata + 首次播放才抓整首进内存）。 */
const TRACKS = [
  { title: "Die For You",  artist: "VALORANT/Grabbitz", src: "assets/music-128/Die For You.mp3",  cover: "assets/covers/Die For You.jpg" },
  { title: "LOVE 2000",    artist: "遠野ひかる",        src: "assets/music-128/LOVE 2000.mp3",    cover: "assets/covers/LOVE 2000.jpg" },
  { title: "Ticking Away", artist: "VALORANT/Grabbitz/bbno$", src: "assets/music-128/Ticking Away.mp3", cover: "assets/covers/Ticking Away.jpg" },
  { title: "secret base ~君がくれたもの~ (10 years after Ver.)", artist: "茅野愛衣/戸松遥/早見沙織", src: "assets/music-128/secret base ~君がくれたもの~ (10 years after Ver.).mp3", cover: "assets/covers/secret base ~君がくれたもの~ (10 years after Ver.).jpg" },
  { title: "spiral",       artist: "LONGMAN",          src: "assets/music-128/spiral.mp3",       cover: "assets/covers/spiral.jpg" },
  { title: "すずめ feat.十明", artist: "RADWIMPS/十明",  src: "assets/music-128/すずめ feat.十明.mp3", cover: "assets/covers/すずめ feat.十明.jpg" },
  { title: "フィナーレ。", artist: "eill",              src: "assets/music-128/フィナーレ。.mp3",    cover: "assets/covers/フィナーレ。.jpg" },
  { title: "天龙八部之宿敌", artist: "许嵩",            src: "assets/music-128/天龙八部之宿敌-许嵩.mp3", cover: "assets/covers/天龙八部之宿敌-许嵩.jpg" },
  { title: "戒烟",           artist: "李荣浩",          src: "assets/music-128/戒烟-李荣浩.mp3",       cover: "assets/covers/戒烟-李荣浩.jpg" },
  { title: "我想念",         artist: "汪苏泷",          src: "assets/music-128/我想念 - 汪苏泷.mp3",   cover: "assets/covers/我想念 - 汪苏泷.jpg" },
];

/* ---------------- 相册（首页只显示入口，图片在 album.html 二级页） ----------------
   照片数据统一放在 assets/album-data.js（window.XB_ALBUM），按分区（随手一拍 / ACGN）存放。
   图片：assets/photos/<文件名>.webp    缩略图：assets/photos/thumbs/<文件名>.webp（长边 400px）
   新增照片：转成 webp 后两张各丢进对应文件夹，再往 album-data.js 对应分区加一条即可。 */
const ALBUM = window.XB_ALBUM || { sections: [] };
const PHOTOS = (ALBUM.sections || []).reduce((all, s) => all.concat(s.photos || []), []);
SITE.photoCount = PHOTOS.length; // 数据面板“照片”数字跟随真实数量

/* ---------------- 数据面板 ---------------- */
const DASHBOARD = [
  { num: POSTS.length, label: "文章总数" },
  { num: CHATTERS.length, label: "说说碎片" },
  { num: SITE.photoCount, label: "摄影照片" },
  { num: "2026.10", label: "建站年月" },
  { num: "99%", label: "摸鱼概率" },
];

/* ---------------- 页脚技术徽章（已移除） ---------------- */
const BADGES = [
];

/* =========================================================
   工具：Toast 轻提示
   ========================================================= */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

/* =========================================================
   渲染：文章（带自动轮播）
   ========================================================= */
let postOffset = 0;
function renderPosts(filter = "") {
  const list = document.getElementById("postsList");
  const f = filter.trim().toLowerCase();
  const data = POSTS.filter(p => !f || p.title.toLowerCase().includes(f) || p.desc.toLowerCase().includes(f));
  if (!data.length) {
    list.innerHTML = `
      <div class="post-empty glass">
        <div class="post-empty-icon">📝</div>
        <p>站长太懒了，还没有文章哦，敬请期待~</p>
      </div>`;
    document.getElementById("statPosts").textContent = POSTS.length;
    return;
  }
  // 自动轮播：按 postOffset 循环重排顺序
  const ordered = data.map((_, i) => data[(i + postOffset) % data.length]);
  list.innerHTML = ordered.map((p, i) => `
    <a class="post-card" data-title="${p.title}" style="animation-delay:${i * 60}ms">
      <img class="post-thumb" src="${p.cover}" alt="" />
      <div class="post-info">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="post-date">${p.date}</span>
      </div>
    </a>`).join("");
  document.getElementById("statPosts").textContent = POSTS.length;
}
// 文章每 3.5s 轮播一次
setInterval(() => { postOffset = (postOffset + 1) % POSTS.length; renderPosts(); }, 3500);

/* =========================================================
   渲染：说说（无缝循环滚动，内容复制两份）
   ========================================================= */
function renderChatters() {
  const track = document.getElementById("chatterTrack");
  const card = c => `<div class="chatter-card">${c.text}<span class="chatter-date">${c.date}</span></div>`;
  const html = CHATTERS.map(card).join("");
  // 复制一份做无缝循环滚动（scrollUp 0→-50%）；桌面/手机端表现一致
  track.innerHTML = html + html;
  // 触屏对齐桌面端 hover 暂停：按住暂停滚动，松手/取消恢复
  track.addEventListener("touchstart", () => { track.style.animationPlayState = "paused"; }, { passive: true });
  track.addEventListener("touchend", () => { track.style.animationPlayState = ""; });
  track.addEventListener("touchcancel", () => { track.style.animationPlayState = ""; });
  document.getElementById("statChatters").textContent = CHATTERS.length;
  document.getElementById("statPhotos").textContent = SITE.photoCount;
}

/* =========================================================
   渲染：相册入口（封面用最新 3 张缩略图叠成一小摞）
   ========================================================= */
function renderPhotos() {
  const collage = document.getElementById("albumCollage");
  const countEl = document.getElementById("photoCount");
  if (countEl) countEl.textContent = PHOTOS.length + " 张";
  if (!collage) return;

  collage.innerHTML = "";
  const preview = PHOTOS.slice(0, 3);
  if (!preview.length) {
    const img = document.createElement("img");
    img.src = "assets/photos/placeholder.svg";
    img.alt = "";
    collage.appendChild(img);
    return;
  }
  preview.forEach(p => {
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = "";
    img.onerror = () => { img.onerror = null; img.src = "assets/photos/placeholder.svg"; };
    img.src = p.thumb || p.src;
    collage.appendChild(img);
  });
}

/* =========================================================
   渲染：数据面板 / 页脚 / 每日选刊日期
   ========================================================= */
function renderDashboard() {
  document.getElementById("dashboard").innerHTML = DASHBOARD.map(d => `
    <div class="dash-item"><div class="dash-num">${d.num}</div><div class="dash-label">${d.label}</div></div>`).join("");
}

/* =========================================================
   台词の番组放送：金句分组展示 + 换一换平滑切换
   ========================================================= */
function initQuoteShowcase() {
  const list = document.getElementById("quoteList");
  const btn = document.getElementById("quoteSwap");
  if (!list || !btn || !QUOTE_GROUPS.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let idx = 0, swapping = false;

  const paint = group => {
    list.innerHTML = group.map(q => `<li><span class="q-pin">📌</span><span class="q-text">${esc(q)}</span></li>`).join("");
  };

  const swap = () => {
    if (swapping) return;
    swapping = true;
    const next = (idx + 1) % QUOTE_GROUPS.length;
    const icon = btn.querySelector(".q-icon");
    if (reduce) { idx = next; paint(QUOTE_GROUPS[idx]); swapping = false; return; }
    // 退场：上移淡出
    list.style.transition = "opacity .26s ease, transform .26s ease";
    list.style.opacity = "0";
    list.style.transform = "translateY(-10px)";
    if (icon) icon.style.transform = "rotate(360deg)";
    setTimeout(() => {
      idx = next; paint(QUOTE_GROUPS[idx]);
      // 入场：从下方淡入
      list.style.transition = "none";
      list.style.transform = "translateY(10px)";
      list.style.opacity = "0";
      void list.offsetWidth; // 强制回流，确保入场动画生效
      list.style.transition = "opacity .3s ease, transform .3s ease";
      list.style.transform = "translateY(0)";
      list.style.opacity = "1";
      setTimeout(() => { swapping = false; }, 320);
    }, 260);
  };

  paint(QUOTE_GROUPS[idx]);
  btn.addEventListener("click", swap);
}

/* =========================================================
   主题切换
   ========================================================= */
function applyTheme(theme) {
  const body = document.body;
  if (theme === "auto") {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    body.classList.toggle("light", prefersLight);
  } else {
    body.classList.toggle("light", theme === "light");
  }
  const cur = body.classList.contains("light") ? "亮色" : "暗色";
  document.getElementById("themeHint").textContent = `当前：${cur}`;
  localStorage.setItem("xb-theme", theme);
  document.querySelectorAll(".swatch").forEach(s => s.classList.toggle("active", s.dataset.theme === theme));
  document.querySelector(".theme-icon").textContent = body.classList.contains("light") ? "☀️" : "🌙";
}
document.getElementById("themeToggle")?.addEventListener("click", () => {
  applyTheme(document.body.classList.contains("light") ? "dark" : "light");
});
document.querySelectorAll(".swatch").forEach(s =>
  s.addEventListener("click", () => applyTheme(s.dataset.theme)));

/* =========================================================
   导航：平滑滚动 + 滑动指示器 + 滚动高亮（scroll-spy）
   ========================================================= */
const navIndicator = document.getElementById("navIndicator");
const mnIndicator = document.getElementById("mnIndicator");
const mobileNav = document.querySelector(".mobile-nav");
const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));
const mnAnchors = Array.from(document.querySelectorAll(".mobile-nav .mn-item"));
const navByHref = {}; navAnchors.forEach(a => { navByHref[a.getAttribute("href")] = a; });
const mnByHref = {}; mnAnchors.forEach(a => { mnByHref[a.getAttribute("href")] = a; });

// 桌面横向滑动指示器
function moveIndicator(link) {
  const wrap = document.querySelector(".nav-links");
  if (!link || !navIndicator || !wrap) return;
  if (getComputedStyle(wrap).display === "none") { navIndicator.style.opacity = "0"; return; }
  navIndicator.style.opacity = "1";
  navIndicator.style.left = link.offsetLeft + "px";
  navIndicator.style.width = link.offsetWidth + "px";
}
// 移动端竖向滑动指示器（贴合胶囊左侧，随栏目上下滑动）
function moveMnIndicator(link) {
  if (!link || !mnIndicator || !mobileNav) return;
  if (getComputedStyle(mobileNav).display === "none") { mnIndicator.style.opacity = "0"; return; }
  mnIndicator.style.opacity = "1";
  mnIndicator.style.top = (link.offsetTop - mobileNav.clientTop) + "px";
  mnIndicator.style.height = link.offsetHeight + "px";
}
// 同时高亮两端导航并滑动各自的指示器
function setActiveByHref(href) {
  navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === href));
  mnAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === href));
  moveIndicator(navByHref[href]);
  moveMnIndicator(mnByHref[href] || mnAnchors[0]);
}

// 点击：首页→顶部，关于→底部，其余→对应区块
function bindNavClick(a) {
  a.addEventListener("click", e => {
    const href = a.getAttribute("href");
    if (!href || href[0] !== "#") return; // 非 hash 的页面链接走浏览器默认跳转
    e.preventDefault();
    if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href === "#about") {
      const bottom = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: bottom, behavior: "smooth" });
    } else {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveByHref(href);
  });
}
navAnchors.forEach(bindNavClick);
mnAnchors.forEach(bindNavClick);

// 滚动高亮（scroll-spy）：顶部→首页，底部→关于，中间→最近区块
function onScrollSpy() {
  const y = window.scrollY || window.pageYOffset || 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  let href;
  if (y <= 4) href = "#";
  else if (y >= max - 4) href = "#about";
  else {
    href = "#";
    [["#posts", "posts"], ["#photowall", "photowall"]].forEach(([h, id]) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) href = "#posts";
    });
  }
  setActiveByHref(href);
}
window.addEventListener("scroll", onScrollSpy, { passive: true });
window.addEventListener("resize", onScrollSpy);
window.addEventListener("load", onScrollSpy);
onScrollSpy();

/* 顶部滚动进度条 */
function updateScrollProgress() {
  const bar = document.getElementById("scrollBar");
  if (!bar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
  bar.style.width = pct + "%";
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

/* 首屏骨架屏：load 后淡出；加超时兜底，避免 load 不触发时一直挡着 */
(function hideSkeleton() {
  const sk = document.getElementById("skeleton");
  if (!sk) return;
  let done = false;
  const finish = () => { if (done) return; done = true; sk.classList.add("done"); setTimeout(() => sk.remove(), 600); };
  window.addEventListener("load", finish);
  setTimeout(finish, 2600); // 兜底：最多挡 2.6s
})();

/* 跨断点重渲染说说：桌面(滚动) ↔ 手机(静态) 切换时保持正确 */
let _lastMobile = null;
window.addEventListener("resize", () => {
  const m = window.matchMedia("(max-width: 900px)").matches;
  if (m !== _lastMobile) { _lastMobile = m; renderChatters(); }
});


/* =========================================================
   播放器（本地音频）
   ========================================================= */
function initPlayer() {
  let idx = 0, playing = false, scrubbing = false;
  const audio = document.getElementById("audioEl");
  const cover = document.getElementById("playerCover");
  const title = document.getElementById("playerTitle");
  const artist = document.getElementById("playerArtist");
  const pbar = document.getElementById("playerProgress");
  const pbarFill = document.getElementById("pbarFill");
  const pbarThumb = document.getElementById("pbarThumb");
  const curTime = document.getElementById("curTime");
  const totTime = document.getElementById("totTime");
  const status = document.getElementById("playerStatus");
  const playBtn = document.getElementById("playBtn");
  const lyricBox = document.getElementById("lyricBox");
  let curLyrics = [];
  let activeLyric = -1;
  // seek 门控：Safari/部分引擎在音频未就绪时会静默丢弃 seek（表现为“松手跳回开头”），
  // 必须等 seekable 就绪再跳；时长未知时先记比例，就绪后按比例换算
  let pendingSeek = null, pendingRatio = null, loadWarned = false;
  // seek 锁定：目标非 null 期间 timeupdate 不得覆盖 UI，
  // 否则异步 seek 完成前，旧的 currentTime 会把进度条瞬间刷回旧位置（看着像“跳回开头”）
  let seekingTo = null, seekGuard = 0, seekFailWarned = false;
  let seekTarget = null, seekTimer = 0, seekTries = 0, seekResume = false;
  // 内存音源（Blob）：绕开“服务器不支持 HTTP Range 只能整份发送”导致的无法跳转
  let blobUrl = null, blobSrc = "", blobPending = false;
  // 拖动状态：松手只用这里记录的比例，绝不用 pointerup 的坐标重新算
  let downRatio = null, lastRatio = null, moved = false;

  const fmt = s => {
    s = Math.max(0, Math.floor(s || 0));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };
  // 自定义进度条渲染：按真实播放时间画填充与滑块位置（滑块不越出轨道两端）
  function paintBar(pct) {
    const p = Math.max(0, Math.min(100, pct || 0));
    const tw = pbarThumb.offsetWidth || 14;
    // 滑块：left 从 0 走到 100%-tw（不越出轨道两端）；填充：末端对齐滑块中心
    pbarThumb.style.left = "calc(" + p + "% - " + (p * tw / 100).toFixed(2) + "px)";
    pbarFill.style.width = "calc(" + p + "% - " + (p * tw / 100 - tw / 2).toFixed(2) + "px)";
    pbar.setAttribute("aria-valuenow", String(Math.round(p)));
  }
  // 真实时长：优先 audio.duration；部分 VBR MP3 会给出 Infinity/NaN，用 seekable 末尾兜底
  function getDuration() {
    if (isFinite(audio.duration) && audio.duration > 0) return audio.duration;
    try {
      if (audio.seekable && audio.seekable.length) {
        const e = audio.seekable.end(audio.seekable.length - 1);
        if (isFinite(e) && e > 0) return e;
      }
    } catch (_) {}
    return 0;
  }
  function renderProgressUI(t) {
    const d = getDuration();
    paintBar(d ? Math.max(0, Math.min(1, (t || 0) / d)) * 100 : 0);
  }

  // LRC 歌词解析：把 "[mm:ss.xx] 文本" 拆成 {t, text} 数组，按时间排序
  function parseLRC(text) {
    const lines = [], re = /\[(\d{1,2}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g;
    text.split(/\r?\n/).forEach(line => {
      re.lastIndex = 0; const times = []; let m;
      while ((m = re.exec(line)) !== null) {
        const t = (+m[1]) * 60 + (+m[2]) + (m[3] ? +("0." + m[3]) : 0);
        times.push(t);
      }
      const content = line.replace(re, "").trim();
      if (content && times.length) times.forEach(t => lines.push({ t, text: content }));
    });
    return lines.sort((a, b) => a.t - b.t);
  }
  function escapeHtml(s) {
    return (s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }
  function renderLyrics(text) {
    if (!text) { lyricBox.innerHTML = '<div class="lyric-empty">暂无歌词</div>'; curLyrics = []; activeLyric = -1; return; }
    curLyrics = parseLRC(text); activeLyric = -1;
    if (!curLyrics.length) { lyricBox.textContent = text; return; } // 纯文本（无时间轴）歌词
    lyricBox.innerHTML = curLyrics.map((l, i) => `<div class="lyric-line" data-i="${i}">${escapeHtml(l.text)}</div>`).join("");
  }
  // 把某一行歌词滚到歌词盒垂直中央。
  // 用 getBoundingClientRect 差值定位，不依赖 offsetTop/offsetParent
  // （此前用 el.offsetTop 时，由于祖先都没有 position，offsetParent 是 <body>，
  //  取到的是相对整页的绝对坐标，导致滚动严重过头——这就是“滚到的不是当前高亮句”的根因）。
  function scrollLyricToCenter(el, instant) {
    if (!el || !lyricBox) return;
    const boxRect = lyricBox.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    // 元素相对歌词盒“内容区顶部”的偏移 = 当前可视偏移 + 已滚动量
    const offsetInContent = lyricBox.scrollTop + (elRect.top - boxRect.top);
    const target = offsetInContent - (lyricBox.clientHeight - elRect.height) / 2;
    const max = Math.max(0, lyricBox.scrollHeight - lyricBox.clientHeight);
    const top = Math.max(0, Math.min(target, max));
    try {
      lyricBox.scrollTo({ top, behavior: instant ? "auto" : "smooth" });
    } catch (_) {
      lyricBox.scrollTop = top;
    }
  }
  function syncLyrics(opts) {
    if (!curLyrics.length || !lyricBox) return;
    opts = opts || {};
    // 提前 0.15s 高亮，观感更跟手
    const t = audio.currentTime + 0.15;
    let i = 0;
    for (let k = 0; k < curLyrics.length; k++) { if (t >= curLyrics[k].t) i = k; else break; }
    // 首句之前的间奏：不高亮任何行，保持原位
    if (t < curLyrics[0].t) {
      if (activeLyric !== -1) {
        const p = lyricBox.querySelector(".lyric-line.active"); if (p) p.classList.remove("active");
        activeLyric = -1;
      }
      return;
    }
    if (i === activeLyric && !opts.force) return;
    const prev = lyricBox.querySelector(".lyric-line.active"); if (prev) prev.classList.remove("active");
    const el = lyricBox.querySelector('.lyric-line[data-i="' + i + '"]');
    if (el) {
      el.classList.add("active");
      scrollLyricToCenter(el, !!opts.instant);
    }
    activeLyric = i;
  }
  // 读取已提取的封面/歌词文件（无需本地服务器，双击 file:// 也能用）
  function loadLyrics() {
    const tr = TRACKS[idx];
    const key = (tr.src || "").split("/").pop().replace(/\.[^.]+$/, "");
    const lib = window.XB_LYRICS || {};
    const text = lib[key] || "";
    if (!text && Object.keys(lib).length) {
      // 歌词库已加载但没有这首：明确区分“数据缺失”与“暂无歌词”，
      // 最常见原因是浏览器缓存了旧版 lyrics-data.js（未包含新增歌曲）
      curLyrics = []; activeLyric = -1;
      lyricBox.innerHTML = '<div class="lyric-empty">这首歌暂无歌词数据<br><span style="opacity:.6;font-size:.76rem">若已添加歌词，请 Ctrl+Shift+R 强制刷新</span></div>';
      return;
    }
    renderLyrics(text);
  }

  /* ---- 把整首歌抓进内存（Blob）----
     为什么要这么做：服务器若不支持 HTTP Range（很多预览服务、python -m http.server 都是），
     它只能“从头整份”发送数据，播放器 seekable 里只有已下载的那一小段，
     于是拖到没下载的位置就跳不动（旧版更糟：直接把目标钳成 0 → 从头播放）。
     Blob 是内存里的完整文件，浏览器可在本地任意随机读取，seek 永远瞬间有效，
     从此与服务器支持什么无关。只缓存当前一首，切歌时释放，不占内存。 */
  function startBlobUpgrade(tr) {
    if (location.protocol === "file:" || !tr || !tr.src) return; // 本地文件本身可随机读，无需
    if (blobSrc === tr.src && blobUrl) return;
    const myIdx = idx, mySrc = tr.src;
    blobPending = true;
    fetch(mySrc).then(r => {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.blob();
    }).then(blob => {
      blobPending = false;
      if (myIdx !== idx || !TRACKS[idx] || TRACKS[idx].src !== mySrc) return; // 已经切歌，丢弃
      if (blobUrl) { try { URL.revokeObjectURL(blobUrl); } catch (_) {} }
      blobUrl = URL.createObjectURL(blob);
      blobSrc = mySrc;
      // 换源：保留当前进度与播放状态（有未完成的 seek 就跳那个目标）
      const keepT = seekTarget != null ? seekTarget : audio.currentTime;
      const wasPlaying = !audio.paused;
      const restore = () => {
        audio.removeEventListener("loadedmetadata", restore);
        if (keepT > 0) { try { audio.currentTime = keepT; } catch (_) {} }
        if (seekTarget != null) { applySeek(seekTarget); verifySeek(); }
        if (wasPlaying) audio.play().catch(() => {});
        else if (status.textContent === "缓冲中…") { status.textContent = "已暂停"; }
      };
      audio.addEventListener("loadedmetadata", restore);
      audio.src = blobUrl;
      audio.load();
    }).catch(() => { blobPending = false; });
  }

  function load() {
    const tr = TRACKS[idx];
    pendingSeek = null; pendingRatio = null; // 新曲未就绪，重置 seek 门控
    blobPending = false;
    seekingTo = null; seekTarget = null; clearTimeout(seekGuard); clearTimeout(seekTimer);
    scrubbing = false; moved = false; downRatio = null; lastRatio = null;
    // 显示名与文件名解耦：title/artist 没填时，自动用文件名（去后缀）兜底
    const baseName = (tr.src || "").split("/").pop().replace(/\.[^.]+$/, "");
    cover.onerror = () => { cover.onerror = null; cover.src = "assets/covers/default.svg"; };
    cover.src = tr.cover || "assets/covers/default.svg";
    title.textContent = tr.title || baseName || "未知曲目";
    artist.textContent = tr.artist || "未知歌手";
    // 音源：优先用内存 Blob（整首在内存里，任意位置都能立刻跳）；
    // 还没有 blob 时先用网络地址，后台同时把整首抓到内存，抓到后无缝换源。
    if (blobSrc === tr.src && blobUrl) audio.src = blobUrl;
    else audio.src = tr.src; // 懒加载：先只挂网络地址（preload=metadata 仅取元数据），整首抓取等首次播放
    renderProgressUI(0); curTime.textContent = "0:00"; totTime.textContent = "0:00";
    status.textContent = "已暂停"; playBtn.textContent = "▶"; playing = false;
    lyricBox.innerHTML = '<div class="lyric-empty">暂无歌词</div>'; curLyrics = []; activeLyric = -1;
    loadLyrics();
  }

  function play() {
    if (!TRACKS[idx].src) return;
    startBlobUpgrade(TRACKS[idx]); // 点击播放才把整首抓进内存（按需下载，省流量）
    audio.play().then(() => {
      playing = true; status.textContent = "播放中"; playBtn.textContent = "⏸";
    }).catch(() => {
      playing = false; status.textContent = "文件缺失"; playBtn.textContent = "▶";
      showToast("⚠️ 找不到音乐文件：" + TRACKS[idx].src + "（把 MP3 放进 assets/music-128/ 并在 script.js 的 TRACKS 填好路径）");
    });
  }
  function pause() {
    playing = false; status.textContent = "已暂停"; playBtn.textContent = "▶"; audio.pause();
  }

  // 真实音频事件：用元数据驱动进度，而非模拟计时器
  // 音频真正“可定位”后才执行缓存的跳转（seekable 非空 / readyState≥2 / 时长已知）
  function audioReady() {
    if (audio.seekable && audio.seekable.length) return true;
    if (audio.readyState >= 2) return true;
    return isFinite(audio.duration) && audio.duration > 0;
  }
  function flushPending() {
    if (!audioReady()) return;
    if (pendingRatio != null) {
      const r = pendingRatio; pendingRatio = null;
      const d = getDuration();
      if (d) { requestSeek(r * d); return; }
      pendingRatio = r; return;
    }
    if (pendingSeek != null) { const t = pendingSeek; pendingSeek = null; seekTo(t); }
  }
  audio.addEventListener("loadedmetadata", () => {
    const d = getDuration();
    totTime.textContent = fmt(d); renderProgressUI(audio.currentTime);
    flushPending();
  });
  audio.addEventListener("canplay", flushPending);
  audio.addEventListener("progress", () => {
    flushPending();
    // 目标位置的数据到货了就立刻补跳，不必等下一轮定时重试
    if (seekTarget != null && bufferedEnd() >= seekTarget - 0.5) {
      applySeek(seekTarget);
      verifySeek();
    }
  });
  audio.addEventListener("durationchange", () => { totTime.textContent = fmt(getDuration()); flushPending(); });
  audio.addEventListener("timeupdate", () => {
    if (scrubbing) return;
    if (seekingTo != null) return; // seek 未确认前不覆盖 UI
    renderProgressUI(audio.currentTime); curTime.textContent = fmt(audio.currentTime);
    syncLyrics();
  });
  audio.addEventListener("ended", () => {
    idx = (idx + 1) % TRACKS.length; // 列表循环：放完自动下一首
    load(); play();
  });

  playBtn.addEventListener("click", () => playing ? pause() : play());
  document.getElementById("nextBtn").addEventListener("click", () => {
    idx = (idx + 1) % TRACKS.length; load(); if (playing) play();
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (audio.currentTime > 3) { audio.currentTime = 0; return; } // 播放超 3 秒先回到开头
    idx = (idx - 1 + TRACKS.length) % TRACKS.length; load(); if (playing) play();
  });
  // ============ 音量 ============
  const volSlider = document.getElementById("volumeSlider");
  const volLabel = document.querySelector(".pvol");
  function paintVolIcon() {
    if (!volLabel || !volLabel.firstChild) return;
    const v = audio.muted ? 0 : audio.volume;
    volLabel.firstChild.nodeValue = v === 0 ? "🔇" : v < 0.5 ? "🔉" : "🔊";
  }
  audio.volume = 1;
  if (volSlider) {
    volSlider.addEventListener("input", () => {
      audio.muted = false;
      audio.volume = parseFloat(volSlider.value);
      paintVolIcon();
    });
  }
  // ============ 进度条 / 跳转 ============
  // 拖动只记录比例，松手按“最后记录的比例”跳转。
  // 关键：绝不在松手时用 pointerup 的坐标重新计算 —— Safari、指针捕获释放、
  // 触摸手势下的 pointerup 常缺坐标或给 0，一算就成了比例 0 → seek(0) → “松手跳回开头”。
  /* ★★ 这里曾有一个致命 bug，不要再写回去 ★★
     旧代码会拿 audio.seekable 去“钳制”目标时间：
         if (t > audio.seekable.end(...)) t = audio.seekable.end(...)
     当服务器不支持 HTTP Range（预览服务、python -m http.server 都是如此）或数据还没缓冲到时，
     seekable 只有 [0,0]／极小范围，于是目标被钳成 0 → seek(0) → “一松手就从歌曲最开始播放”。
     这与浏览器无关，所以换 Safari / Chrome / 手机全都一样。正确做法是直接设 currentTime，
     然后校验有没有跳成功；没成功就等数据到了再重试。 */
  function bufferedEnd() {
    try {
      const b = audio.buffered; let e = 0;
      for (let i = 0; i < b.length; i++) e = Math.max(e, b.end(i));
      return e;
    } catch (_) { return 0; }
  }
  function paintTime(t) {
    renderProgressUI(t); curTime.textContent = fmt(t);
  }
  function applySeek(t) {
    try { audio.currentTime = t; } catch (err) { console.warn("[player] seek 失败:", err); }
    paintTime(t);
  }
  function endSeek() {
    seekTarget = null; seekingTo = null;
    clearTimeout(seekTimer); clearTimeout(seekGuard);
    // 之前为等缓冲而暂停的，跳转落定后恢复播放
    if (seekResume) {
      seekResume = false;
      try { audio.play(); } catch (_) {}
      playing = true; status.textContent = "播放中"; playBtn.textContent = "⏸";
    }
  }
  // 校验：跳成功 → 收工；没到 → 再设一次（数据可能刚到），最多重试约 1.5 秒
  function verifySeek() {
    clearTimeout(seekTimer);
    if (seekTarget == null) return;
    seekTimer = setTimeout(() => {
      if (seekTarget == null) return;
      const t = seekTarget;
      if (Math.abs(audio.currentTime - t) <= 1.0) { endSeek(); return; }
      seekTries++;
      // 正在把整首抓进内存时多等一会儿（抓住后就能随便跳）
      if (seekTries <= (blobPending ? 40 : 10)) { applySeek(t); verifySeek(); }
      else {
        endSeek();
        paintTime(audio.currentTime);
        if (!seekFailWarned) {
          seekFailWarned = true;
          showToast("⏳ 这首歌还没下载完，暂时跳不过去；等两秒再拖就行（双击 index.html 打开最顺畅）");
        }
      }
    }, 150);
  }
  function seekTo(t) {
    if (!isFinite(t) || t < 0) return;
    const d = getDuration();
    if (d > 0) t = Math.max(0, Math.min(t, d - 0.25));
    // 目标位置还没下载到：先暂停等缓冲，否则引擎重置到 0 后会真的从头出声
    if (!audio.paused && t > bufferedEnd() + 1.5) {
      seekResume = true; audio.pause(); status.textContent = "缓冲中…";
    }
    seekTarget = t; seekTries = 0; seekingTo = t; // 锁定 UI，避免旧位置把进度条刷回去
    applySeek(t);
    verifySeek();
  }
  function requestSeek(t) {
    if (!isFinite(t)) return;
    if (audioReady()) seekTo(t);
    else pendingSeek = t;
  }
  // 指针位置 → 比例（0~1）。算不出来时返回 null，绝不返回 0（0 的含义是“拖到最开头”）
  function ratioFromEvent(e) {
    const rect = pbar.getBoundingClientRect();
    if (!rect || !(rect.width > 4)) return null;
    if (!e || typeof e.clientX !== "number" || !isFinite(e.clientX)) return null;
    return Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  }
  function showRatio(r) {
    if (r == null) return;
    paintBar(r * 100);
    const d = getDuration();
    curTime.textContent = d ? fmt(r * d) : "--:--";
  }
  pbar.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return; // 只响应左键
    e.preventDefault();
    scrubbing = true; moved = false;
    const r = ratioFromEvent(e);
    if (r != null) { downRatio = r; lastRatio = r; showRatio(r); }
    try { pbar.setPointerCapture(e.pointerId); } catch (_) {}
  });
  pbar.addEventListener("pointermove", (e) => {
    if (!scrubbing) return;
    const r = ratioFromEvent(e);
    if (r == null) return;
    lastRatio = r; moved = true;
    showRatio(r);
  });
  function endScrub(e) {
    if (!scrubbing) return;
    scrubbing = false;
    try { pbar.releasePointerCapture(e.pointerId); } catch (_) {}
    // 用拖动过程中最后记录的比例（纯点击则用按下位置），不读 pointerup 坐标
    const r = moved ? lastRatio : downRatio;
    if (r == null) return;
    const d = getDuration();
    if (d > 0) seekTo(r * d);
    else {
      pendingRatio = r;
      if (!loadWarned) { loadWarned = true; showToast("⏳ 音频正在加载，就绪后会自动跳到该位置"); }
    }
  }
  pbar.addEventListener("pointerup", endScrub);
  // 手势被系统取消（如被页面滚动接管）：只放弃这次拖动，不做跳转
  pbar.addEventListener("pointercancel", () => { scrubbing = false; });
  // 键盘：←/→ ±5 秒，Home/End 到头/尾
  pbar.addEventListener("keydown", (e) => {
    const d = getDuration();
    if (!d) return;
    let t = audio.currentTime;
    if (e.key === "ArrowLeft") t = Math.max(0, t - 5);
    else if (e.key === "ArrowRight") t = Math.min(d, t + 5);
    else if (e.key === "Home") t = 0;
    else if (e.key === "End") t = d * 0.999;
    else return;
    e.preventDefault();
    requestSeek(t);
  });
  // seek 完成：解除锁定，用真实位置对齐 UI 与歌词
  // 注意：引擎可能在数据没到时也抛 seeked（落点仍是 0），这种情况不能收工，要继续等数据重试
  audio.addEventListener("seeked", () => {
    if (seekTarget != null && Math.abs(audio.currentTime - seekTarget) > 1.0) return;
    endSeek();
    renderProgressUI(audio.currentTime); curTime.textContent = fmt(audio.currentTime);
    if (!scrubbing) syncLyrics({ force: true, instant: true });
  });

  // ---- 诊断面板：仅当网址带 ?debug=1 时出现，平时完全隐藏 ----
  try {
    if (new URLSearchParams(location.search).get("debug") === "1") {
      const box = document.createElement("div");
      box.style.cssText = "position:fixed;right:8px;bottom:8px;z-index:99999;font:11px/1.5 Consolas,monospace;" +
        "background:rgba(0,0,0,.8);color:#8f8;padding:6px 8px;border-radius:8px;white-space:pre;pointer-events:none";
      document.body.appendChild(box);
      setInterval(() => {
        let sk = "-";
        try {
          if (audio.seekable.length) {
            sk = audio.seekable.start(0).toFixed(1) + "~" + audio.seekable.end(audio.seekable.length - 1).toFixed(1);
          }
        } catch (_) {}
        box.textContent =
          "readyState " + audio.readyState +
          "\nduration   " + (isFinite(audio.duration) ? audio.duration.toFixed(1) : String(audio.duration)) +
          "\ncurrent    " + audio.currentTime.toFixed(1) +
          "\nbuffered   " + bufferedEnd().toFixed(1) +
          "\nseekable   " + sk +
          "\nseekTarget " + (seekTarget == null ? "-" : seekTarget.toFixed(1)) +
          "\nblob       " + (blobUrl ? "已载入内存" : (blobPending ? "加载中…" : "无"));
      }, 200);
    }
  } catch (_) {}

  load();
}

/* =========================================================
   歌词 / 弹幕轮播
   ========================================================= */
/* =========================================================
   歌词栏跑马灯：整句从右侧滚进、左侧滚出，滚完整句才换下一句
   - 用 CSS transition 逐句驱动，时长按文字宽度/速度动态计算（速度恒定）
   - transitionend 换下一句；另有兜底定时器防漏触发
   ========================================================= */
function startLyricRotation() {
  const el = document.getElementById("lyricText");
  if (!el) return;
  let i = 0;
  const SPEED_MOBILE = 90;  // px/s：手机端速度
  const SPEED_WIDE = 150;   // px/s：电脑端屏幕大，滚太慢显得磨蹭，单独加速
  // 每句播放时实时取一次：窗口在 900px 附近缩放也能跟着切换
  const currentSpeed = () =>
    window.matchMedia && window.matchMedia("(min-width: 901px)").matches ? SPEED_WIDE : SPEED_MOBILE;

  function play() {
    el.textContent = SITE.lyrics[i % SITE.lyrics.length];
    requestAnimationFrame(() => {
      const bar = el.parentElement;
      const barW = (bar && bar.clientWidth) || window.innerWidth;
      const textW = el.offsetWidth || 1;
      const from = barW;      // 起点：整句贴在容器右外侧
      const to = -textW;      // 终点：整句完全滚出左缘
      const dur = Math.round(Math.max(2500, ((from - to) / currentSpeed()) * 1000));
      let done = false;
      const advance = () => {
        if (done) return;
        done = true;
        i++;
        play();
      };
      // 定位起点（无过渡）→ 强制回流 → 开启线性过渡滚向左外侧
      el.style.transition = "none";
      el.style.transform = `translateX(${from}px)`;
      void el.offsetWidth;
      el.style.transition = `transform ${dur}ms linear`;
      el.style.transform = `translateX(${to}px)`;
      el.style.opacity = "1"; // 首句定位就绪后再显示，避免左闪一下
      // 滚完即换：transitionend 主触发，定时器兜底（页面后台等异常情况）
      el.addEventListener("transitionend", function onEnd(e) {
        if (e.propertyName !== "transform") return;
        el.removeEventListener("transitionend", onEnd);
        advance();
      });
      setTimeout(advance, dur + 500);
    });
  }

  play();
}

/* =========================================================
   打字机简介：一次性打完所有文案 → 等 4 秒 → 慢慢删光 → 循环
   ========================================================= */
function startTypewriter() {
  const el = document.getElementById("typeText");
  if (!el) return;
  const full = "一个喜欢看番的杀软二刺猿~一个喜欢本格推理小说的重度推批~一个每天都需要上早七的苦逼大学生（抱歉，这里站不下这么多人）";
  let i = 0, deleting = false;
  function tick() {
    if (!deleting) {
      i++;
      el.textContent = full.slice(0, i);
      if (i >= full.length) { deleting = true; return setTimeout(tick, 5000); } // 打完等 5 秒
      setTimeout(tick, 90); // 打字 90ms/字
    } else {
      i--;
      el.textContent = full.slice(0, i);
      if (i <= 0) { deleting = false; return setTimeout(tick, 500); } // 删完短暂停顿再循环
      setTimeout(tick, 45); // 慢删 45ms/字
    }
  }
  tick();
}

/* =========================================================
   回到顶部按钮
   ========================================================= */
function initBackTop() {
  const btn = document.getElementById("backTop");
  if (!btn) return;
  window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 300));
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   点击反馈（占位元素）
   ========================================================= */
function bindClicks() {
  // 文章卡片
  document.getElementById("postsList").addEventListener("click", e => {
    const card = e.target.closest(".post-card");
    if (card) { e.preventDefault(); showToast("📄 占位文章：" + card.dataset.title); }
  });
  // 更多链接 / 带 data-toast 的元素
  document.querySelectorAll("[data-toast]").forEach(el =>
    el.addEventListener("click", e => { e.preventDefault(); showToast("🔧 " + el.dataset.toast); }));
  // 照片墙改为本地文件网格，由 renderPhotos() 渲染，此处不再绑定点击 toast
  // 社交按钮：QQ / 邮箱 为二级框（展示号码），其余真实链接正常跳转
  function bindPop(btnId, popId) {
    const btn = document.getElementById(btnId);
    const pop = document.getElementById(popId);
    if (!btn || !pop) return;
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const willOpen = !pop.classList.contains("open");
      document.querySelectorAll(".qq-pop.open").forEach(p => p.classList.remove("open"));
      if (willOpen) pop.classList.add("open");
    });
    document.addEventListener("click", e => {
      if (!pop.contains(e.target) && e.target !== btn) pop.classList.remove("open");
    });
  }
  bindPop("qqBtn", "qqPop");
  bindPop("mailBtn", "mailPop");
  document.querySelectorAll(".social-btn").forEach(b =>
    b.addEventListener("click", () => {
      if (b.id === "qqBtn" || b.id === "mailBtn") return;
      const href = b.getAttribute("href");
      if (!href || href === "#") showToast("🔗 " + b.title + "（占位链接，去 index.html 填真实地址）");
    }));
}

/* =========================================================
   启动
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const safe = (label, fn) => { try { fn(); } catch (e) { console.error("[init] " + label + " 失败:", e); } };
  safe("theme", () => applyTheme(localStorage.getItem("xb-theme") || "dark"));
  safe("typewriter", startTypewriter);          // 优先级最高，确保一定启动
  safe("posts", renderPosts);
  safe("chatters", renderChatters);
  safe("dashboard", renderDashboard);
  safe("quotes", initQuoteShowcase);
  safe("player", initPlayer);
  safe("photos", renderPhotos);
  safe("lyric", startLyricRotation);
  safe("backtop", initBackTop);
  safe("clicks", bindClicks);
  // 滑块定位（等字体加载后宽度才准确）
  safe("indicator", () => {
    moveIndicator(activeNavLink());
    setTimeout(() => moveIndicator(activeNavLink()), 400);
    window.addEventListener("load", () => moveIndicator(activeNavLink()));
  });
});
