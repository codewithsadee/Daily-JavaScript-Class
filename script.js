//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

//* adding function constractor <== //
function Constructor(a, b, x) {
  this.a = a;
  this.b = b;
  this.x = x;

  this.print = function () {
    console.log(this.a);
    console.log(this.b);
    console.log(this.x);
  };
}

//* array for userInput <== //
var arr = [];

//* This loop for multiple userInput <== //
for (var i = 0; i < 3; i++) {
  arr.push(Number(prompt("Enter a number : ")));
}
arr.sort(function (a, b) {
  return a - b;
});

//* Calling constructor object (function) store in a variable <==//
var value = new Constructor(arr[0], arr[1], arr[2]);

value.print();
