let lang = "ja";

const data = {
  ja: {
    overview: "概要",
    download: "ダウンロード",
    usageTitle: "使い方",
    info: "インフォメーション",

    desc: "スクショ・画像・テキストを常に最前面に置いて使えるメモアプリ",

    envTitle: "環境",
    env: "Windows 10 / 11",
    licenseTitle: "ライセンス",
    license: "MIT License",
    
    downloadTitle: "Download",
    downloadText: "最新バージョンはこちらからダウンロードできます。",
    githubProfile: "GitHub公式ページ：",

    informationTitle: "Information",

    notice: "Notice",
    noticeText: "今後ここにお知らせを追加予定です。",


    disclaimerTitle: "Disclaimer",
    supportTitle: "Support",

    usage: [
      "常に最前面表示",
      "テキスト入力",
      "スクショ貼り付け",
      "ドラッグ&ドロップ",
      "Ctrl+S 保存",
      "Ctrl+F 検索",
      "最大10タブ",
      "自動保存(5秒間隔)"
    ],


    disclaimer: "自己責任で使用してください",
    support: "Star / Watch歓迎",

    week: ["日", "月", "火", "水", "木", "金", "土"]
  },

  en: {
    overview: "Overview",
    download: "Download",
    usageTitle: "Usage",
    info: "Info",

    desc: "A memo app that lets you keep screenshots, images, and text always on top while you work.",
    
    envTitle: "Environment",
    env: "Windows 10 / 11",
    licenseTitle: "License",
    license: "MIT License",
 
    downloadTitle: "Download",
    downloadText: "You can download the latest version here.",
    githubProfile: "GitHub profile:",

    informationTitle: "Information",

    notice: "Notice",
    noticeText: "Announcements will be added here in the future.",


    disclaimerTitle: "Disclaimer",
    supportTitle: "Support",

    usage: [
      "Always on top",
      "Text input",
      "Paste screenshots",
      "Drag & drop",
      "Ctrl+S save",
      "Ctrl+F search",
      "10 tabs max",
      "Auto save(5 seconds interval)"
    ],

    disclaimer: "Use at your own risk",
    support: "GitHub Star appreciated",

    week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  }
};

const infos = [
  {
    date: "2026-05-31",

    title: {
      ja: "CaptureMemo公式サイト公開",
      en: "CaptureMemo Official Website Released"
    },

    body: {
      ja: "CaptureMemoの公式サイトを公開しました。",
      en: "The official website for CaptureMemo has been released."
    }
  },

  {
    date: "2026-04-4",

    title: {
      ja: "v0.4.0 リリース",
      en: "v0.4.0 Released"
    },

    body: {
      ja: "v0.4.0リリースを公開しました。",
      en: "The v0.4.0 release is now available."
    },

    link: {
      url: "https://github.com/takuyash/CaptureMemo/releases",

      label: {
        ja: "GitHub Releases",
        en: "GitHub Releases"
      }
    }
  }
];

/* =========================
   タスクバー表示制御
========================= */
function updateTaskTitle(isOpen) {
  const title = document.getElementById("taskTitle");
  if (!title) return;
  title.textContent = isOpen ? "CaptureMemo" : "";
}

/* =========================
   ページ切替
========================= */
function switchPage(pageId) {
  document.querySelectorAll(".page").forEach(el => {
    el.classList.remove("active");
  });

  const target = document.getElementById(pageId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.remove("active");

    if (el.getAttribute("onclick")?.includes(pageId)) {
      el.classList.add("active");
    }
  });
}

/* =========================
   スタートメニュー
========================= */
function toggleStart() {
  const menu = document.getElementById("startMenu");
  if (!menu) return;

  menu.style.display =
    menu.style.display === "block"
      ? "none"
      : "block";
}

