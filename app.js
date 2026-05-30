let lang = "ja";

/* TEXT */
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

/* PAGE SWITCH（★1個に統一） */
function switchPage(pageId) {
  document.querySelectorAll(".page").forEach(el => {
    el.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.remove("active");
    if (el.getAttribute("onclick")?.includes(pageId)) {
      el.classList.add("active");
    }
  });
}

/* START MENU */
function toggleStart() {
  const menu = document.getElementById("startMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* ★アプリ起動 */
function openApp(page) {
  const win = document.getElementById("appWindow");

  win.style.display = "block";
  switchPage(page);

  toggleStart();
}

/* CLOSE */
function closeWindow() {
  document.getElementById("appWindow").style.display = "none";
}

/* LANGUAGE */
document.getElementById("langBtn").onclick = () => {
  lang = lang === "ja" ? "en" : "ja";
  document.getElementById("langBtn").innerText = lang === "ja" ? "EN" : "JA";
  render();
};

function render() {
  const d = data[lang];

  document.querySelector("[data-i18n='desc']").textContent = d.desc;
  document.querySelector("[data-i18n='license']").textContent = d.license;
  document.querySelector("[data-i18n='disclaimer']").textContent = d.disclaimer;
  document.querySelector("[data-i18n='support']").textContent = d.support;

  document.getElementById("usageList").innerHTML =
    d.usage.map(x => `<div>• ${x}</div>`).join("");
}

/* DRAG */
const win = document.getElementById("appWindow");
const bar = document.getElementById("dragBar");

let isDragging = false;
let offsetX, offsetY;

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

render();