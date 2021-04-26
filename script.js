//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

var objectValue = [];
for (var x = 0; x < 5; x++) {
  if (x == 0) {
    objectValue.push(prompt("Enter your name : "));
  } else if (x == 1) {
    objectValue.push(prompt("Enter your age : "));
  } else if (x == 2) {
    objectValue.push(prompt("Enter your country : "));
  } else if (x == 3) {
    objectValue.push(prompt("Enter your language : "));
  }
}
var person = {
  name: objectValue[0],
  age: objectValue[1],
  country: objectValue[2],
  language: objectValue[3],
};
console.log(person);
console.log(person.language);
