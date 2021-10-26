const form = document.querySelector("form");
const submitContainer = document.querySelector(".submit-container");

function clearMessages() {
  if (document.querySelector(".success"))
    document.querySelector(".success").remove();
  if (document.querySelector(".error"))
    document.querySelector(".error").remove();
}

function createRequest() {
  const usernameInput = document.querySelector('input[name="username"]');
  const passwordInput = document.querySelector('input[name="password"]');
  return {
    username: usernameInput.value,
    password: passwordInput.value,
  };
}

function redirectOnSuccess() {
  setTimeout(() => (window.location.href = "/app.html"), 3000);
}

function displayMessageAndRedirect(response) {
  if (response.securedUser) {
    localStorage.setItem("user", JSON.stringify(response.securedUser));

    const successText = `<p class="success absolute -top-6 text-xs font-bold text-green-500 md:text-sm">${response.message}</p>`;

    if (form.querySelector(".error")) {
      form.querySelector(".error").remove();
      submitContainer.insertAdjacentHTML("afterbegin", successText);
      redirectOnSuccess();
    } else {
      submitContainer.insertAdjacentHTML("afterbegin", successText);
      redirectOnSuccess();
    }
  } else {
    const errorText = `<p class="error absolute -top-6 text-xs font-bold text-red-500 md:text-sm">${response.message}</p>`;
    if (form.querySelector(".error")) {
      form.querySelector(".error").remove();
      submitContainer.insertAdjacentHTML("afterbegin", errorText);
    } else submitContainer.insertAdjacentHTML("afterbegin", errorText);
  }
}

async function userLogin(e) {
  e.preventDefault();

  const req = createRequest();
  // Send POST request
  const data = await fetch(
    "https://aqueous-gorge-79094.herokuapp.com/https://solve-it-db.herokuapp.com/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    }
  );
  // Convert the data into json
  const res = await data.json();

  // Show messages and redirect if all worked well
  displayMessageAndRedirect(res);
}

["preload", "unload"].forEach((trigger) =>
  window.addEventListener(trigger, clearMessages())
);

form.addEventListener("submit", userLogin);
