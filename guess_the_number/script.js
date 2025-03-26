"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

let secretNubmer = Math.trunc(Math.random() * 20) + 1;
console.log(secretNubmer);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // Не ввели число
    displayMessage("Вы не ввели число!");
    //Угадали число
  } else if (guess === secretNubmer) {
    displayMessage("Вы победили!");
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = guess;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //Когда не угадали
  } else if (guess != secretNubmer) {
    if (score > 1) {
      if (guess > secretNubmer) {
        displayMessage("Число больше");
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < secretNubmer) {
        displayMessage("Число меньше");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      displayMessage("Вы проиграли!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNubmer = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Начните угадывать");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "black";
});
