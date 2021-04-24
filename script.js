//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

//* declear an array <== //
var arr = [20, 50, 11, 500, 100];

//* This function checking requirement <== //
function pushArry(b) {
  if (b < 20) { //! if userInput less than 20, function re-called <== //
    console.log("don't input less then 20 ");
    pushArry(Number(prompt("Re-enter the number : ")));
  } else { //! pushing userInput in array <== //
    arr.push(b);
  }
}
pushArry(Number(prompt("Enter a Number : ")));
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
