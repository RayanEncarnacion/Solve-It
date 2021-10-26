const createBtn = document.querySelector(".create");

const checkIfEngineer = (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  if (user.position !== "Engineer") {
    const noCredentials = `<p class="mt-4 text-sm text-red-500 font-bold text-center">Your account is not authorized!</p>`;
    createBtn.insertAdjacentHTML("afterend", noCredentials);
  } else {
    window.location.href = "html/ticketCreation.html";
  }
};

createBtn.addEventListener("click", checkIfEngineer);
