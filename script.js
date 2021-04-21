//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

//* creating array for UI storing <==//
var array = [];
array.push(Number(prompt("Enter number : "))); //! array[0]
array.push(prompt("Enter any operator : ")); //! array[1]
array.push(Number(prompt("Enter another number : "))); //! array[2]

//* create condition for arithmetic opetor <==//
if (array[1] == "+") {
  array.push(array[0] + array[2]); //! array[3]
} else if (array[1] == "-") {
  array.push(array[0] - array[2]); //! array[3]
} else if (array[1] == "*") {
  array.push(array[0] * array[2]); //! array[3]
} else if (array[1] == "/") {
  array.push(array[0] / array[2]); //! array[3]
} else if (array[1] == "%") {
  array.push(array[0] % array[2]); //! array[3]
} else {
  console.log("! Operation Error !");
  console.log("Please make sure you choose any of this operator : + - * / %");
}

//* print result value <==//
console.log("result : " + array[0] + array[1] + array[2] + " = " + array[3]);
