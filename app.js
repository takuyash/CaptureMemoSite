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
    winMinimize: "最小化",
    winMaximize: "最大化",
    winRestore: "元に戻す",
    winClose: "閉じる",
    terminal: "ターミナル",
    browser: "ブラウザ",
    browserGo: "移動",
    browserHome: "https://takuyash.github.io/CaptureMemoSite/index.html",
    browserAddressPlaceholder: "URLまたは検索語を入力...",
    terminalWelcome: "CaptureMemo Desktop Terminal v1.0",
    terminalHint: "'help' と入力するとコマンド一覧が表示されます。",
    terminalUnknown: "コマンドが見つかりません: {cmd}",
    terminalVersion: "CaptureMemo Desktop Terminal v1.0",
    terminalAbout: "CaptureMemo 公式サイトのデスクトップ環境です。",
    terminalOpened: "{app} を起動しました。",
    terminalOpenUnknown: "アプリが見つかりません: {app}",
    terminalOpenUsage: "使用法: open [capturememo|calc|notepad|paint|terminal]",
    terminalLangSet: "言語を {lang} に変更しました。",
    terminalLangInvalid: "使用可能: ja, en",
    terminalHelpText: "help              コマンド一覧を表示\nclear / cls       画面をクリア\necho [text]       テキストを表示\ndate              日時を表示\nwhoami            ユーザー名を表示\nopen [app]        アプリを起動\nlang [ja|en]      言語を切替\nver / version     バージョン情報\nabout             このサイトについて\nls / dir          ファイル一覧",

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
    winMinimize: "Minimize",
    winMaximize: "Maximize",
    winRestore: "Restore",
    winClose: "Close",
    terminal: "Terminal",
    browser: "Browser",
    browserGo: "Go",
    browserHome: "https://takuyash.github.io/CaptureMemoSite/index.html",
    browserAddressPlaceholder: "Enter URL or search term...",
    terminalWelcome: "CaptureMemo Desktop Terminal v1.0",
    terminalHint: "Type 'help' to see available commands.",
    terminalUnknown: "Command not found: {cmd}",
    terminalVersion: "CaptureMemo Desktop Terminal v1.0",
    terminalAbout: "This is the desktop environment for the CaptureMemo official site.",
    terminalOpened: "Opened {app}.",
    terminalOpenUnknown: "App not found: {app}",
    terminalOpenUsage: "Usage: open [capturememo|calc|notepad|paint|terminal]",
    terminalLangSet: "Language switched to {lang}.",
    terminalLangInvalid: "Available: ja, en",
    terminalHelpText: "help              Show command list\nclear / cls       Clear screen\necho [text]       Print text\ndate              Show date and time\nwhoami            Show username\nopen [app]        Launch an app\nlang [ja|en]      Switch language\nver / version     Show version\nabout             About this site\nls / dir          List files",

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

const browserFavorites = [
  {
    label: {
      ja: "WinSimpleFolderLauncherSite",
      en: "WinSimpleFolderLauncherSite"
    },
    url: {
      ja: "https://takuyash.github.io/WinSimpleFolderLauncherSite/index.html",
      en: "https://takuyash.github.io/WinSimpleFolderLauncherSite/en/index.html"
    }
  },
  {
    label: {
      ja: "PhraseLauncherSite",
      en: "PhraseLauncherSite"
    },
    url: {
      ja: "https://takuyash.github.io/PhraseLauncherSite/index.html",
      en: "https://takuyash.github.io/PhraseLauncherSite/en/index.html"
    }
  },
  {
    label: {
      ja: "CaptureMemoSite",
      en: "CaptureMemoSite"
    },
    url: {
      ja: "https://takuyash.github.io/CaptureMemoSite/index.html",
      en: "https://takuyash.github.io/CaptureMemoSite/index.html"
    }
  },
  {
    label: {
      ja: "YearAndMonthprogress",
      en: "YearAndMonthprogress"
    },
    url: {
      ja: "https://takuyash.github.io/YearAndMonthprogress/YearAndMonthprogress.html",
      en: "https://takuyash.github.io/YearAndMonthprogress/YearAndMonthprogress.html"
    }
  },
  {
    label: {
      ja: "ZanShukkin",
      en: "ZanShukkin"
    },
    url: {
      ja: "https://takuyash.github.io/ZanShukkin/ZanShukkin.html",
      en: "https://takuyash.github.io/ZanShukkin/ZanShukkin.html"
    }
  },
  {
    label: {
      ja: "wikipedia",
      en: "wikipedia"
    },
    url: {
      ja: "https://ja.wikipedia.org",
      en: "https://en.wikipedia.org"
    }
  }
];

