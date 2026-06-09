// hamburger
const menuBtn = document.querySelector(".btn-menu");
const navList = document.querySelector(".nav-list");
const mask = document.querySelector(".mask");

function toggleMenu() {
  navList.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}

// 事件監聽器（白話翻譯版：當使用者點擊漢堡選單按鈕，我要做什麼事情）
menuBtn.addEventListener("click", toggleMenu);

if (mask) {
  mask.addEventListener("click", toggleMenu);
}
