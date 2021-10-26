const userName = JSON.parse(localStorage.getItem("user")).username;
let showAnswerBtn;
const ticketsContainer = document.querySelector(".tickets-container");
const mainArea = document.querySelector(".main-area");

async function displayTicket() {
  const user = JSON.parse(localStorage.getItem("user"));

  const data = await fetch(
    `https://aqueous-gorge-79094.herokuapp.com/https://solve-it-db.herokuapp.com/main/solved`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userName,
        userID: user._id,
      }),
    }
  );
  const res = await data.json();

  const ticketsOnDB = res.success ? res.ticket : 0;

  ticketsContainer.innerHTML = "";

  if (ticketsOnDB.length === 0 || ticketsOnDB === undefined) {
    const noTickets = `<h1 class="font-titles text-2xl text-center mt-8">No tickets solved!</h1>`;
    mainArea.insertAdjacentHTML("afterbegin", noTickets);
  } else {
    ticketsOnDB.forEach((ticket) => {
      const ticketTemplate = `
      <div class="ticket relative self-start w-full max-w-lg mx-auto border border-gray-200 px-4 py-2 bg-light text-xs sm:px-6 lg:px-4">
        <h2 class="font-titles text-lg lg:text-xl ticket-name">${ticket.name}</h2>
        <h2 class=" absolute top-0 right-4 sm:right-6 font-titles mt-2 text-accent text-xl md:text-2xl">Solved</h2>
        <p class="sm:mt-2 lg:text-sm ticket-explanation">${ticket.explanation}</p>
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center sm:mt-2">
          <ul class="flex gap-1 items-center justify-between mt-2 sm:mt-0 sm:gap-3 lg:gap-6">
              <li class="xl:text-sm">
              <strong>Urgency</strong>
              <span class="lg:block ticket-urgency">${ticket.urgency}</span>
              </li>
              <li class="xl:text-sm">
              <strong>Points</strong> <span class="lg:block ticket-points">${ticket.points}</span>
              </li>
              <li class="xl:text-sm">
              <strong>Type</strong>
              <span class="lg:block ticket-type">${ticket.type}</span>
              </li>
          </ul>
          </div>
            <button  class="show-answer uppercase mr-1 md:mr-2 no-underline w-max px-4 py-2 bg-accent mt-2 sm:mt-4 text-xs font-bold border border-transparent text-light hover:bg-drk-accent hover:border-light">Show answer</button>
            <button href="#" class="hide-answer hidden uppercase mr-1 md:mr-2 no-underline w-max px-4 py-2 bg-red-400  mt-2 sm:mt-4 text-xs font-bold border border-transparent text-light hover:bg-red-600 hover:border-light">Hide answer</button>
            <span class="answer hidden max-w-max mt-2 sm:mt-4 text-xs font-semibold lg:text-sm text-light bg-drk-accent border border-accent text-center p-2">${ticket.answer}</span>
      </div>`;

      ticketsContainer.insertAdjacentHTML("beforeend", ticketTemplate);
      const showAnswerBtn =
        ticketsOnDB > 0 && ticketsOnDB <= 1
          ? document.querySelector(".show-answer")
          : document.querySelectorAll(".show-answer");
      const hideAnswerBtn =
        ticketsOnDB > 0 && ticketsOnDB <= 1
          ? document.querySelector(".hide-answer")
          : document.querySelectorAll(".hide-answer");

      // If length is true means that is an array so it was built with the querySelectorAll
      if (showAnswerBtn.length) {
        showAnswerBtn.forEach((button) => {
          button.addEventListener("click", showAnswer);
        });
        hideAnswerBtn.forEach((button) => {
          button.addEventListener("click", hideAnswer);
        });
      } else {
        showAnswerBtn.addEventListener("click", showAnswer);
        hideAnswerBtn.addEventListener("click", hideAnswer);
      }
    });
  }
}

displayTicket();

function showAnswer(event) {
  const ticket = event.target.closest(".ticket");
  const showAnswerBtn = event.target;
  const hideAnswerBtn = ticket.querySelector(".hide-answer");
  const answer = ticket.querySelector(".answer");

  showAnswerBtn.classList.add("hidden");
  hideAnswerBtn.classList.remove("hidden");
  hideAnswerBtn.classList.add("inline-block");
  answer.classList.remove("hidden");
  answer.classList.add("inline-block");
}
function hideAnswer(event) {
  const ticket = event.target.closest(".ticket");
  const hideAnswerBtn = event.target;
  const showAnswerBtn = ticket.querySelector(".show-answer");
  const answer = ticket.querySelector(".answer");

  showAnswerBtn.classList.remove("hidden");
  showAnswerBtn.classList.add("inline-block");
  hideAnswerBtn.classList.remove("inline-block");
  hideAnswerBtn.classList.add("hidden");
  answer.classList.remove("inline-block");
  answer.classList.add("hidden");
}