/* =========================
   ウィンドウ管理
========================= */
const TASKBAR_HEIGHT = 42;
let windowZIndex = 10;

const WINDOW_CONFIG = [
  { id: "appWindow", titleKey: "appCaptureMemo" },
  { id: "calcWindow", titleKey: "calculator" },
  { id: "notepadWindow", titleKey: "notepad" },
  { id: "paintWindow", titleKey: "paint" },
  { id: "terminalWindow", titleKey: "terminal" },
  { id: "browserWindow", titleKey: "browser" }  
];

const windowState = Object.fromEntries(
  WINDOW_CONFIG.map(({ id }) => [
    id,
    { status: "closed", bounds: null, beforeMinimize: "normal" }
  ])
);

function getWindowEl(id) {
  return document.getElementById(id);
}

function isWindowOpen(id) {
  return windowState[id]?.status !== "closed";
}

function saveWindowBounds(id) {
  const win = getWindowEl(id);
  if (!win) return;

  windowState[id].bounds = {
    top: win.offsetTop,
    left: win.offsetLeft,
    width: win.offsetWidth,
    height: win.offsetHeight
  };
}

function bringWindowToFront(id) {
  const win = getWindowEl(id);
  if (!win) return;

  windowZIndex += 1;
  win.style.zIndex = windowZIndex;
}

function applyMaximize(id) {
  const win = getWindowEl(id);
  const state = windowState[id];
  if (!win || !state) return;

  if (state.status !== "maximized" && !state.bounds) {
    saveWindowBounds(id);
  }

  win.style.display = "block";
  win.style.top = "0px";
  win.style.left = "0px";
  win.style.width = "100%";
  win.style.height = `calc(100vh - ${TASKBAR_HEIGHT}px)`;
  win.classList.add("window-maximized");
  state.status = "maximized";
  bringWindowToFront(id);
  updateMaximizeButton(id);
}

function restoreWindow(id) {
  const win = getWindowEl(id);
  const state = windowState[id];
  if (!win || !state) return;

  const bounds = state.bounds;
  if (bounds) {
    win.style.top = `${bounds.top}px`;
    win.style.left = `${bounds.left}px`;
    win.style.width = `${bounds.width}px`;
    win.style.height = `${bounds.height}px`;
  }

  win.classList.remove("window-maximized");
  state.bounds = null;
  state.status = "normal";
  updateMaximizeButton(id);
}

function toggleMaximize(id) {
  const state = windowState[id];
  if (!state || state.status === "closed" || state.status === "minimized") return;

  if (state.status === "maximized") {
    restoreWindow(id);
  } else {
    applyMaximize(id);
  }

  updateTaskbar();
}

function minimizeWindow(id) {
  const win = getWindowEl(id);
  const state = windowState[id];
  if (!win || !state || state.status === "closed") return;

  state.beforeMinimize =
    state.status === "maximized" ? "maximized" : "normal";
  win.style.display = "none";
  state.status = "minimized";
  updateTaskbar();
}

