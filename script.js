"use strict";

let score = 20;
let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage(" ⛔️ No Number !");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage(" 🎉 Correct Number 🏆 ");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " Too High 📈" : " Too Low 📉");

      score--;
      displayScore(score);
    } else {
      displayMessage(" You Lost the Game 💥 ");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector(".guess").value = "";
  displayMessage(" Start guessing...");
  document.querySelector(".number").textContent = "?";

  displayScore(20);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
