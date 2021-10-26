import Swiper from "swiper/swiper-bundle";

//Index
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
// Main area
const userButton = document.querySelector(".user-btn");
const userInfo = document.querySelector(".user-info");

// Index helpers
function toogleScroll() {
  document.body.style.overflowY === ""
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "");
}

function toogleMenu() {
  if (menu.classList.contains("-translate-x-full")) {
    menu.classList.remove("-translate-x-full");
    toogleScroll();
  } else {
    menu.classList.add("-translate-x-full");
    toogleScroll();
  }
}

export const swiper = new Swiper(".swiper", {
  speed: 800,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

export function initMenu() {
  menu.classList.add("hidden");
  if (window.innerWidth >= 1024) return;

  setTimeout(() => {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  }, 400);

  // Toggle on links get clicked
  menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-link")) return;
    toogleMenu();
  });
  // Toogle menu
  menuButton.addEventListener("click", toogleMenu);
}

// App main area helpers

function toogleUserIconTheme() {
  if (userInfo.classList.contains("translate-x-full")) {
    userButton.classList.add("bg-drk-accent", "text-light");
  } else {
    setTimeout(() => {
      userButton.classList.remove("bg-drk-accent", "text-light");
    }, 100);
  }
}

function toogleuserInfo() {
  if (userInfo.classList.contains("translate-x-full")) {
    toogleUserIconTheme();
    userInfo.classList.remove("translate-x-full");
  } else {
    toogleUserIconTheme();
    userInfo.classList.add("translate-x-full");
  }
}

export function initMainMenu() {
  userInfo.classList.add("hidden");

  setTimeout(() => {
    userInfo.classList.remove("hidden");
    userInfo.classList.add("flex");
  }, 400);

  // Toogle info
  userButton.addEventListener("click", toogleuserInfo);
}
