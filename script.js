//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

//* creating array with some numbers
var someNumbers = [
  50,
  1,
  3,
  4,
  7,
  9,
  15,
  13,
  16,
  11,
  20,
  28,
  24,
  23,
  21,
  37,
  39,
  31,
  34,
  49,
  45,
  42,
  46,
];

//* filtering array numbers with while loop
var i = 0;
while (i < someNumbers.length) {
  if (someNumbers[i] <= 50 && someNumbers[i] >= 30) {
    i++;
  } else {
    someNumbers.splice(i, 1);
  }
}

//* sorting array numbers
someNumbers.sort(function (a, b) {
  return a - b;
});

//* printing array numbers
console.log(someNumbers);
