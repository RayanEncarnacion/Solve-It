const logOutBtn = document.querySelector(".log-out");

const logoutConfirmation = () => {
  let confirmAction = confirm("Are you sure you want to Log out?");

  if (confirmAction) {
    localStorage.removeItem("user");
    window.location.href = "html/login.html";
  } else return;
};

logOutBtn.addEventListener("click", logoutConfirmation);