function focusWindow(id) {
  const win = getWindowEl(id);
  const state = windowState[id];
  if (!win || !state || state.status === "closed") return;

  win.style.display = "block";

  if (state.status === "minimized") {
    if (state.beforeMinimize === "maximized") {
      applyMaximize(id);
    } else {
      state.status = "normal";
      updateMaximizeButton(id);
    }
  }

  bringWindowToFront(id);
  updateTaskbar();

  if (id === "notepadWindow") {
    document.getElementById("notepadText")?.focus();
  }

  if (id === "terminalWindow") {
    document.getElementById("terminalInput")?.focus();
  }
}

function registerWindowOpen(id) {
  const state = windowState[id];
  if (!state) return;

  if (state.status === "minimized") {
    focusWindow(id);
    return;
  }

  const win = getWindowEl(id);
  if (!win) return;

  win.style.display = "block";

  if (state.status === "closed") {
    state.status = "normal";
    state.bounds = null;
    win.classList.remove("window-maximized");
    updateMaximizeButton(id);
  }

  bringWindowToFront(id);
  updateTaskbar();
}

function closeManagedWindow(id) {
  const win = getWindowEl(id);
  const state = windowState[id];
  if (!win || !state) return;

  win.style.display = "none";
  win.classList.remove("window-maximized");
  state.status = "closed";
  state.bounds = null;
  state.beforeMinimize = "normal";
  updateMaximizeButton(id);
  updateTaskbar();
}

function updateMaximizeButton(id) {
  const win = getWindowEl(id);
  if (!win) return;

  const btn = win.querySelector(".win-maximize");
  if (!btn) return;

  const maximized = windowState[id]?.status === "maximized";
  btn.textContent = maximized ? "❐" : "□";
  btn.title = data[lang][maximized ? "winRestore" : "winMaximize"];
}

function updateWindowControlLabels() {
  document.querySelectorAll(".win-minimize").forEach(btn => {
    btn.title = data[lang].winMinimize;
  });

  document.querySelectorAll(".win-close").forEach(btn => {
    btn.title = data[lang].winClose;
  });

  WINDOW_CONFIG.forEach(({ id }) => {
    updateMaximizeButton(id);
  });
}

function updateTaskbar() {
  const container = document.getElementById("taskApps");
  if (!container) return;

  container.innerHTML = "";

  WINDOW_CONFIG.forEach(({ id, titleKey }) => {
    const state = windowState[id];
    if (!state || state.status === "closed") return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "task-app-btn";
    btn.textContent = data[lang][titleKey];

    if (state.status === "minimized") {
      btn.classList.add("minimized");
    } else {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      if (state.status === "minimized") {
        focusWindow(id);
      } else {
        bringWindowToFront(id);
        updateTaskbar();
      }
    };

    container.appendChild(btn);
  });
}

function initWindowControls() {
  document.querySelectorAll(".win-minimize").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      minimizeWindow(btn.dataset.window);
    });
  });

  document.querySelectorAll(".win-maximize").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      toggleMaximize(btn.dataset.window);
    });
  });

  document.querySelectorAll(".win-close").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      closeManagedWindow(btn.dataset.window);
    });
  });
}

function initWindowStates() {
  const appWin = getWindowEl("appWindow");
  if (appWin && getComputedStyle(appWin).display !== "none") {
    windowState.appWindow.status = "normal";
  }
}

