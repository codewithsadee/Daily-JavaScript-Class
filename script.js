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
    console.log();
  } else {
    loss++;
    console.log("Your lucky number is wrong!");
    console.log("Lucky Number was --> " + random);
    console.log();
  }
}
if (winRate > loss) {
  console.log();
  console.log("<===> WON! <===>");
  console.log();
  console.log("Right :> " + winRate + " Times");
  console.log("Wrong :> " + loss + " Times");
} else {
  console.log();
  console.log("<===> Lose! <===>");
  console.log();
  console.log("Right :> " + winRate + " Times");
  console.log("Wrong :> " + loss + " Times");
  console.log("Better luck next time!");
}
