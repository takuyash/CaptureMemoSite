let lang = "ja";

const data = {
  ja: {
    overview: "概要",
    download: "ダウンロード",
    functionTitle: "機能",
    usageTitle: "使い方",
    info: "インフォメーション",
    calculator: "電卓",
    notepad: "メモ帳",
    appCaptureMemo: "CaptureMemo",
    notepadPlaceholder: "ここにメモを入力...",
    paint: "ペイント",
    paintBrush: "ブラシ",
    paintEraser: "消しゴム",
    paintClear: "クリア",
    paintSize: "太さ",

    desc: "スクショ・画像・テキストを常に最前面に置いて使えるメモアプリ",

    envTitle: "環境",
    env: "Windows 10 / 11",
    licenseTitle: "ライセンス",
    license: "MIT License",
    DisclaimerTitle: "免責事項",
    Disclaimer: "本ソフトウェアを使用したことによって生じたいかなる損害についても、作者は一切の責任を負いません。自己責任でご利用ください。",
    TermsOfUseTitle: "利用条件",
    TermsOfUse: "本ソフトウェアはフリーソフトです。個人利用・商用利用を問わず、無料で使用することができます。",
    downloadTitle: "Download",
    downloadText: "最新バージョンはこちらからダウンロードできます。",
    githubProfile: "GitHub公式ページ：",

    informationTitle: "Information",

    notice: "Notice",
    noticeText: "今後ここにお知らせを追加予定です。",


    disclaimerTitle: "Disclaimer",
    supportTitle: "Support",

    function: [
      "常に最前面表示",
      "テキスト入力",
      "スクショ貼り付け",
      "ドラッグ&ドロップ",
      "Ctrl+S 保存",
      "Ctrl+F 検索",
      "最大10タブ",
      "自動保存(5秒間隔)"
    ],
    
    usage: [
      "ダウンロード",
      "解凍",
      "CaptureMemo.exeを実行"
    ],


    disclaimer: "自己責任で使用してください",
    support: "Star / Watch歓迎",

    week: ["日", "月", "火", "水", "木", "金", "土"]
  },

  en: {
    overview: "Overview",
    download: "Download",
    functionTitle: "Function",
    usageTitle: "Usage",
    info: "Info",
    calculator: "Calculator",
    notepad: "Notepad",
    appCaptureMemo: "CaptureMemo",
    notepadPlaceholder: "Type your notes here...",
    paint: "Paint",
    paintBrush: "Brush",
    paintEraser: "Eraser",
    paintClear: "Clear",
    paintSize: "Size",

    desc: "A memo app that lets you keep screenshots, images, and text always on top while you work.",
    
    envTitle: "Environment",
    env: "Windows 10 / 11",
    licenseTitle: "License",
    license: "MIT License",
    DisclaimerTitle: "Disclaimer",
    Disclaimer: "The author assumes no responsibility or liability for any damages resulting from the use of this software. Please use it at your own risk.",
    TermsOfUseTitle: "Terms of Use",
    TermsOfUse: "This software is provided free of charge and may be used for both personal and commercial purposes.",
    
    downloadTitle: "Download",
    downloadText: "You can download the latest version here.",
    githubProfile: "GitHub profile:",

    informationTitle: "Information",

    notice: "Notice",
    noticeText: "Announcements will be added here in the future.",


    disclaimerTitle: "Disclaimer",
    supportTitle: "Support",
    
     function: [
      "Always on top",
      "Text input",
      "Paste screenshots",
      "Drag & drop",
      "Ctrl+S save",
      "Ctrl+F search",
      "10 tabs max",
      "Auto save(5 seconds interval)"
    ],

    usage: [
  "Download",
  "Extract the archive",
  "Run CaptureMemo.exe"
    ],

    disclaimer: "Use at your own risk",
    support: "GitHub Star appreciated",

    week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  }
};

const functionDescription = [
  {
    text: {
      ja: "他のアプリを開いても常に最前面に表示されます。",
      en: "Always stays on top of other windows."
    },

    url: "https://github.com/takuyash/CaptureMemo/blob/main/README.md",

    linkText: {
      ja: "詳細はこちら",
      en: "Learn More"
    }
  },
  {
    text: {
      ja: "メモとしてテキストを入力できます。",
      en: "You can enter text notes."
    }
  }
];

