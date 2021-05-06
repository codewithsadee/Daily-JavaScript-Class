//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

//* max Math object class <== //

var arr = [20, 30, 10, 33];

function max(num1, num2, num3, num4) {
  return Math.max(num1, num2, num3, num4);
}
console.log(max(arr[0], arr[1], arr[2], arr[3]));
