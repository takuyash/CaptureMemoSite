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
    stickyNote: "ふせん",
    stickyNoteText: "メモ帳とペイントの内容は、このブラウザ内にのみ保存されます。\n他の端末と共有されず、外部に送信されることもありません。\nブラウザの履歴やキャッシュを削除すると消えるのでご注意ください。",
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
    photo: "フォト",
    photoEmpty: "画像がありません",
    desc: "スクショ・画像・テキストを常に最前面に置いて使えるメモアプリ",
    counter: "文字数カウンター",
    countAllLabel: "文字数（改行含む）",
    countNoNewlineLabel: "文字数（改行除く）",
    countNoSpaceLabel: "文字数（空白除く）",
    lineCountLabel: "行数",
    clear: "クリア",
    icoConverter: "ICO変換",
    icoInputLabel: "入力",
    icoDropMain: "画像をドラッグ＆ドロップ",
    icoDropOr: "または",
    icoSelectBtn: "ファイルを選択",
    icoAcceptedTypes: "対応形式: PNG / JPG / JPEG / WebP / BMP / GIF / SVG",
    icoPreviewLabel: "プレビュー",
    icoEmptyPreview: "画像が選択されていません",
    icoSizeLabel: "作成サイズ",
    icoSizeSub: "（サイズごとに個別のICOを出力）",
    icoSelectAll: "すべて選択",
    icoDeselectAll: "すべて解除",
    icoCreateBtn: "選択サイズのICOを作成",
    qrCode: "QRコード",
    zenkaku: "全角/半角変換",
    zenkakuInputLabel: "入力",
    zenkakuOutputLabel: "出力",
    zenkakuToFullBtn: "→ 全角",
    zenkakuToHalfBtn: "→ 半角",
    zenkakuOptAlnum: "英数字",
    zenkakuOptKana: "カタカナ",
    zenkakuOptSpace: "空白",
    zenkakuCopyBtn: "コピー",
    zenkakuCopied: "コピーしました",
    qrTextPlaceholder: "QRコードにしたい文字列やURLを入力してください",
    qrErrorLevelLabel: "誤り訂正レベル",
    qrCellSizeLabel: "セルサイズ",
    qrEmptyText: "文字列を入力するとQRコードが表示されます",
    qrDownloadBtn: "PNGをダウンロード",
    qrErrorTooLong: "文字数が多すぎてQRコードを生成できません",
    barcode: "バーコード",
    barcodeTextPlaceholder: "バーコードにしたい文字列を入力（半角英数・記号）",
    barcodeBarWidthLabel: "バー幅",
    barcodeBarHeightLabel: "高さ",
    barcodeShowTextLabel: "コードを表示",
    barcodeEmptyText: "文字列を入力するとバーコードが表示されます",
    barcodeDownloadBtn: "PNGをダウンロード",
    barcodeErrorInvalid: "半角英数字・記号（ASCII 32〜126）のみ入力できます",
    stopwatch: "ストップウォッチ",
    stopwatchStart: "開始",
    stopwatchStop: "停止",
    stopwatchLap: "ラップ",
    stopwatchReset: "リセット",
    stopwatchNoLaps: "ラップタイムはありません",
    stopwatchLapLabel: "ラップ",
    hepburn: "ヘボン式ローマ字変換",
    hepburnInputLabel: "日本語",
    hepburnInputPlaceholder: "例：てすと",
    hepburnOutputLabel: "変換結果",
    hepburnConvertBtn: "変換",
    hepburnCopyBtn: "コピー",
    hepburnCopied: "コピーしました",
    hepburnMacronLabel: "長音をマクロンで表記（ō / ū など）",
    hepburnUppercaseLabel: "大文字で出力",
    hepburnNote: "主に標準的なヘボン式を想定しています。助詞の「は・へ」などは発音ではなく、入力された仮名をそのまま変換します。",
    tableDiff: "テーブル差分比較",
    settings: "設定",
    settingsBgTitle: "背景画像",
    settingsBgDesc: "デスクトップの背景に使う画像を選択してください。",
    settingsLangTitle: "言語",
    settingsDataTitle: "保存データの管理",
    settingsDataDesc: "メモ帳・ペイント・背景設定など、このブラウザに保存されたデータを削除します。",
    settingsClearDataBtn: "保存データを削除",
    settingsClearConfirm: "保存されたデータをすべて削除します。よろしいですか？",
    settingsDataCleared: "削除しました",
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
    stickyNote: "Sticky Note",
    stickyNoteText: "Notepad and Paint content is saved only in this browser.\nIt is not shared across devices or sent anywhere externally.\nClearing your browser cache will erase this data.",
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
    photo: "Photo",
    photoEmpty: "No images found",
    desc: "A memo app that lets you keep screenshots, images, and text always on top while you work.",
    counter: "Character Counter",
    countAllLabel: "Characters (with newlines)",
    countNoNewlineLabel: "Characters (without newlines)",
    countNoSpaceLabel: "Characters (without spaces)",
    lineCountLabel: "Lines",
    clear: "Clear",
    icoConverter: "ICO Converter",
    icoInputLabel: "Input",
    icoDropMain: "Drag & drop image here",
    icoDropOr: "or",
    icoSelectBtn: "Select File",
    icoAcceptedTypes: "Supported: PNG / JPG / JPEG / WebP / BMP / GIF / SVG",
    icoPreviewLabel: "Preview",
    icoEmptyPreview: "No image selected",
    icoSizeLabel: "Icon Sizes",
    icoSizeSub: "(outputs individual ICO per size)",
    icoSelectAll: "Select All",
    icoDeselectAll: "Deselect All",
    icoCreateBtn: "Create ICO for Selected Sizes",
    qrCode: "QR Code",
    zenkaku: "Full/Half-width Converter",
    zenkakuInputLabel: "Input",
    zenkakuOutputLabel: "Output",
    zenkakuToFullBtn: "→ Full-width",
    zenkakuToHalfBtn: "→ Half-width",
    zenkakuOptAlnum: "Alphanumeric",
    zenkakuOptKana: "Katakana",
    zenkakuOptSpace: "Space",
    zenkakuCopyBtn: "Copy",
    zenkakuCopied: "Copied",
    qrTextPlaceholder: "Enter text or a URL to encode as a QR code",
    qrErrorLevelLabel: "Error Correction",
    qrCellSizeLabel: "Cell Size",
    qrEmptyText: "Enter text to generate a QR code",
    qrDownloadBtn: "Download PNG",
    qrErrorTooLong: "Text is too long to generate a QR code",
    barcode: "Barcode",
    barcodeTextPlaceholder: "Enter text to encode (ASCII letters, numbers, symbols)",
    barcodeBarWidthLabel: "Bar Width",
    barcodeBarHeightLabel: "Height",
    barcodeShowTextLabel: "Show Text",
    barcodeEmptyText: "Enter text to generate a barcode",
    barcodeDownloadBtn: "Download PNG",
    barcodeErrorInvalid: "Only ASCII letters, numbers, and symbols (32\u2013126) are supported",
    stopwatch: "Stopwatch",
    stopwatchStart: "Start",
    stopwatchStop: "Stop",
    stopwatchLap: "Lap",
    stopwatchReset: "Reset",
    stopwatchNoLaps: "No lap times yet",
    stopwatchLapLabel: "Lap",
    hepburn: "Hepburn Romanization",
    hepburnInputLabel: "Japanese",
    hepburnInputPlaceholder: "e.g. てすと",
    hepburnOutputLabel: "Result",
    hepburnConvertBtn: "Convert",
    hepburnCopyBtn: "Copy",
    hepburnCopied: "Copied",
    hepburnMacronLabel: "Use macrons for long vowels (ō, ū, etc.)",
    hepburnUppercaseLabel: "Output in uppercase",
    hepburnNote: "Assumes standard Hepburn romanization. Particles such as \u306f/\u3078 are converted as typed, not by pronunciation.",
    tableDiff: "Table Diff",
    settings: "Settings",
    settingsBgTitle: "Desktop Background",
    settingsBgDesc: "Choose an image to use as the desktop background.",
    settingsLangTitle: "Language",
    settingsDataTitle: "Manage Saved Data",
    settingsDataDesc: "Delete data saved in this browser, such as Notepad, Paint, and background settings.",
    settingsClearDataBtn: "Clear Saved Data",
    settingsClearConfirm: "This will delete all saved data. Continue?",
    settingsDataCleared: "Cleared",
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
   フォトアプリ用 画像リスト
   ※ assets 配下の実際のファイル名
