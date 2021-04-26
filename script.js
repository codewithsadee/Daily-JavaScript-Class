//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

var objectProparty = [];
var promptMessage = ["Name : ", "Age : ", "Country : ", "Language : "];

for (var i = 0; i < promptMessage.length; i++) {
  objectProparty.push(prompt(promptMessage[i]));
}

var person = {
  name: objectProparty[0],
  age: objectProparty[1],
  country: objectProparty[2],
  language: objectProparty[3],
};

console.log(person);