const usageDescription = [
  {
    text: {
      ja: "下記サイトからダウンロードします",
      en: "You can download it from the website below."
    },
    image: "assets/download.png",

    url: "https://github.com/takuyash/CaptureMemo/releases",

    linkText: {
      ja: "詳細はこちら",
      en: "Learn More"
    }
  },
  {
    text: {
      ja: "任意の場所にzipファイルを解凍します",
      en: "Extract the ZIP file to any location."
    },
    image: "assets/thawing.png",
  },
  {
    text: {
      ja: "CaptureMemo.exeを実行して起動します",
      en: "Run CaptureMemo.exe"
    },
    image: "assets/execute.png",
  }
];

const infos = [
  {
    date: "2026-06-07",
    title: {
      ja: "CaptureMemo v0.5.0をリリースしました",
      en: "CaptureMemo v0.5.0 Released"
    },
    body: {
      ja: "アプリデザインを修正しました。",
      en: "modified the app design. "
    },
    link: {
      url: "https://github.com/takuyash/CaptureMemo/releases",

      label: {
        ja: "GitHub Releases",
        en: "GitHub Releases"
      }
    }
  },
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
function updateTaskTitle() {
  const title = document.getElementById("taskTitle");
  if (!title) return;

  const parts = [];
  const appWin = document.getElementById("appWindow");
  const calcWin = document.getElementById("calcWindow");
  const notepadWin = document.getElementById("notepadWindow");
  const paintWin = document.getElementById("paintWindow");

  if (appWin && getComputedStyle(appWin).display !== "none") {
    parts.push(data[lang].appCaptureMemo);
  }

  if (calcWin && getComputedStyle(calcWin).display !== "none") {
    parts.push(data[lang].calculator);
  }

  if (notepadWin && getComputedStyle(notepadWin).display !== "none") {
    parts.push(data[lang].notepad);
  }

  if (paintWin && getComputedStyle(paintWin).display !== "none") {
    parts.push(data[lang].paint);
  }

  title.textContent = parts.join(" | ");
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

  updateTaskTitle();

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   電卓を開く
========================= */
function openCalculator() {
  const win = document.getElementById("calcWindow");
  if (!win) return;

  win.style.display = "block";
  updateTaskTitle();

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   電卓を閉じる
========================= */
function closeCalculator() {
  const win = document.getElementById("calcWindow");
  if (!win) return;

  win.style.display = "none";
  updateTaskTitle();
}

/* =========================
   メモ帳を開く
========================= */
function openNotepad() {
  const win = document.getElementById("notepadWindow");
  const textarea = document.getElementById("notepadText");
  if (!win) return;

  win.style.display = "block";
  updateTaskTitle();

  if (textarea) {
    textarea.focus();
  }

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   メモ帳を閉じる
========================= */
function closeNotepad() {
  const win = document.getElementById("notepadWindow");
  if (!win) return;

  win.style.display = "none";
  updateTaskTitle();
}

/* =========================
   ペイントを開く
========================= */
function openPaint() {
  const win = document.getElementById("paintWindow");
  if (!win) return;

  win.style.display = "block";
  updateTaskTitle();

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   ペイントを閉じる
========================= */
function closePaint() {
  const win = document.getElementById("paintWindow");
  if (!win) return;

  win.style.display = "none";
  updateTaskTitle();
}

/* =========================
   ペイントロジック
========================= */
const paintState = {
  isDrawing: false,
  tool: "brush",
  color: "#000000",
  lineWidth: 4,
  lastX: 0,
  lastY: 0
};

let paintCtx = null;

function getPaintCanvas() {
  return document.getElementById("paintCanvas");
}

function getPaintCoords(clientX, clientY, canvas) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return {
    x: (clientX - rect.left) * scaleX,
    y: (clientY - rect.top) * scaleY
  };
}

function setPaintTool(tool) {
  paintState.tool = tool;

  const brushBtn = document.getElementById("paintBrushBtn");
  const eraserBtn = document.getElementById("paintEraserBtn");

  if (brushBtn) {
    brushBtn.classList.toggle("active", tool === "brush");
  }

  if (eraserBtn) {
    eraserBtn.classList.toggle("active", tool === "eraser");
  }
}

function setPaintColor(color) {
  paintState.color = color;
  setPaintTool("brush");
}

function setPaintLineWidth(width) {
  paintState.lineWidth = parseInt(width, 10) || 4;
}

function fillPaintBackground() {
  const canvas = getPaintCanvas();
  if (!canvas || !paintCtx) return;

  paintCtx.globalCompositeOperation = "source-over";
  paintCtx.fillStyle = "#ffffff";
  paintCtx.fillRect(0, 0, canvas.width, canvas.height);
}

function savePaintCanvas() {
  const canvas = getPaintCanvas();
  if (!canvas) return;

  try {
    localStorage.setItem("paint-content", canvas.toDataURL());
  } catch (e) {
    /* localStorage quota exceeded */
  }
}

function loadPaintCanvas() {
  const canvas = getPaintCanvas();
  if (!canvas || !paintCtx) return;

  const saved = localStorage.getItem("paint-content");

  if (!saved) {
    fillPaintBackground();
    return;
  }

  const img = new Image();
  img.onload = () => {
    paintCtx.globalCompositeOperation = "source-over";
    paintCtx.clearRect(0, 0, canvas.width, canvas.height);
    paintCtx.drawImage(img, 0, 0);
  };
  img.src = saved;
}

function clearPaintCanvas() {
  fillPaintBackground();
  savePaintCanvas();
}

function paintStroke(x, y) {
  if (!paintCtx) return;

  paintCtx.lineCap = "round";
  paintCtx.lineJoin = "round";
  paintCtx.lineWidth = paintState.lineWidth;

  if (paintState.tool === "eraser") {
    paintCtx.globalCompositeOperation = "destination-out";
    paintCtx.strokeStyle = "rgba(0,0,0,1)";
  } else {
    paintCtx.globalCompositeOperation = "source-over";
    paintCtx.strokeStyle = paintState.color;
  }

  paintCtx.beginPath();
  paintCtx.moveTo(paintState.lastX, paintState.lastY);
  paintCtx.lineTo(x, y);
  paintCtx.stroke();

  paintState.lastX = x;
  paintState.lastY = y;
}

function startPaintDraw(clientX, clientY) {
  const canvas = getPaintCanvas();
  if (!canvas || !paintCtx) return;

  paintState.isDrawing = true;
  const { x, y } = getPaintCoords(clientX, clientY, canvas);
  paintState.lastX = x;
  paintState.lastY = y;
  paintStroke(x, y);
}

function movePaintDraw(clientX, clientY) {
  if (!paintState.isDrawing) return;

  const canvas = getPaintCanvas();
  if (!canvas) return;

  const { x, y } = getPaintCoords(clientX, clientY, canvas);
  paintStroke(x, y);
}

function stopPaintDraw() {
  if (!paintState.isDrawing) return;

  paintState.isDrawing = false;
  savePaintCanvas();
}

function initPaintApp() {
  const canvas = getPaintCanvas();
  if (!canvas) return;

  paintCtx = canvas.getContext("2d");
  loadPaintCanvas();

  canvas.addEventListener("mousedown", e => {
    e.preventDefault();
    startPaintDraw(e.clientX, e.clientY);
  });

  canvas.addEventListener("mousemove", e => {
    if (!paintState.isDrawing) return;
    e.preventDefault();
    movePaintDraw(e.clientX, e.clientY);
  });

  canvas.addEventListener("mouseup", stopPaintDraw);
  canvas.addEventListener("mouseleave", stopPaintDraw);

  canvas.addEventListener("touchstart", e => {
    e.preventDefault();
    const touch = e.touches[0];
    startPaintDraw(touch.clientX, touch.clientY);
  }, { passive: false });

  canvas.addEventListener("touchmove", e => {
    if (!paintState.isDrawing) return;
    e.preventDefault();
    const touch = e.touches[0];
    movePaintDraw(touch.clientX, touch.clientY);
  }, { passive: false });

  canvas.addEventListener("touchend", stopPaintDraw);
}

/* =========================
   ウィンドウを閉じる
========================= */
function closeWindow() {
  const win = document.getElementById("appWindow");
  if (!win) return;

  win.style.display = "none";

  updateTaskTitle();
}

/* =========================
   電卓ロジック
========================= */
const calcState = {
  display: "0",
  prev: null,
  operator: null,
  waiting: false
};

function calcUpdateDisplay() {
  const el = document.getElementById("calcDisplay");
  if (el) el.value = calcState.display;
}

function calcDigit(d) {
  if (calcState.display === "Error") {
    calcClear();
  }

  if (calcState.waiting) {
    calcState.display = d;
    calcState.waiting = false;
  } else {
    calcState.display =
      calcState.display === "0"
        ? d
        : calcState.display + d;
  }
  calcUpdateDisplay();
}

function calcDecimal() {
  if (calcState.display === "Error") {
    calcClear();
  }

  if (calcState.waiting) {
    calcState.display = "0.";
    calcState.waiting = false;
  } else if (!calcState.display.includes(".")) {
    calcState.display += ".";
  }
  calcUpdateDisplay();
}

function calcClear() {
  calcState.display = "0";
  calcState.prev = null;
  calcState.operator = null;
  calcState.waiting = false;
  calcUpdateDisplay();
}

function calcBackspace() {
  if (calcState.waiting) return;

  if (calcState.display.length <= 1 ||
      (calcState.display.length === 2 && calcState.display.startsWith("-"))) {
    calcState.display = "0";
  } else {
    calcState.display = calcState.display.slice(0, -1);
  }
  calcUpdateDisplay();
}

function calcCompute(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) return "Error";
      return a / b;
    default: return b;
  }
}

function calcFormatResult(value) {
  if (value === "Error") return "Error";
  const rounded = Math.round(value * 1e10) / 1e10;
  return String(rounded);
}

function calcOperator(op) {
  if (calcState.display === "Error") {
    calcClear();
    return;
  }

  const current = parseFloat(calcState.display);

  if (calcState.operator !== null && !calcState.waiting) {
    const result = calcCompute(calcState.prev, current, calcState.operator);
    calcState.display = calcFormatResult(result);
    calcState.prev = result === "Error" ? null : result;
  } else {
    calcState.prev = current;
  }

  calcState.operator = op;
  calcState.waiting = true;
  calcUpdateDisplay();
}

function calcEquals() {
  if (calcState.operator === null || calcState.waiting) return;

  const current = parseFloat(calcState.display);
  const result = calcCompute(calcState.prev, current, calcState.operator);

  calcState.display = calcFormatResult(result);
  calcState.prev = null;
  calcState.operator = null;
  calcState.waiting = true;
  calcUpdateDisplay();
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

  const notepadText = document.getElementById("notepadText");
  if (notepadText) {
    notepadText.placeholder = d.notepadPlaceholder;
  }

  const usageList = document.getElementById("usageList");

if (usageList) {
  usageList.innerHTML =
    d.usage
      .map((x, i) => {

        const desc =
          usageDescription?.[i] || {};

        return `
          <div class="usage-box">

            <div class="usage-step">
              ${i + 1} ${x}
            </div>

            <div class="usage-text">
              ${desc.text?.[lang] || ""}

              ${
                desc.url
                  ? `
                  <div class="usage-link">
                    <a href="${desc.url}" target="_blank">
                      ${desc.linkText?.[lang] || ""}
                    </a>
                  </div>
                  `
                  : ""
              }

              ${
                desc.image
                  ? `
                  <div class="usage-image">
                    <img
                      src="${desc.image}"
                      alt=""
                    >
                  </div>
                  `
                  : ""
              }

            </div>

          </div>
        `;
      })
      .join("");
}
  
  const functionList = document.getElementById("functionList");

if (functionList) {
  functionList.innerHTML =
    d.function
      .map((x, i) => {

        const desc =
          functionDescription?.[i] || {};

        return `
          <div class="function-box">

            <div class="function-step">
              ${i + 1} ${x}
            </div>

            <div class="function-text">
              ${desc.text?.[lang] || ""}

              ${
                desc.url
                  ? `
                  <div class="function-link">
                    <a href="${desc.url}" target="_blank">
                      ${desc.linkText?.[lang] || ""}
                    </a>
                  </div>
                  `
                  : ""
              }

            </div>

          </div>
        `;
      })
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

  updateTaskTitle();

  const notepadText = document.getElementById("notepadText");
  if (notepadText) {
    notepadText.value = localStorage.getItem("notepad-content") || "";
    notepadText.addEventListener("input", () => {
      localStorage.setItem("notepad-content", notepadText.value);
    });
  }

  initPaintApp();
});

/* =========================
   ドラッグ処理
========================= */
function makeDraggable(win, bar) {
  if (!win || !bar) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  bar.addEventListener("mousedown", e => {
    if (e.target.closest("button")) return;

    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging) return;

    win.style.left = (e.clientX - offsetX) + "px";
    win.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  makeDraggable(
    document.getElementById("appWindow"),
    document.getElementById("dragBar")
  );
  makeDraggable(
    document.getElementById("calcWindow"),
    document.getElementById("calcDragBar")
  );
  makeDraggable(
    document.getElementById("notepadWindow"),
    document.getElementById("notepadDragBar")
  );
  makeDraggable(
    document.getElementById("paintWindow"),
    document.getElementById("paintDragBar")
  );
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