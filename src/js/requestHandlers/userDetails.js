async function getUserDetails() {
  const userName = document.querySelector(".name");
  const userPosition = document.querySelector(".position");
  const userPoints = document.querySelector(".points");
  const userSolved = document.querySelector(".solved");

  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user._id;

  const data = await fetch(
    `https://aqueous-gorge-79094.herokuapp.com/https://solve-it-db.herokuapp.com/main/user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userID }),
    }
  );

  const res = await data.json();
  userName.innerHTML = `Name: ${res.username}`;
  userPosition.innerHTML = `Position: ${res.position}`;
  userPoints.innerHTML = `Points: ${res.points}`;
  userSolved.innerHTML = `Solved: ${res.solved}`;
}

window.addEventListener("load", getUserDetails);