/* =========================
   タスクバー表示制御
========================= */
function updateTaskTitle() {
  updateTaskbar();
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
  registerWindowOpen("appWindow");
  switchPage(page);

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   電卓を開く
========================= */
function openCalculator() {
  registerWindowOpen("calcWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   電卓を閉じる
========================= */
function closeCalculator() {
  closeManagedWindow("calcWindow");
}

/* =========================
   メモ帳を開く
========================= */
function openNotepad() {
  registerWindowOpen("notepadWindow");
  document.getElementById("notepadText")?.focus();

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   メモ帳を閉じる
========================= */
function closeNotepad() {
  closeManagedWindow("notepadWindow");
}

/* =========================
   ペイントを開く
========================= */
function openPaint() {
  registerWindowOpen("paintWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   ペイントを閉じる
========================= */
function closePaint() {
  closeManagedWindow("paintWindow");
}

/* =========================
   ターミナルを開く
========================= */
function openTerminal() {
  registerWindowOpen("terminalWindow");

  if (!terminalBooted) {
    terminalBooted = true;
    printTerminalWelcome();
  }

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }

  document.getElementById("terminalInput")?.focus();
}

/* =========================
   ターミナルを閉じる
========================= */
function closeTerminal() {
  closeManagedWindow("terminalWindow");
}

/* =========================
   ブラウザを開く
========================= */
function openBrowser() {
  registerWindowOpen("browserWindow");

  if (!browserBooted) {
    browserBooted = true;
    browserNavigate(data[lang].browserHome);
  }

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }

  document.getElementById("browserAddress")?.focus();
}

/* =========================
   ブラウザを閉じる
========================= */
function closeBrowser() {
  closeManagedWindow("browserWindow");
}

/* =========================
   ターミナルロジック
========================= */
let terminalBooted = false;
const terminalHistory = [];
let terminalHistoryIndex = -1;

function getTerminalOutput() {
  return document.getElementById("terminalOutput");
}

function appendTerminalLine(text, type = "output") {
  const output = getTerminalOutput();
  if (!output) return;

  const line = document.createElement("div");
  line.className = `terminal-line terminal-${type}`;
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function clearTerminalOutput() {
  const output = getTerminalOutput();
  if (output) {
    output.innerHTML = "";
  }
}

function printTerminalWelcome() {
  appendTerminalLine(data[lang].terminalWelcome, "welcome");
  appendTerminalLine(data[lang].terminalHint, "hint");
}

function getTerminalDirListing() {
  const d = data[lang];
  return [
    "CaptureMemo.exe",
    `${d.calculator}.exe`,
    `${d.notepad}.exe`,
    `${d.paint}.exe`,
    `${d.terminal}.exe`,
    "README.txt"
  ].join("\n");
}

function terminalOpenApp(name) {
  const apps = {
    capturememo: { fn: () => openApp("overview"), label: () => data[lang].appCaptureMemo },
    calc: { fn: openCalculator, label: () => data[lang].calculator },
    calculator: { fn: openCalculator, label: () => data[lang].calculator },
    notepad: { fn: openNotepad, label: () => data[lang].notepad },
    paint: { fn: openPaint, label: () => data[lang].paint },
    terminal: { fn: openTerminal, label: () => data[lang].terminal },
    browser: { fn: openBrowser, label: () => data[lang].browser }
  };

  const app = apps[name?.toLowerCase()];
  if (!app) return false;

  app.fn();
  appendTerminalLine(
    data[lang].terminalOpened.replace("{app}", app.label()),
    "success"
  );
  return true;
}

function terminalSetLanguage(code) {
  const langBtn = document.getElementById("langBtn");
  const nextLang = code?.toLowerCase();

  if (nextLang !== "ja" && nextLang !== "en") {
    appendTerminalLine(data[lang].terminalLangInvalid, "error");
    return;
  }

  lang = nextLang;

  if (langBtn) {
    langBtn.innerText = lang === "ja" ? "EN" : "JA";
  }

  render();
  appendTerminalLine(
    data[lang].terminalLangSet.replace("{lang}", lang.toUpperCase()),
    "success"
  );
}

function executeTerminalCommand(input) {
  const trimmed = input.trim();
  if (!trimmed) return;

  appendTerminalLine(`> ${trimmed}`, "input-echo");

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case "help":
      appendTerminalLine(data[lang].terminalHelpText, "output");
      break;

    case "clear":
    case "cls":
      clearTerminalOutput();
      break;

    case "echo":
      appendTerminalLine(args.join(" "), "output");
      break;

    case "date": {
      const locale = lang === "ja" ? "ja-JP" : "en-US";
      appendTerminalLine(new Date().toLocaleString(locale), "output");
      break;
    }

    case "whoami":
      appendTerminalLine("desktop-user", "output");
      break;

    case "open":
      if (!args[0]) {
        appendTerminalLine(data[lang].terminalOpenUsage, "error");
        break;
      }
      if (!terminalOpenApp(args[0])) {
        appendTerminalLine(
          data[lang].terminalOpenUnknown.replace("{app}", args[0]),
          "error"
        );
      }
      break;

    case "lang":
      if (!args[0]) {
        appendTerminalLine(data[lang].terminalLangInvalid, "error");
        break;
      }
      terminalSetLanguage(args[0]);
      break;

    case "ver":
    case "version":
      appendTerminalLine(data[lang].terminalVersion, "output");
      break;

    case "about":
      appendTerminalLine(data[lang].terminalAbout, "output");
      break;

    case "ls":
    case "dir":
      appendTerminalLine(getTerminalDirListing(), "output");
      break;

    default:
      appendTerminalLine(
        data[lang].terminalUnknown.replace("{cmd}", parts[0]),
        "error"
      );
  }
}

function initTerminalApp() {
  const input = document.getElementById("terminalInput");
  if (!input) return;

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const value = input.value;
      if (value.trim()) {
        terminalHistory.push(value);
        terminalHistoryIndex = terminalHistory.length;
      }
      executeTerminalCommand(value);
      input.value = "";
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!terminalHistory.length) return;

      terminalHistoryIndex = Math.max(0, terminalHistoryIndex - 1);
      input.value = terminalHistory[terminalHistoryIndex] || "";
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!terminalHistory.length) return;

      terminalHistoryIndex = Math.min(terminalHistory.length, terminalHistoryIndex + 1);
      input.value = terminalHistory[terminalHistoryIndex] || "";
    }
  });
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
  closeManagedWindow("appWindow");
}

