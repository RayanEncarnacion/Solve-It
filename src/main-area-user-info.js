const userButton = document.querySelector(".user-btn");
const userInfo = document.querySelector(".user-info");

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

export default function () {
  userInfo.classList.add("hidden");

  setTimeout(() => {
    userInfo.classList.remove("hidden");
    userInfo.classList.add("flex");
  }, 400);

  // Toogle info
  userButton.addEventListener("click", toogleuserInfo);
}
