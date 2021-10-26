let tickets;
const mainArea = document.querySelector(".main-area");

function saveTicketToStorage(event) {
  event.preventDefault();

  const ticket = event.target.closest(".ticket");
  const ticketName = ticket.querySelector(".ticket-name").innerHTML;
  const ticketPoints = ticket.querySelector(".ticket-points").innerHTML;

  const ticketExplanation = ticket.querySelector(
    ".ticket-explanation"
  ).innerHTML;

  const ticketInformation = {
    id: ticket.dataset.id,
    name: ticketName,
    points: ticketPoints,
    explanation: ticketExplanation,
  };

  localStorage.setItem("playgroundTicket", JSON.stringify(ticketInformation));

  window.location.href = "html/playground.html";
}

async function displayTicket() {
  const data = await fetch(
    "https://aqueous-gorge-79094.herokuapp.com/https://solve-it-db.herokuapp.com/main"
  );
  const res = await data.json();

  const ticketsContainer = document.querySelector(".tickets-container");
  const ticketsOnDB = res.empty !== 0 ? res.tickets : 0;

  ticketsContainer.innerHTML = "";

  if (ticketsOnDB === 0) {
    const noTickets = `<h1 class="font-titles text-2xl text-center mt-8">No tickets available!</h1>`;
    mainArea.insertAdjacentHTML("afterbegin", noTickets);
  } else {
    ticketsOnDB.forEach((ticket) => {
      const ticketTemplate = `
    <div data-id="${ticket._id}" class="ticket self-start w-full max-w-lg mx-auto border border-gray-200 px-4 py-2 bg-light text-xs sm:px-6 lg:px-4">
      <h2 class="font-titles text-lg lg:text-xl ticket-name">${ticket.name}</h2>
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
        <div class="flex items-center gap-x-4 lg:gap-2">
          <button class='accept'>
            <a href="#" class="uppercase inline-block no-underline py-2 px-4 text-light font-bold bg-accent mt-3 text-xs shadow-sm border-2 border-transparent hover:bg-drk-accent hover:border-accent sm:m-0">Accept</a>
          </button>
        </div>
      </div>
    </div>`;

      ticketsContainer.insertAdjacentHTML("beforeend", ticketTemplate);

      const acceptBtn =
        ticketsOnDB > 0 && ticketsOnDB <= 1
          ? document.querySelector(".accept")
          : document.querySelectorAll(".accept");
      const declineBtn = document.querySelector(".decline");

      // If length is true means that is an array so it was built with the querySelectorAll
      if (acceptBtn.length) {
        acceptBtn.forEach((button) => {
          button.addEventListener("click", saveTicketToStorage);
        });
      } else {
        acceptBtn.addEventListener("click", saveTicketToStorage);
      }
    });
  }
}

displayTicket();
