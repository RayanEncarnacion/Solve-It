"use strict";

const form = document.querySelector("form");
const ticketName = document.querySelector(".name");
const ticketExplanation = document.querySelector(".explanation");
const ticketPoints = document.querySelector(".points");
const ticketUrgency = document.querySelector(".urgency");
const ticketType = document.querySelector(".type");
const submitBtn = document.querySelector(".submit");

async function createTicket(e) {
  e.preventDefault();

  const data = await fetch(
    "https://aqueous-gorge-79094.herokuapp.com/https://solve-it-db.herokuapp.com/main/ticket",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: ticketName.value,
        explanation: ticketExplanation.value,
        points: ticketPoints.value,
        urgency: ticketUrgency.value,
        type: ticketType.value,
      }),
    }
  );

  const created = `<p class='absolute text-sm text-green-500 font-bold text-center mt-2'>Ticket has been created.</p>`;

  submitBtn.insertAdjacentHTML("beforebegin", created);
}

form.addEventListener("submit", createTicket);
