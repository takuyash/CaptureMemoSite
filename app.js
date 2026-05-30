let lang = "ja";

const data = {
  ja: {
    desc: "スクショ・画像・テキストを常に横に置いて使えるメモアプリ",
    usage: [
      "常に最前面表示",
      "テキスト入力",
      "スクショ貼り付け",
      "ドラッグ&ドロップ",
      "Ctrl+S 保存",
      "Ctrl+F 検索",
      "最大10タブ",
      "自動保存"
    ],
    license: "MIT License",
    disclaimer: "自己責任で使用してください",
    support: "Star / Watch歓迎"
  },
  en: {
    desc: "A memo tool that keeps screenshots, images and text always visible",
    usage: [
      "Always on top",
      "Text input",
      "Paste screenshots",
      "Drag & drop",
      "Ctrl+S save",
      "Ctrl+F search",
      "10 tabs max",
      "Auto save"
    ],
    license: "MIT License",
    disclaimer: "Use at your own risk",
    support: "GitHub Star appreciated"
  }
};

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

  menu.style.display = menu.style.display === "block" ? "none" : "block";
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

  toggleStart();
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
   言語切替
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langBtn");

  if (langBtn) {
    langBtn.onclick = () => {
      lang = lang === "ja" ? "en" : "ja";
      langBtn.innerText = lang === "ja" ? "EN" : "JA";
      render();
    };
  }

  render();

  // ★重要：初期状態同期（ここが今回の修正ポイント）
  const win = document.getElementById("appWindow");

  const isOpen = win && getComputedStyle(win).display !== "none";
  updateTaskTitle(isOpen);
});

/* =========================
   描画
========================= */
function render() {
  const d = data[lang];

  const desc = document.querySelector("[data-i18n='desc']");
  const license = document.querySelector("[data-i18n='license']");
  const disclaimer = document.querySelector("[data-i18n='disclaimer']");
  const support = document.querySelector("[data-i18n='support']");

  if (desc) desc.textContent = d.desc;
  if (license) license.textContent = d.license;
  if (disclaimer) disclaimer.textContent = d.disclaimer;
  if (support) support.textContent = d.support;

  const usageList = document.getElementById("usageList");
  if (usageList) {
    usageList.innerHTML = d.usage.map(x => `<div>• ${x}</div>`).join("");
  }
}

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

  bar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    win.style.left = (e.clientX - offsetX) + "px";
    win.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});


/* =========================
   時計表示（右下）
========================= */
function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  const now = new Date();

  const time = now.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const date = now.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  });

  clock.textContent = `${date} ${time}`;
}

setInterval(updateClock, 1000);
updateClock();

document.addEventListener("DOMContentLoaded", () => {
  const clock = document.getElementById("clock");
  const calendar = document.getElementById("calendar");

  if (clock && calendar) {
    clock.addEventListener("click", (e) => {
      e.stopPropagation();

      if (calendar.style.display === "block") {
        calendar.style.display = "none";
      } else {
        renderCalendar();
        calendar.style.display = "block";
      }
    });

    // 外クリックで閉じる
    document.addEventListener("click", () => {
      calendar.style.display = "none";
    });

    calendar.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
});

function renderCalendar() {
  const calendar = document.getElementById("calendar");
  if (!calendar) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const week = ["日","月","火","水","木","金","土"];

  let html = `
    <div class="calendar-header">
      <span>${year} / ${month + 1}</span>
    </div>
    <div class="calendar-grid">
  `;

  // 曜日
  week.forEach(w => {
    html += `<div>${w}</div>`;
  });

  // 空白
  for (let i = 0; i < firstDay; i++) {
    html += `<div></div>`;
  }

  // 日付
  for (let d = 1; d <= lastDate; d++) {
    const isToday =
      d === now.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();

    html += `<div class="${isToday ? "today" : ""}">${d}</div>`;
  }

  html += `</div>`;

  calendar.innerHTML = html;
}