/* =========================
   ブラウザロジック
========================= */
let browserBooted = false;
const browserHistory = [];
let browserHistoryIndex = -1;

function normalizeBrowserUrl(input) {
  const trimmed = (input || "").trim();
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  // 「example.com」のようなドメイン形式ならhttps://を付与
  if (/^[\w-]+(\.[\w-]+)+(\/.*)?$/.test(trimmed) && !trimmed.includes(" ")) {
    return `https://${trimmed}`;
  }

  // それ以外は検索語として扱う
  return `https://www.bing.com/search?q=${encodeURIComponent(trimmed)}`;
}

function browserNavigate(input, fromHistory = false) {
  const frame = document.getElementById("browserFrame");
  const addressInput = document.getElementById("browserAddress");
  if (!frame) return;

  const url = normalizeBrowserUrl(input);
  if (!url) return;

  frame.src = url;

  if (addressInput) {
    addressInput.value = url;
  }

  if (!fromHistory) {
    browserHistory.splice(browserHistoryIndex + 1);
    browserHistory.push(url);
    browserHistoryIndex = browserHistory.length - 1;
  }
}

function browserNavigateFromInput() {
  const addressInput = document.getElementById("browserAddress");
  if (!addressInput) return;
  browserNavigate(addressInput.value);
}

function browserGoBack() {
  if (browserHistoryIndex <= 0) return;
  browserHistoryIndex -= 1;
  browserNavigate(browserHistory[browserHistoryIndex], true);
}

function browserGoForward() {
  if (browserHistoryIndex >= browserHistory.length - 1) return;
  browserHistoryIndex += 1;
  browserNavigate(browserHistory[browserHistoryIndex], true);
}

function browserRefresh() {
  const frame = document.getElementById("browserFrame");
  if (!frame) return;
  frame.src = frame.src;
}

function initBrowserApp() {
  const addressInput = document.getElementById("browserAddress");
  if (!addressInput) return;

  addressInput.placeholder = data[lang].browserAddressPlaceholder;

  addressInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      browserNavigateFromInput();
    }
  });

  renderBrowserFavorites();
}

