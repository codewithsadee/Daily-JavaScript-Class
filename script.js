//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

var winRate = 0;
var loss = 0;
for (var x = 1; x < 6; x++) {
  var userGuess = parseInt(prompt("Guess the lucky number 1 to 5 : "));
  var random = Math.floor(Math.random() * 5) + 1;

  if (random == userGuess) {
    winRate++;
    console.log("Exilent! your lucky number is right");
  } else {
    loss++;
    console.log("Your lucky number is wrong!");
  }
}
if (winRate > loss) {
  console.log();
  console.log("WON!");
} else {
  console.log();
  console.log("Failed try again!");
}