/* =========================
   アプリ起動
========================= */
function openApp(page) {
  const win = document.getElementById("appWindow");
  if (!win) return;

  win.style.display = "block";

  switchPage(page);

  updateTaskTitle(true);

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   ウィンドウを閉じる
========================= */
function closeWindow() {
  const win = document.getElementById("appWindow");
  if (!win) return;

  win.style.display = "none";

  updateTaskTitle(false);
}

/* =========================
   描画
========================= */
function render() {
  const d = data[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (d[key] !== undefined) {
      el.textContent = d[key];
    }
  });

  const usageList = document.getElementById("usageList");

  if (usageList) {
    usageList.innerHTML =
      d.usage
        .map(x => `<div>• ${x}</div>`)
        .join("");
  }
  
const infoList =
  document.getElementById("infoList");

if (infoList) {

  infoList.innerHTML =
    infos.map(info => `
      <div class="box">

        <div style="
          color:#888;
          font-size:12px;
          margin-bottom:8px;
        ">
          ${info.date}
        </div>

        <h3>${info.title[lang]}</h3>

        <div>
          ${info.body[lang]}
        </div>

        ${
          info.link
            ? `
            <p style="margin-top:10px;">
              <a
                href="${info.link.url}"
                target="_blank"
              >
                ${info.link.label[lang]}
              </a>
            </p>
            `
            : ""
        }

      </div>
    `).join("");
}

  updateClock();

  const calendar = document.getElementById("calendar");

  if (
    calendar &&
    calendar.style.display === "block"
  ) {
    renderCalendar();
  }
}

/* =========================
   初期化
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const langBtn = document.getElementById("langBtn");

  if (langBtn) {
    langBtn.onclick = () => {

      lang = lang === "ja"
        ? "en"
        : "ja";

      langBtn.innerText =
        lang === "ja"
          ? "EN"
          : "JA";

      render();
    };
  }

  render();

  const win = document.getElementById("appWindow");

  const isOpen =
    win &&
    getComputedStyle(win).display !== "none";

  updateTaskTitle(isOpen);
});

/* =========================
   ドラッグ処理
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const win = document.getElementById("appWindow");
  const bar = document.getElementById("dragBar");

  if (!win || !bar) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  bar.addEventListener("mousedown", e => {

    isDragging = true;

    offsetX =
      e.clientX - win.offsetLeft;

    offsetY =
      e.clientY - win.offsetTop;
  });

  document.addEventListener("mousemove", e => {

    if (!isDragging) return;

    win.style.left =
      (e.clientX - offsetX) + "px";

    win.style.top =
      (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});

/* =========================
   時計表示
========================= */
function updateClock() {

  const clock =
    document.getElementById("clock");

  if (!clock) return;

  const locale =
    lang === "ja"
      ? "ja-JP"
      : "en-US";

  const now = new Date();

  const time =
    now.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit"
    });

  const date =
    now.toLocaleDateString(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short"
    });

  clock.textContent =
    `${date} ${time}`;
}

setInterval(updateClock, 1000);
updateClock();

/* =========================
   カレンダー表示
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const clock =
    document.getElementById("clock");

  const calendar =
    document.getElementById("calendar");

  if (!clock || !calendar) return;

  clock.addEventListener("click", e => {

    e.stopPropagation();

    if (
      calendar.style.display === "block"
    ) {
      calendar.style.display = "none";
    } else {
      renderCalendar();
      calendar.style.display = "block";
    }
  });

  document.addEventListener("click", () => {
    calendar.style.display = "none";
  });

  calendar.addEventListener("click", e => {
    e.stopPropagation();
  });
});

/* =========================
   カレンダー描画
========================= */
function renderCalendar() {

  const calendar =
    document.getElementById("calendar");

  if (!calendar) return;

  const now = new Date();

  const year =
    now.getFullYear();

  const month =
    now.getMonth();

  const firstDay =
    new Date(year, month, 1).getDay();

  const lastDate =
    new Date(year, month + 1, 0).getDate();

  const week =
    data[lang].week;

  let html = `
    <div class="calendar-header">
      <span>${year} / ${month + 1}</span>
    </div>
    <div class="calendar-grid">
  `;

  week.forEach(w => {
    html += `<div>${w}</div>`;
  });

  for (let i = 0; i < firstDay; i++) {
    html += `<div></div>`;
  }

  for (let d = 1; d <= lastDate; d++) {

    const isToday =
      d === now.getDate() &&
      month === now.getMonth() &&
      year === now.getFullYear();

    html += `
      <div class="${
        isToday
          ? "today"
          : ""
      }">
        ${d}
      </div>
    `;
  }

  html += `
    </div>
  `;

  calendar.innerHTML = html;
}