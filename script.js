//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

// var score = 100;

function gameObjcts() {
  var level1 = {
    userInput: parseInt(prompt("Guess a number 1 - 5 : ")),
    random: Math.floor(Math.random() * 5) + 1,
  };

  if (level1.userInput == level1.random) {
    console.log("You won!");
    console.log("=====>Level 2<=====");
    function gameLevelUp() {
      var level2 = {
        userInput: parseInt(prompt("Guess a number 1 - 10 : ")),
        random: Math.floor(Math.random() * 10) + 1,
      };
      if (level2.userInput == level2.random) {
        console.log("Congratulation You won!");
      } else {
        console.log("Oops you're unlucky");
      }
    }
    gameLevelUp();
  } else {
    console.log("You've lost random number was ==> " + level1.random);
    // score -= 20;
    if (score == 0) {
      console.log("Oops! you're unlucky");
    } else {
      gameObjcts();
    }
  }
}
gameObjcts();