function renderBrowserFavorites() {
  const container = document.getElementById("browserFavorites");
  if (!container) return;

  container.innerHTML = browserFavorites
    .map(fav => `
      <button type="button" class="browser-fav-btn" data-url="${fav.url[lang] || fav.url.ja}">
        ${fav.label[lang] || fav.label.ja}
      </button>
    `)
    .join("");

  container.querySelectorAll(".browser-fav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      browserNavigate(btn.dataset.url);
    });
  });
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
  
  const browserAddress = document.getElementById("browserAddress");
  if (browserAddress) {
    browserAddress.placeholder = d.browserAddressPlaceholder;
  }
  
  renderBrowserFavorites();

  updateWindowControlLabels();
  updateTaskbar();
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

  initWindowControls();
  initWindowStates();
  updateTaskbar();

  const notepadText = document.getElementById("notepadText");
  if (notepadText) {
    notepadText.value = localStorage.getItem("notepad-content") || "";
    notepadText.addEventListener("input", () => {
      localStorage.setItem("notepad-content", notepadText.value);
    });
  }

  initPaintApp();
  initTerminalApp();
  initBrowserApp();
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
    if (win.classList.contains("window-maximized")) return;

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

function makeResizable(win, options = {}) {
  if (!win) return;

  const minWidth = options.minWidth ?? 480;
  const minHeight = options.minHeight ?? 280;
  const directions = ["n", "s", "e", "w", "ne", "nw", "se", "sw"];

  directions.forEach(dir => {
    const handle = document.createElement("div");
    handle.className = `resize-handle resize-${dir}`;
    handle.dataset.dir = dir;
    win.appendChild(handle);
  });

  let resizing = false;
  let direction = "";
  let startX = 0;
  let startY = 0;
  let startWidth = 0;
  let startHeight = 0;
  let startLeft = 0;
  let startTop = 0;

  win.addEventListener("mousedown", e => {
    const handle = e.target.closest(".resize-handle");
    if (!handle || !win.contains(handle)) return;
    if (win.classList.contains("window-maximized")) return;

    e.preventDefault();
    e.stopPropagation();

    resizing = true;
    direction = handle.dataset.dir;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = win.offsetWidth;
    startHeight = win.offsetHeight;
    startLeft = win.offsetLeft;
    startTop = win.offsetTop;

    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", e => {
    if (!resizing) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newWidth = startWidth;
    let newHeight = startHeight;
    let newLeft = startLeft;
    let newTop = startTop;

    if (direction.includes("e")) {
      newWidth = Math.max(minWidth, startWidth + dx);
    }

    if (direction.includes("w")) {
      newWidth = Math.max(minWidth, startWidth - dx);
      newLeft = startLeft + startWidth - newWidth;
    }

    if (direction.includes("s")) {
      newHeight = Math.max(minHeight, startHeight + dy);
    }

    if (direction.includes("n")) {
      newHeight = Math.max(minHeight, startHeight - dy);
      newTop = startTop + startHeight - newHeight;
    }

    win.style.width = `${newWidth}px`;
    win.style.height = `${newHeight}px`;
    win.style.left = `${newLeft}px`;
    win.style.top = `${newTop}px`;
  });

  document.addEventListener("mouseup", () => {
    if (!resizing) return;

    resizing = false;
    document.body.style.userSelect = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  [
    { id: "appWindow", bar: "dragBar", minWidth: 480, minHeight: 280 },
    { id: "calcWindow", bar: "calcDragBar", minWidth: 240, minHeight: 320 },
    { id: "notepadWindow", bar: "notepadDragBar", minWidth: 280, minHeight: 200 },
    { id: "paintWindow", bar: "paintDragBar", minWidth: 320, minHeight: 280 },
    { id: "terminalWindow", bar: "terminalDragBar", minWidth: 360, minHeight: 240 },
    { id: "browserWindow", bar: "browserDragBar", minWidth: 400, minHeight: 300 } 
  ].forEach(({ id, bar, minWidth, minHeight }) => {
    const win = document.getElementById(id);
    makeDraggable(win, document.getElementById(bar));
    makeResizable(win, { minWidth, minHeight });
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