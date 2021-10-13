const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

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

export default function () {
  menu.classList.remove("hidden");
  menu.classList.add("flex");

  // Toggle on links get clicked
  menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-link")) return;
    toogleMenu();
  });
  // Toogle menu
  menuButton.addEventListener("click", toogleMenu);
}