========================= */
const photoFiles = [
  { file: "assets/CaptureMemo.png", caption: "CaptureMemo.png" },
  { file: "assets/bg.png", caption: "bg.png" },
  { file: "assets/bg1.png", caption: "bg1.png" },
  { file: "assets/bg2.png", caption: "bg2.png" },
  { file: "assets/bg3.png", caption: "bg3.png" },
  { file: "assets/download.png", caption: "download.png" },
  { file: "assets/execute.png", caption: "execute.png" },
  { file: "assets/thawing.png", caption: "thawing.png" }
];

/* =========================
   ウィンドウ管理
========================= */
const TASKBAR_HEIGHT = 42;
let windowZIndex = 10;

/*
 * desktop / startMenu: そのアプリをデスクトップアイコン・スタートメニューに
 * 出すかどうか（表示/非表示の切り替えはここを true/false にするだけ）
 * 配列の並び順 = デスクトップアイコンの並び順（縦方向に積んで、
 * 画面の高さで折り返して次の列へ）＝ スタートメニューの並び順
 * onOpen: アイコン/メニュー項目クリック時に呼ぶ関数
 */
const WINDOW_CONFIG = [
  { id: "calcWindow", titleKey: "calculator", icon: "🧮", onOpen: openCalculator, desktop: true, startMenu: true },
  { id: "appWindow", titleKey: "appCaptureMemo", icon: "📄", onOpen: () => openApp("overview"), desktop: true, startMenu: true },
  { id: "notepadWindow", titleKey: "notepad", icon: "📝", onOpen: openNotepad, desktop: true, startMenu: true },
  { id: "paintWindow", titleKey: "paint", icon: "🎨", onOpen: openPaint, desktop: true, startMenu: true },
  { id: "terminalWindow", titleKey: "terminal", icon: "💻", onOpen: openTerminal, desktop: true, startMenu: true },
  { id: "browserWindow", titleKey: "browser", icon: "🌐", onOpen: openBrowser, desktop: true, startMenu: true },
  { id: "stickyNoteWindow", titleKey: "stickyNote", icon: "📌", onOpen: openStickyNote, desktop: true, startMenu: true },
  { id: "photoWindow", titleKey: "photo", icon: "🖼️", onOpen: openPhoto, desktop: true, startMenu: true },
  { id: "counterWindow", titleKey: "counter", icon: "🔤", onOpen: openCounter, desktop: true, startMenu: true },
  { id: "icoConverterWindow", titleKey: "icoConverter", icon: "🔄", onOpen: openIcoConverter, desktop: true, startMenu: true },
  { id: "qrWindow", titleKey: "qrCode", icon: "🔳", onOpen: openQrCode, desktop: true, startMenu: true },
  { id: "zenkakuWindow", titleKey: "zenkaku", icon: "🔠", onOpen: openZenkaku, desktop: true, startMenu: true },
  { id: "barcodeWindow", titleKey: "barcode", icon: "🏷️", onOpen: openBarcode, desktop: true, startMenu: true },
  { id: "stopwatchWindow", titleKey: "stopwatch", icon: "⏱️", onOpen: openStopwatch, desktop: true, startMenu: true },
  { id: "hepburnWindow", titleKey: "hepburn", icon: "🔡", onOpen: openHepburn, desktop: true, startMenu: true },
  { id: "settingsWindow", titleKey: "settings", icon: "⚙️", onOpen: openSettings, desktop: true, startMenu: true },
  { id: "tableDiffWindow", titleKey: "tableDiff", icon: "🔍", onOpen: openTableDiff, desktop: true, startMenu: true },
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

  WINDOW_CONFIG.forEach(({ id, titleKey, icon }) => {
    const state = windowState[id];
    if (!state || state.status === "closed") return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "task-app-btn";
    btn.innerHTML = `<span class="task-app-icon">${icon}</span>`;
    btn.title = data[lang][titleKey];

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

/* =========================
   デスクトップアイコン生成
   （WINDOW_CONFIG の並び順・desktopフラグを見て
     必要なDIVだけをJSで生成する）
========================= */
const DESKTOP_ICON_SLOT = 100; // 1アイコンあたりの高さ（アイコン88px + 隙間12px）
const DESKTOP_ICON_TOP_OFFSET = 40; // 上下の余白合計（top:20pxぶん×2）

function updateDesktopIconRows() {
  const container = document.getElementById("desktopIcons");
  if (!container) return;

  const availableHeight = window.innerHeight - TASKBAR_HEIGHT - DESKTOP_ICON_TOP_OFFSET;
  const rows = Math.max(1, Math.floor(availableHeight / DESKTOP_ICON_SLOT));

  container.style.setProperty("--icon-rows", rows);
}

function renderDesktopIcons() {
  const container = document.getElementById("desktopIcons");
  if (!container) return;

  container.innerHTML = "";

  WINDOW_CONFIG.forEach(({ id, titleKey, icon, onOpen, desktop }) => {
    if (!desktop) return;

    const iconEl = document.createElement("div");
    iconEl.className = "icon";
    iconEl.dataset.windowId = id;
    iconEl.onclick = onOpen;

    const image = document.createElement("span");
    image.className = "icon-image";
    image.textContent = icon;

    const label = document.createElement("div");
    label.className = "icon-label";
    label.dataset.i18n = titleKey;
    label.textContent = data[lang][titleKey] || "";

    iconEl.appendChild(image);
    iconEl.appendChild(label);
    container.appendChild(iconEl);
  });

  updateDesktopIconRows();
}

/* =========================
   スタートメニュー生成
   （同じく WINDOW_CONFIG から生成。表示順や表示/非表示の
     切り替えは WINDOW_CONFIG を編集するだけでよい）
========================= */
function renderStartMenu() {
  const menu = document.getElementById("startMenu");
  if (!menu) return;

  menu.innerHTML = "";

  WINDOW_CONFIG.forEach(({ titleKey, onOpen, startMenu }) => {
    if (!startMenu) return;

    const item = document.createElement("div");
    item.dataset.i18n = titleKey;
    item.textContent = data[lang][titleKey] || "";
    item.onclick = onOpen;

    menu.appendChild(item);
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

/* スタートメニュー外をクリックしたら閉じる */
document.addEventListener("click", e => {
  const menu = document.getElementById("startMenu");
  const startButton = document.querySelector(".start");

  if (!menu) return;

  // メニュー内、またはスタートボタンをクリックした場合は何もしない
  if (
    menu.contains(e.target) ||
    startButton?.contains(e.target)
  ) {
    return;
  }

  // メニューが開いている場合だけ閉じる
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
});

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
   フォトを開く
========================= */
function openPhoto() {
  registerWindowOpen("photoWindow");

  if (!photoBooted) {
    photoBooted = true;
    renderPhotoThumbs();
    photoShow(0);
  }

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   フォトを閉じる
========================= */
function closePhoto() {
  closeManagedWindow("photoWindow");
}

/* =========================
   ふせんを開く
========================= */
function openStickyNote() {
  registerWindowOpen("stickyNoteWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

/* =========================
   ふせんを閉じる
========================= */
function closeStickyNote() {
  closeManagedWindow("stickyNoteWindow");
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
   フォトロジック
========================= */
let photoBooted = false;
let photoIndex = 0;

function renderPhotoThumbs() {
  const container = document.getElementById("photoThumbs");
  if (!container) return;

  if (!photoFiles.length) {
    container.innerHTML = `<div class="photo-empty">${data[lang].photoEmpty}</div>`;
    return;
  }

  container.innerHTML = photoFiles
    .map((p, i) => `
      <button type="button" class="photo-thumb-btn ${i === photoIndex ? "active" : ""}" data-index="${i}">
        <img src="${p.file}" alt="">
      </button>
    `)
    .join("");

  container.querySelectorAll(".photo-thumb-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      photoShow(parseInt(btn.dataset.index, 10));
    });
  });
}

function photoShow(index) {
  if (!photoFiles.length) return;

  const len = photoFiles.length;
  photoIndex = ((index % len) + len) % len;

  const photo = photoFiles[photoIndex];
  const img = document.getElementById("photoMainImage");
  const caption = document.getElementById("photoCaption");

  if (img) {
    img.src = photo.file;
    img.alt = photo.caption || "";
  }

  if (caption) {
    caption.textContent = photo.caption || "";
  }

  renderPhotoThumbs();
}

function photoPrev() {
  photoShow(photoIndex - 1);
}

function photoNext() {
  photoShow(photoIndex + 1);
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

  const qrText = document.getElementById("qrText");
  if (qrText) {
    qrText.placeholder = d.qrTextPlaceholder;
  }

  const barcodeText = document.getElementById("barcodeText");
  if (barcodeText) {
    barcodeText.placeholder = d.barcodeTextPlaceholder;
  }

  const hepburnInput = document.getElementById("hepburnInput");
  if (hepburnInput) {
    hepburnInput.placeholder = d.hepburnInputPlaceholder;
  }

  updateStopwatchButtons();
  renderStopwatchLaps();

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
  
  if (photoBooted) {
    renderPhotoThumbs();
  }

  if (settingsBooted) {
    renderSettingsBgGrid();
    updateSettingsLangButtons();
  }

  updateWindowControlLabels();
  updateTaskbar();

  /* TABLE DIFF LANGUAGE SYNC */
  const tableDiffFrame = document.getElementById("tableDiffFrame");
  if (tableDiffFrame) {
    tableDiffFrame.contentWindow?.postMessage(
      { type: "capturememo-language", lang },
      "*"
    );
  }
}

/* =========================
   初期化
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const langBtn = document.getElementById("langBtn");

  if (langBtn) {
    langBtn.onclick = () => {
      setLang(lang === "ja" ? "en" : "ja");
    };
  }

  initBackground();

  renderDesktopIcons();
  renderStartMenu();

  render();

  initWindowControls();
  initWindowStates();
  updateTaskbar();

  window.addEventListener("resize", updateDesktopIconRows);

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
  initCounterApp();
  openStickyNote(); 
  initIcoConverterApp();
  initQrCodeApp();
  initZenkakuApp();
  initBarcodeApp();
  initStopwatchApp();
  initHepburnApp();
  initSettingsApp();

  const tableDiffFrame = document.getElementById("tableDiffFrame");
  if (tableDiffFrame) {
    tableDiffFrame.addEventListener("load", () => {
      tableDiffFrame.contentWindow?.postMessage(
        { type: "capturememo-language", lang },
        "*"
      );
    });
  }
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

  const newLeft = e.clientX - offsetX;
  const newTop = e.clientY - offsetY;

  // 画面上端より上には移動させない
  const maxTop = window.innerHeight - TASKBAR_HEIGHT - win.offsetHeight;

  win.style.left = Math.max(0, newLeft) + "px";
  win.style.top = Math.max(0, Math.min(newTop, maxTop)) + "px";
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
    { id: "browserWindow", bar: "browserDragBar", minWidth: 400, minHeight: 300 },
    { id: "photoWindow", bar: "photoDragBar", minWidth: 400, minHeight: 320 },
    { id: "counterWindow", bar: "counterDragBar", minWidth: 380, minHeight: 320 },
    { id: "icoConverterWindow", bar: "icoConverterDragBar", minWidth: 400, minHeight: 400 },
    { id: "qrWindow", bar: "qrDragBar", minWidth: 360, minHeight: 420 },
    { id: "zenkakuWindow", bar: "zenkakuDragBar", minWidth: 480, minHeight: 360 },
    { id: "barcodeWindow", bar: "barcodeDragBar", minWidth: 380, minHeight: 360 },
    { id: "stopwatchWindow", bar: "stopwatchDragBar", minWidth: 320, minHeight: 400 },
    { id: "hepburnWindow", bar: "hepburnDragBar", minWidth: 420, minHeight: 420 },
    { id: "tableDiffWindow", bar: "tableDiffDragBar", minWidth: 720, minHeight: 420 },
    { id: "settingsWindow", bar: "settingsDragBar", minWidth: 420, minHeight: 420 }
  ].forEach(({ id, bar, minWidth, minHeight }) => {
    const win = document.getElementById(id);
    makeDraggable(win, document.getElementById(bar));
    makeResizable(win, { minWidth, minHeight });
  });

  // ふせんはドラッグのみ(リサイズなし)
  makeDraggable(
    document.getElementById("stickyNoteWindow"),
    document.getElementById("stickyNoteDragBar")
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

/* =========================
   文字数カウンターロジック
========================= */
function openCounter() {
  registerWindowOpen("counterWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }

  document.getElementById("counterText")?.focus();
}

function closeCounter() {
  closeManagedWindow("counterWindow");
}

function updateCounter() {
  const textarea = document.getElementById("counterText");
  if (!textarea) return;

  const text = textarea.value;

  // 改行含む
  const countAll = text.length;
  // 改行除く
  const countNoNewline = text.replace(/\r?\n/g, "").length;
  // 空白・改行除く
  const countNoSpace = text.replace(/\s/g, "").length;
  // 行数
  const lineCount = text === "" ? 1 : text.split(/\r\n|\r|\n/).length;

  document.getElementById("countAll").textContent = countAll;
  document.getElementById("countNoNewline").textContent = countNoNewline;
  document.getElementById("countNoSpace").textContent = countNoSpace;
  document.getElementById("lineCount").textContent = lineCount;
}

function clearCounterText() {
  const textarea = document.getElementById("counterText");
  if (!textarea) return;

  textarea.value = "";
  updateCounter();
}

function initCounterApp() {
  const textarea = document.getElementById("counterText");
  if (!textarea) return;

  textarea.addEventListener("input", updateCounter);
  updateCounter();
}

function openIcoConverter() {
  registerWindowOpen("icoConverterWindow");
  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

function closeIcoConverter() {
  closeManagedWindow("icoConverterWindow");
}

/* =========================
   ICO Converter ロジック
========================= */
function initIcoConverterApp() {
  const SIZES = [16, 24, 32, 48, 64, 96, 128, 256];

  const dropzone = document.getElementById('icoDropzone');
  const fileInput = document.getElementById('icoFileInput');
  const selectBtn = document.getElementById('icoSelectBtn');
  const previewArea = document.getElementById('icoPreviewArea');
  const sizeGrid = document.getElementById('icoSizeGrid');
  const selectAllBtn = document.getElementById('icoSelectAll');
  const deselectAllBtn = document.getElementById('icoDeselectAll');
  const createBtn = document.getElementById('icoCreateBtn');
  const statusEl = document.getElementById('icoStatus');

  if (!dropzone || !sizeGrid) return;

  let currentImage = null;
  let currentName = '';

  // サイズグリッドの構築
  sizeGrid.innerHTML = SIZES.map(size => `
    <div class="size-tile">
      <input type="checkbox" id="ico-size-${size}" value="${size}" checked>
      <label for="ico-size-${size}">
        <span class="px-icon"></span>
        ${size}×${size}
      </label>
    </div>
  `).join('');

  selectAllBtn.addEventListener('click', () => {
    SIZES.forEach(s => {
      const cb = document.getElementById('ico-size-' + s);
      if (cb) cb.checked = true;
    });
  });

  deselectAllBtn.addEventListener('click', () => {
    SIZES.forEach(s => {
      const cb = document.getElementById('ico-size-' + s);
      if (cb) cb.checked = false;
    });
  });

  selectBtn.addEventListener('click', () => fileInput.click());
  dropzone.addEventListener('click', (e) => {
    if (e.target === selectBtn) return;
    fileInput.click();
  });

  ['dragenter', 'dragover'].forEach(evt => {
    dropzone.addEventListener(evt, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(evt => {
    dropzone.addEventListener(evt, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) handleIcoFile(file);
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) handleIcoFile(file);
  });

  function handleIcoFile(file) {
    setIcoStatus('', '');
    const validExt = /\.(png|jpe?g|webp|bmp|gif|svg)$/i;
    const isImageType = file.type.startsWith('image/') || validExt.test(file.name);
    if (!isImageType) {
      setIcoStatus(lang === 'ja' ? '対応していないファイル形式です' : 'Unsupported file format', 'err');
      return;
    }

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      currentImage = img;
      currentName = file.name;
      previewArea.innerHTML = `
        <div class="preview-row">
          <div class="preview-box"><img src="${img.src}" alt="preview"></div>
          <div class="preview-meta">
            <div class="preview-name">${escapeHtml(currentName)}</div>
            <div class="preview-dims">${img.naturalWidth} × ${img.naturalHeight}px</div>
          </div>
        </div>
      `;
      createBtn.disabled = false;
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      setIcoStatus(lang === 'ja' ? '画像の読み込みに失敗しました' : 'Failed to load image', 'err');
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function setIcoStatus(msg, cls) {
    statusEl.textContent = msg;
    statusEl.className = 'status' + (cls ? ' ' + cls : '');
  }

  // 簡易的なICO生成・ダウンロード処理（Canvas利用）
  createBtn.addEventListener('click', () => {
    if (!currentImage) return;
    const selectedSizes = SIZES.filter(s => document.getElementById('ico-size-' + s)?.checked);
    if (selectedSizes.length === 0) {
      setIcoStatus(lang === 'ja' ? 'サイズが選択されていません' : 'No size selected', 'err');
      return;
    }

    selectedSizes.forEach(size => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(currentImage, 0, 0, size, size);

      canvas.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${currentName.replace(/\.[^/.]+$/, '')}_${size}x${size}.png`; // 実用的なPNG/ICO代替ダウンロード
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 'image/png');
    });

    setIcoStatus(lang === 'ja' ? 'ダウンロードを開始しました' : 'Download started', 'ok');
  });
}
/* =========================
   QRコードジェネレーター
========================= */
function openQrCode() {
  registerWindowOpen("qrWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }

  document.getElementById("qrText")?.focus();
}

function closeQrCode() {
  closeManagedWindow("qrWindow");
}

function clearQrCode() {
  const textarea = document.getElementById("qrText");
  if (!textarea) return;

  textarea.value = "";
  generateQrCode();
  textarea.focus();
}

function setQrStatus(msg) {
  const statusEl = document.getElementById("qrStatus");
  if (statusEl) statusEl.textContent = msg || "";
}

function generateQrCode() {
  const textarea = document.getElementById("qrText");
  const canvas = document.getElementById("qrCanvas");
  const preview = document.getElementById("qrPreview");
  const downloadBtn = document.getElementById("qrDownloadBtn");
  const errorLevelSelect = document.getElementById("qrErrorLevel");
  const cellSizeInput = document.getElementById("qrCellSize");

  if (!textarea || !canvas || !preview) return;

  const text = textarea.value;

  if (!text) {
    preview.classList.remove("has-code");
    if (downloadBtn) downloadBtn.disabled = true;
    setQrStatus("");
    return;
  }

  const errorLevel = errorLevelSelect ? errorLevelSelect.value : "M";
  const cellSize = cellSizeInput ? parseInt(cellSizeInput.value, 10) || 6 : 6;
  const margin = cellSize * 2;

  try {
    // typeNumber 0 = 自動判定
    const qr = qrcode(0, errorLevel);
    qr.addData(text);
    qr.make();

    const moduleCount = qr.getModuleCount();
    const size = moduleCount * cellSize + margin * 2;

    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#000000";

    for (let row = 0; row < moduleCount; row += 1) {
      for (let col = 0; col < moduleCount; col += 1) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(
            margin + col * cellSize,
            margin + row * cellSize,
            cellSize,
            cellSize
          );
        }
      }
    }

    preview.classList.add("has-code");
    if (downloadBtn) downloadBtn.disabled = false;
    setQrStatus("");
  } catch (err) {
    preview.classList.remove("has-code");
    if (downloadBtn) downloadBtn.disabled = true;
    setQrStatus(data[lang].qrErrorTooLong);
  }
}

function downloadQrCode() {
  const canvas = document.getElementById("qrCanvas");
  if (!canvas) return;

  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = "qrcode.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function initQrCodeApp() {
  const textarea = document.getElementById("qrText");
  const errorLevelSelect = document.getElementById("qrErrorLevel");
  const cellSizeInput = document.getElementById("qrCellSize");
  const downloadBtn = document.getElementById("qrDownloadBtn");

  if (!textarea) return;

  textarea.addEventListener("input", generateQrCode);
  errorLevelSelect?.addEventListener("change", generateQrCode);
  cellSizeInput?.addEventListener("input", generateQrCode);
  downloadBtn?.addEventListener("click", downloadQrCode);

  generateQrCode();
}

/* =========================
   ヘボン式ローマ字変換ロジック
========================= */
function openHepburn() {
  registerWindowOpen("hepburnWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }

  document.getElementById("hepburnInput")?.focus();
}

function closeHepburn() {
  closeManagedWindow("hepburnWindow");
}

// 標準的なヘボン式をベースにしたかな→ローマ字表
const HEPBURN_TABLE = {
  "あ":"a","い":"i","う":"u","え":"e","お":"o",
  "か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko",
  "さ":"sa","し":"shi","す":"su","せ":"se","そ":"so",
  "た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to",
  "な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no",
  "は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho",
  "ま":"ma","み":"mi","む":"mu","め":"me","も":"mo",
  "や":"ya","ゆ":"yu","よ":"yo",
  "ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro",
  "わ":"wa","を":"o",
  "ん":"n",
  "が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go",
  "ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo",
  "だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do",
  "ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo",
  "ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po",

  "きゃ":"kya","きゅ":"kyu","きょ":"kyo",
  "しゃ":"sha","しゅ":"shu","しょ":"sho",
  "ちゃ":"cha","ちゅ":"chu","ちょ":"cho",
  "にゃ":"nya","にゅ":"nyu","にょ":"nyo",
  "ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo",
  "みゃ":"mya","みゅ":"myu","みょ":"myo",
  "りゃ":"rya","りゅ":"ryu","りょ":"ryo",
  "ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo",
  "じゃ":"ja","じゅ":"ju","じょ":"jo",
  "びゃ":"bya","びゅ":"byu","びょ":"byo",
  "ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo",

  // カタカナ由来の拡張音
  "うぃ":"wi","うぇ":"we","うぉ":"wo",
  "ゔぁ":"va","ゔぃ":"vi","ゔ":"vu","ゔぇ":"ve","ゔぉ":"vo",
  "ゔゃ":"vya","ゔゅ":"vyu","ゔょ":"vyo",
  "てぃ":"ti","でぃ":"di",
  "とぅ":"tu","どぅ":"du",
  "ふぁ":"fa","ふぃ":"fi","ふぇ":"fe","ふぉ":"fo",
  "ふゅ":"fyu",
  "しぇ":"she","じぇ":"je","ちぇ":"che",
  "つぁ":"tsa","つぃ":"tsi","つぇ":"tse","つぉ":"tso",
  "くぁ":"kwa","くぃ":"kwi","くぇ":"kwe","くぉ":"kwo",
  "ぐぁ":"gwa","ぐぃ":"gwi","ぐぇ":"gwe","ぐぉ":"gwo",
  "いぇ":"ye",
  "でゅ":"dyu","てゅ":"tyu",
  "にぇ":"nye",
  "すぃ":"si","ずぃ":"zi",
  "きぇ":"kye","ぎぇ":"gye",
  "ひぇ":"hye","びぇ":"bye","ぴぇ":"pye",
  "りぇ":"rye"
};

const hepburnKatakanaToHiragana = (text) =>
  text.replace(/[\u30A1-\u30F6]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60)
  );

const HEPBURN_VOWELS = new Set(["a", "i", "u", "e", "o"]);

function isHepburnConsonantStart(s) {
  return /^[bcdfghjklmnpqrstvwxyz]/.test(s);
}

function convertHepburnLongVowel(result, macronEnabled) {
  // 「ー」は直前の母音を長音として扱う
  if (!result) return "ー";
  const last = result[result.length - 1];
  if (!/[aeiou]/.test(last)) return "ー";

  if (!macronEnabled) return last;
  return { a:"ā", i:"ī", u:"ū", e:"ē", o:"ō" }[last];
}

function convertHepburnText(text, macronEnabled, uppercaseEnabled) {
  let s = hepburnKatakanaToHiragana(text);
  let result = "";
  let smallTsu = false;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // 小さい「っ」
    if (ch === "っ") {
      smallTsu = true;
      continue;
    }

    // 長音符
    if (ch === "ー") {
      result += convertHepburnLongVowel(result, macronEnabled);
      continue;
    }

    // 改行・空白・記号はそのまま
    if (!/[\u3040-\u309F]/.test(ch)) {
      if (smallTsu) {
        result += "っ";
        smallTsu = false;
      }
      result += ch;
      continue;
    }

    // 3文字→2文字→1文字の順で確認
    let kana = s.slice(i, i + 3);
    let roman = HEPBURN_TABLE[kana];
    let consumed = 3;

    if (!roman) {
      kana = s.slice(i, i + 2);
      roman = HEPBURN_TABLE[kana];
      consumed = 2;
    }

    if (!roman) {
      kana = ch;
      roman = HEPBURN_TABLE[kana];
      consumed = 1;
    }

    if (!roman) {
      if (smallTsu) {
        result += "っ";
        smallTsu = false;
      }
      result += ch;
      continue;
    }

    // ん：母音・yの前では n' とする
    if (kana === "ん") {
      const next = s[i + 1] || "";
      const nextRoman = HEPBURN_TABLE[s.slice(i + 1, i + 3)] || HEPBURN_TABLE[next] || "";
      if (nextRoman && (HEPBURN_VOWELS.has(nextRoman[0]) || nextRoman[0] === "y")) {
        result += "n'";
      } else {
        result += "n";
      }
      continue;
    }

    // っ：次のローマ字の先頭子音を重ねる
    if (smallTsu) {
      if (isHepburnConsonantStart(roman)) {
        // 例：まっちゃ → matcha（chの前はtを重ねる）
        if (roman.startsWith("ch")) {
          result += "t";
        } else {
          result += roman[0];
        }
      }
      smallTsu = false;
    }

    result += roman;
    i += consumed - 1;
  }

  if (smallTsu) result += "っ";

  // macron OFF の場合、長音記号から生成された母音を含め、
  // 既存のマクロンも通常母音へ戻す
  if (!macronEnabled) {
    result = result
      .replaceAll("ā", "a")
      .replaceAll("ī", "i")
      .replaceAll("ū", "u")
      .replaceAll("ē", "e")
      .replaceAll("ō", "o");
  }

  return uppercaseEnabled ? result.toUpperCase() : result;
}

function setHepburnStatus(msg) {
  const el = document.getElementById("hepburnStatus");
  if (el) el.textContent = msg || "";
}

function runHepburnConvert() {
  const input = document.getElementById("hepburnInput");
  const output = document.getElementById("hepburnOutput");
  const macron = document.getElementById("hepburnMacron");
  const uppercase = document.getElementById("hepburnUppercase");
  if (!input || !output) return;

  output.textContent = convertHepburnText(
    input.value,
    !!macron?.checked,
    !!uppercase?.checked
  );
  setHepburnStatus("");
}

function clearHepburnText() {
  const input = document.getElementById("hepburnInput");
  const output = document.getElementById("hepburnOutput");
  if (input) input.value = "";
  if (output) output.textContent = "";
  setHepburnStatus("");
  input?.focus();
}

async function copyHepburnOutput() {
  const output = document.getElementById("hepburnOutput");
  if (!output || !output.textContent) return;

  try {
    await navigator.clipboard.writeText(output.textContent);
    setHepburnStatus(data[lang].hepburnCopied);
  } catch (err) {
    const range = document.createRange();
    range.selectNodeContents(output);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    setHepburnStatus(data[lang].hepburnCopied);
  }
}

function initHepburnApp() {
  const input = document.getElementById("hepburnInput");
  if (!input) return;

  const macron = document.getElementById("hepburnMacron");
  const uppercase = document.getElementById("hepburnUppercase");

  input.addEventListener("input", runHepburnConvert);
  macron?.addEventListener("change", runHepburnConvert);
  uppercase?.addEventListener("change", runHepburnConvert);
  document.getElementById("hepburnConvertBtn")?.addEventListener("click", runHepburnConvert);
  document.getElementById("hepburnCopyBtn")?.addEventListener("click", copyHepburnOutput);
  document.getElementById("hepburnClearBtn")?.addEventListener("click", clearHepburnText);

  runHepburnConvert();
}

/* =========================
   全角/半角変換ロジック
========================= */
function openZenkaku() {
  registerWindowOpen("zenkakuWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }

  document.getElementById("zenkakuInput")?.focus();
}

function closeZenkaku() {
  closeManagedWindow("zenkakuWindow");
}

// 半角カタカナ -> 全角カタカナ 変換テーブル
const ZENKAKU_KANA_MAP = {
  "ｱ": "ア", "ｲ": "イ", "ｳ": "ウ", "ｴ": "エ", "ｵ": "オ",
  "ｶ": "カ", "ｷ": "キ", "ｸ": "ク", "ｹ": "ケ", "ｺ": "コ",
  "ｻ": "サ", "ｼ": "シ", "ｽ": "ス", "ｾ": "セ", "ｿ": "ソ",
  "ﾀ": "タ", "ﾁ": "チ", "ﾂ": "ツ", "ﾃ": "テ", "ﾄ": "ト",
  "ﾅ": "ナ", "ﾆ": "ニ", "ﾇ": "ヌ", "ﾈ": "ネ", "ﾉ": "ノ",
  "ﾊ": "ハ", "ﾋ": "ヒ", "ﾌ": "フ", "ﾍ": "ヘ", "ﾎ": "ホ",
  "ﾏ": "マ", "ﾐ": "ミ", "ﾑ": "ム", "ﾒ": "メ", "ﾓ": "モ",
  "ﾔ": "ヤ", "ﾕ": "ユ", "ﾖ": "ヨ",
  "ﾗ": "ラ", "ﾘ": "リ", "ﾙ": "ル", "ﾚ": "レ", "ﾛ": "ロ",
  "ﾜ": "ワ", "ｦ": "ヲ", "ﾝ": "ン",
  "ｧ": "ァ", "ｨ": "ィ", "ｩ": "ゥ", "ｪ": "ェ", "ｫ": "ォ",
  "ｬ": "ャ", "ｭ": "ュ", "ｮ": "ョ", "ｯ": "ッ",
  "ｰ": "ー", "ﾞ": "゛", "ﾟ": "゜", "｡": "。", "｢": "「",
  "｣": "」", "､": "、", "･": "・"
};

// 濁点・半濁点付きの半角カタカナ -> 全角カタカナ
const ZENKAKU_KANA_DAKUTEN_MAP = {
  "ｶﾞ": "ガ", "ｷﾞ": "ギ", "ｸﾞ": "グ", "ｹﾞ": "ゲ", "ｺﾞ": "ゴ",
  "ｻﾞ": "ザ", "ｼﾞ": "ジ", "ｽﾞ": "ズ", "ｾﾞ": "ゼ", "ｿﾞ": "ゾ",
  "ﾀﾞ": "ダ", "ﾁﾞ": "ヂ", "ﾂﾞ": "ヅ", "ﾃﾞ": "デ", "ﾄﾞ": "ド",
  "ﾊﾞ": "バ", "ﾋﾞ": "ビ", "ﾌﾞ": "ブ", "ﾍﾞ": "ベ", "ﾎﾞ": "ボ",
  "ﾊﾟ": "パ", "ﾋﾟ": "ピ", "ﾌﾟ": "プ", "ﾍﾟ": "ペ", "ﾎﾟ": "ポ",
  "ｳﾞ": "ヴ"
};

// 全角カタカナ -> 半角カタカナ（濁点付きを含む）逆引きテーブル
const HANKAKU_KANA_MAP = (() => {
  const map = {};
  Object.entries(ZENKAKU_KANA_DAKUTEN_MAP).forEach(([half, full]) => {
    map[full] = half;
  });
  Object.entries(ZENKAKU_KANA_MAP).forEach(([half, full]) => {
    if (!map[full]) map[full] = half;
  });
  return map;
})();

function toFullWidth(text, opts) {
  let result = text;

  if (opts.alnum) {
    result = result.replace(/[A-Za-z0-9!-/:-@[-`{-~]/g, ch => {
      const code = ch.charCodeAt(0);
      return String.fromCharCode(code + 0xFEE0);
    });
  }

  if (opts.space) {
    result = result.replace(/ /g, "\u3000");
  }

  if (opts.kana) {
    // 濁点・半濁点付きを先に処理
    Object.entries(ZENKAKU_KANA_DAKUTEN_MAP).forEach(([half, full]) => {
      result = result.split(half).join(full);
    });
    Object.entries(ZENKAKU_KANA_MAP).forEach(([half, full]) => {
      result = result.split(half).join(full);
    });
  }

  return result;
}

function toHalfWidth(text, opts) {
  let result = text;

  if (opts.kana) {
    Object.entries(HANKAKU_KANA_MAP).forEach(([full, half]) => {
      result = result.split(full).join(half);
    });
  }

  if (opts.alnum) {
    result = result.replace(/[！-～]/g, ch => {
      const code = ch.charCodeAt(0);
      return String.fromCharCode(code - 0xFEE0);
    });
  }

  if (opts.space) {
    result = result.replace(/\u3000/g, " ");
  }

  return result;
}

function getZenkakuOptions() {
  return {
    alnum: !!document.getElementById("zenkakuOptAlnum")?.checked,
    kana: !!document.getElementById("zenkakuOptKana")?.checked,
    space: !!document.getElementById("zenkakuOptSpace")?.checked
  };
}

function setZenkakuStatus(msg) {
  const el = document.getElementById("zenkakuStatus");
  if (el) el.textContent = msg || "";
}

function runZenkakuConvert(direction) {
  const input = document.getElementById("zenkakuInput");
  const output = document.getElementById("zenkakuOutput");
  if (!input || !output) return;

  const opts = getZenkakuOptions();
  output.value =
    direction === "full"
      ? toFullWidth(input.value, opts)
      : toHalfWidth(input.value, opts);

  setZenkakuStatus("");
}

function clearZenkakuText() {
  const input = document.getElementById("zenkakuInput");
  const output = document.getElementById("zenkakuOutput");
  if (input) input.value = "";
  if (output) output.value = "";
  setZenkakuStatus("");
}

async function copyZenkakuOutput() {
  const output = document.getElementById("zenkakuOutput");
  if (!output || !output.value) return;

  try {
    await navigator.clipboard.writeText(output.value);
    setZenkakuStatus(data[lang].zenkakuCopied);
  } catch (err) {
    output.select();
    document.execCommand("copy");
    setZenkakuStatus(data[lang].zenkakuCopied);
  }
}

function swapZenkakuText() {
  const input = document.getElementById("zenkakuInput");
  const output = document.getElementById("zenkakuOutput");
  if (!input || !output) return;

  const tmp = input.value;
  input.value = output.value;
  output.value = tmp;
  setZenkakuStatus("");
}

function initZenkakuApp() {
  const input = document.getElementById("zenkakuInput");
  if (!input) return;

  document.getElementById("zenkakuToFull")?.addEventListener("click", () => runZenkakuConvert("full"));
  document.getElementById("zenkakuToHalf")?.addEventListener("click", () => runZenkakuConvert("half"));
  document.getElementById("zenkakuSwap")?.addEventListener("click", swapZenkakuText);
  document.getElementById("zenkakuCopyBtn")?.addEventListener("click", copyZenkakuOutput);
  document.getElementById("zenkakuClearBtn")?.addEventListener("click", clearZenkakuText);
}

/* =========================
   バーコードジェネレーター (Code128 / Code Set B)
========================= */

// Code128 の全107シンボル(値0〜106)に対応するバー/スペースパターン(11ビット、
// STOP(値106)のみ13ビット)。'1'=黒バー、'0'=白スペース。Code Set B は
// 値0〜94がASCII 32〜126に1対1で対応する。
const CODE128_PATTERNS = [
  "11011001100", "11001101100", "11001100110", "10010011000", "10010001100",
  "10001001100", "10011001000", "10011000100", "10001100100", "11001001000",
  "11001000100", "11000100100", "10110011100", "10011011100", "10011001110",
  "10111001100", "10011101100", "10011100110", "11001110010", "11001011100",
  "11001001110", "11011100100", "11001110100", "11101101110", "11101001100",
  "11100101100", "11100100110", "11101100100", "11100110100", "11100110010",
  "11011011000", "11011000110", "11000110110", "10100011000", "10001011000",
  "10001000110", "10110001000", "10001101000", "10001100010", "11010001000",
  "11000101000", "11000100010", "10110111000", "10110001110", "10001101110",
  "10111011000", "10111000110", "10001110110", "11101110110", "11010001110",
  "11000101110", "11011101000", "11011100010", "11011101110", "11101011000",
  "11101000110", "11100010110", "11101101000", "11101100010", "11100011010",
  "11101111010", "11001000010", "11110001010", "10100110000", "10100001100",
  "10010110000", "10010000110", "10000101100", "10000100110", "10110010000",
  "10110000100", "10011010000", "10011000010", "10000110100", "10000110010",
  "11000010010", "11001010000", "11110111010", "11000010100", "10001111010",
  "10100111100", "10010111100", "10010011110", "10111100100", "10011110100",
  "10011110010", "11110100100", "11110010100", "11110010010", "11011011110",
  "11011110110", "11110110110", "10101111000", "10100011110", "10001011110",
  "10111101000", "10111100010", "11110101000", "11110100010", "10111011110",
  "10111101110", "11101011110", "11110101110", "11010000100", "11010010000",
  "11010011100", "1100011101011"
];

const CODE128_START_B = 104;
const CODE128_STOP = 106;

// 対応文字なら Code128 のバイナリパターン(文字列)を返し、非対応文字が
// 含まれる場合は null を返す
function encodeCode128(text) {
  if (!text) return null;

  const values = [];
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    if (code < 32 || code > 126) return null;
    values.push(code - 32);
  }

  let checksum = CODE128_START_B;
  values.forEach((v, i) => {
    checksum += v * (i + 1);
  });
  checksum %= 103;

  const symbolValues = [CODE128_START_B, ...values, checksum, CODE128_STOP];
  return symbolValues.map(v => CODE128_PATTERNS[v]).join("");
}

function openBarcode() {
  registerWindowOpen("barcodeWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }

  document.getElementById("barcodeText")?.focus();
}

function closeBarcode() {
  closeManagedWindow("barcodeWindow");
}

function clearBarcode() {
  const input = document.getElementById("barcodeText");
  if (!input) return;

  input.value = "";
  generateBarcode();
  input.focus();
}

function setBarcodeStatus(msg) {
  const statusEl = document.getElementById("barcodeStatus");
  if (statusEl) statusEl.textContent = msg || "";
}

function generateBarcode() {
  const input = document.getElementById("barcodeText");
  const canvas = document.getElementById("barcodeCanvas");
  const preview = document.getElementById("barcodePreview");
  const downloadBtn = document.getElementById("barcodeDownloadBtn");
  const barWidthInput = document.getElementById("barcodeBarWidth");
  const barHeightInput = document.getElementById("barcodeBarHeight");
  const showTextInput = document.getElementById("barcodeShowText");

  if (!input || !canvas || !preview) return;

  const text = input.value;

  if (!text) {
    preview.classList.remove("has-code");
    if (downloadBtn) downloadBtn.disabled = true;
    setBarcodeStatus("");
    return;
  }

  const pattern = encodeCode128(text);

  if (!pattern) {
    preview.classList.remove("has-code");
    if (downloadBtn) downloadBtn.disabled = true;
    setBarcodeStatus(data[lang].barcodeErrorInvalid);
    return;
  }

  const moduleWidth = barWidthInput ? parseInt(barWidthInput.value, 10) || 2 : 2;
  const barHeight = barHeightInput ? parseInt(barHeightInput.value, 10) || 80 : 80;
  const showText = showTextInput ? showTextInput.checked : true;
  const quietZone = moduleWidth * 10;
  const textHeight = showText ? 22 : 0;

  const codeWidth = pattern.length * moduleWidth;
  const canvasWidth = codeWidth + quietZone * 2;
  const canvasHeight = barHeight + textHeight + 12;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = "#000000";

  let x = quietZone;
  for (let i = 0; i < pattern.length; i += 1) {
    if (pattern[i] === "1") {
      ctx.fillRect(x, 6, moduleWidth, barHeight);
    }
    x += moduleWidth;
  }

  if (showText) {
    ctx.font = "14px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvasWidth / 2, barHeight + 6 + textHeight / 2, codeWidth);
  }

  preview.classList.add("has-code");
  if (downloadBtn) downloadBtn.disabled = false;
  setBarcodeStatus("");
}

function downloadBarcode() {
  const canvas = document.getElementById("barcodeCanvas");
  if (!canvas) return;

  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = "barcode.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function initBarcodeApp() {
  const input = document.getElementById("barcodeText");
  const barWidthInput = document.getElementById("barcodeBarWidth");
  const barHeightInput = document.getElementById("barcodeBarHeight");
  const showTextInput = document.getElementById("barcodeShowText");
  const downloadBtn = document.getElementById("barcodeDownloadBtn");

  if (!input) return;

  input.addEventListener("input", generateBarcode);
  barWidthInput?.addEventListener("input", generateBarcode);
  barHeightInput?.addEventListener("input", generateBarcode);
  showTextInput?.addEventListener("change", generateBarcode);
  downloadBtn?.addEventListener("click", downloadBarcode);

  generateBarcode();
}

/* =========================
   ストップウォッチ
========================= */
let stopwatchRunning = false;
let stopwatchStartTimestamp = 0;
let stopwatchElapsedMs = 0;
let stopwatchTimerId = null;
let stopwatchLaps = [];

function formatStopwatchTime(ms) {
  const pad = (n, len = 2) => String(n).padStart(len, "0");

  const totalCentis = Math.floor(ms / 10);
  const centis = totalCentis % 100;
  const totalSeconds = Math.floor(totalCentis / 100);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(centis)}`;
}

function getStopwatchElapsed() {
  if (!stopwatchRunning) return stopwatchElapsedMs;
  return stopwatchElapsedMs + (Date.now() - stopwatchStartTimestamp);
}

function updateStopwatchDisplay() {
  const display = document.getElementById("stopwatchDisplay");
  if (display) {
    display.textContent = formatStopwatchTime(getStopwatchElapsed());
  }
}

function updateStopwatchButtons() {
  const startBtn = document.getElementById("stopwatchStartBtn");
  const lapBtn = document.getElementById("stopwatchLapBtn");
  const resetBtn = document.getElementById("stopwatchResetBtn");
  if (!startBtn) return;

  const d = data[lang];

  startBtn.textContent = stopwatchRunning ? d.stopwatchStop : d.stopwatchStart;
  startBtn.classList.toggle("running", stopwatchRunning);

  if (lapBtn) lapBtn.disabled = !stopwatchRunning;
  if (resetBtn) resetBtn.disabled = stopwatchRunning || getStopwatchElapsed() === 0;
}

function renderStopwatchLaps() {
  const container = document.getElementById("stopwatchLaps");
  const list = document.getElementById("stopwatchLapsList");
  if (!container || !list) return;

  container.classList.toggle("has-laps", stopwatchLaps.length > 0);

  const label = data[lang].stopwatchLapLabel;

  list.innerHTML = stopwatchLaps
    .map((lap, i) => {
      const num = stopwatchLaps.length - i;
      return `<div class="stopwatch-lap-row">
        <span class="stopwatch-lap-number">${label} ${num}</span>
        <span class="stopwatch-lap-split">${formatStopwatchTime(lap.split)}</span>
        <span class="stopwatch-lap-total">${formatStopwatchTime(lap.total)}</span>
      </div>`;
    })
    .join("");
}

function toggleStopwatch() {
  if (stopwatchRunning) {
    stopwatchElapsedMs = getStopwatchElapsed();
    stopwatchRunning = false;
    clearInterval(stopwatchTimerId);
    stopwatchTimerId = null;
  } else {
    stopwatchRunning = true;
    stopwatchStartTimestamp = Date.now();
    stopwatchTimerId = setInterval(updateStopwatchDisplay, 10);
  }

  updateStopwatchDisplay();
  updateStopwatchButtons();
}

function lapStopwatch() {
  if (!stopwatchRunning) return;

  const total = getStopwatchElapsed();
  const prevTotal = stopwatchLaps.length ? stopwatchLaps[0].total : 0;
  const split = total - prevTotal;

  stopwatchLaps.unshift({ total, split });
  renderStopwatchLaps();
}

function resetStopwatch() {
  if (stopwatchRunning) return;

  stopwatchElapsedMs = 0;
  stopwatchLaps = [];
  updateStopwatchDisplay();
  updateStopwatchButtons();
  renderStopwatchLaps();
}

function openStopwatch() {
  registerWindowOpen("stopwatchWindow");

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

function initStopwatchApp() {
  const startBtn = document.getElementById("stopwatchStartBtn");
  if (!startBtn) return;

  startBtn.addEventListener("click", toggleStopwatch);
  document.getElementById("stopwatchLapBtn")?.addEventListener("click", lapStopwatch);
  document.getElementById("stopwatchResetBtn")?.addEventListener("click", resetStopwatch);

  updateStopwatchDisplay();
  updateStopwatchButtons();
  renderStopwatchLaps();
}

/* =========================
   設定アプリ
========================= */
const BG_STORAGE_KEY = "desktop-bg";
const DEFAULT_BG = "assets/bg.png";
let settingsBooted = false;

function applyBackground(file) {
  document.body.style.backgroundImage = `url("${file}")`;
}

function initBackground() {
  const saved = localStorage.getItem(BG_STORAGE_KEY);
  if (saved) {
    applyBackground(saved);
  }
}

function selectBackground(file) {
  applyBackground(file);
  localStorage.setItem(BG_STORAGE_KEY, file);
  renderSettingsBgGrid();
}

function renderSettingsBgGrid() {
  const grid = document.getElementById("settingsBgGrid");
  if (!grid) return;

  const current = localStorage.getItem(BG_STORAGE_KEY) || DEFAULT_BG;

  grid.innerHTML = photoFiles
    .map(p => `
      <button
        type="button"
        class="settings-bg-thumb${p.file === current ? " active" : ""}"
        onclick="selectBackground('${p.file}')"
        title="${p.caption}"
      >
        <img src="${p.file}" alt="${p.caption}">
      </button>
    `)
    .join("");
}

function updateSettingsLangButtons() {
  const jaBtn = document.getElementById("settingsLangJa");
  const enBtn = document.getElementById("settingsLangEn");
  if (!jaBtn || !enBtn) return;

  jaBtn.classList.toggle("active", lang === "ja");
  enBtn.classList.toggle("active", lang === "en");
}

function setLang(newLang) {
  if (newLang !== "ja" && newLang !== "en") return;
  if (lang === newLang) return;

  lang = newLang;

  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.innerText = lang === "ja" ? "EN" : "JA";
  }

  render();
}

function clearAllSavedData() {
  localStorage.removeItem("notepad-content");
  localStorage.removeItem("paint-content");
  localStorage.removeItem(BG_STORAGE_KEY);

  const notepadText = document.getElementById("notepadText");
  if (notepadText) {
    notepadText.value = "";
  }

  if (typeof clearPaintCanvas === "function") {
    clearPaintCanvas();
  }

  document.body.style.backgroundImage = "";
  renderSettingsBgGrid();

  const status = document.getElementById("settingsStatus");
  if (status) {
    status.textContent = data[lang].settingsDataCleared;
    setTimeout(() => {
      status.textContent = "";
    }, 2500);
  }
}

function openTableDiff() {
  registerWindowOpen("tableDiffWindow");

  const frame = document.getElementById("tableDiffFrame");
  if (frame) {
    frame.contentWindow?.postMessage(
      { type: "capturememo-language", lang },
      "*"
    );
  }

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

function openSettings() {
  registerWindowOpen("settingsWindow");

  if (!settingsBooted) {
    settingsBooted = true;
    renderSettingsBgGrid();
    updateSettingsLangButtons();
  }

  const menu = document.getElementById("startMenu");
  if (menu) {
    menu.style.display = "none";
  }
}

function closeSettings() {
  closeManagedWindow("settingsWindow");
}

function initSettingsApp() {
  document.getElementById("settingsClearDataBtn")?.addEventListener("click", () => {
    if (confirm(data[lang].settingsClearConfirm)) {
      clearAllSavedData();
    }
  });
}
