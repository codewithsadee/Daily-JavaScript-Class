"use strict";
const ps = require("prompt-sync");
const prompt = ps();

var a = Number(prompt("Enter a number : "));
var c = prompt("Choose operation : ");

function addition(a, c, b) {
  if (a == 0 || a == NaN) {
    console.log("Final result = " + b);
  } else {
    if (c == "+") {
      b += a;
    } else if (c == "-") {
      b -= a;
    } else if (c == "*") {
      b *= a;
    } else if (c == "/") {
      b /= a;
    } else if (c == "%") {
      b %= a;
    }
    console.log(b);
    a = Number(prompt("Enter a number : "));
    c = prompt("Choose operation : ");
    addition(a, c, b);
  }
}

addition(a, c, 0);
