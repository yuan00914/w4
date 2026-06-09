// hamburger
const menuBtn = document.querySelector(".btn-menu");
const navList = document.querySelector(".nav-list");
const mask = document.querySelector(".mask");

function toggleMenu() {
  navList.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}

menuBtn.addEventListener("click", toggleMenu);

if (mask) {
  mask.addEventListener("click", toggleMenu);
}

// 導向別的網頁
function myFunction() {
  window.location.href = "./blogs.html";
}
