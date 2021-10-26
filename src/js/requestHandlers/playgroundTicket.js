const playgroundArea = document.querySelector(".playground-area");
const answerInput = document.querySelector(".answer");
const answerContainer = document.querySelector(".answer-container");
const acceptBtn = document.querySelector(".accept");
const quitBtn = document.querySelector(".decline");
const ticketNameEl = document.querySelector(".ticket-name");
const ticketExplanationEl = document.querySelector(".ticket-explanation");
const userName = JSON.parse(localStorage.getItem("user")).username;

answerInput.value = "";

const ticket = JSON.parse(localStorage.getItem("playgroundTicket"));

function displayTicket() {
  const ticketInfo = `<h2 class="ticket-name font-titles text-center text-2xl lg:text-3xl">${ticket.name}</h2><p class="ticket-explanation text-center text-sm mt-2">${ticket.explanation}</p>`;

  playgroundArea.insertAdjacentHTML("afterbegin", ticketInfo);
}

async function updateTicketOnSubmit() {
  ticketUpdate();

  if (answerInput.value === "") return;

  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const data = await fetch(
    `https://aqueous-gorge-79094.herokuapp.com/https://solve-it-db.herokuapp.com/main/completed`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Id to find ticket and update it
        id: ticket.id,
        status: "Completed",
        answer: answerInput.value,
        // Name of dev who completed the ticket
        user: userName,
        // ID of the dev to updated solves count
        userID: userId,
        points: ticket.points,
      }),
    }
  );

  const res = await data.json();
  setTimeout(() => (window.location.href = "/html/answerSubmitted.html"), 2000);
}

function ticketUpdate(e) {
  if (answerInput.value === "") {
    const emptyInput = `<p class="empty absolute -top-6 ml-8 text-sm text-red-500 font-bold text-center mb-3">Insert your answer here!</p>`;
    if (document.querySelector(".empty")) {
      document.querySelector(".empty").remove();
      answerContainer.insertAdjacentHTML("afterbegin", emptyInput);
    } else answerContainer.insertAdjacentHTML("afterbegin", emptyInput);
  } else if (answerInput.value !== "") {
    const submitted = `<p class="text-sm absolute -top-6 ml-2 text-green-500 font-bold text-center mb-3">Answer submitted! Redirecting...</p>`;
    if (document.querySelector(".empty")) {
      document.querySelector(".empty").remove();
      answerContainer.insertAdjacentHTML("afterbegin", submitted);
    } else {
      answerContainer.insertAdjacentHTML("afterbegin", submitted);
    }
  }
}

displayTicket();
acceptBtn.addEventListener("click", updateTicketOnSubmit);
