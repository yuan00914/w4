// hamburger
const menuBtn = document.querySelector(".btn-menu");
const navList = document.querySelector(".nav-list");
const mask = document.querySelector(".mask");

function toggleMenu() {
  menuBtn.classList.toggle("active");
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

// btn:hover
const rippleButtons = document.querySelectorAll(".ripple-btn");

rippleButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const oldRipple = button.querySelector(".ripple");

    if (oldRipple) {
      oldRipple.remove();
    }

    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.classList.add("ripple");
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
});
