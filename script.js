//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

var country1 = {
  name: "Bangladesh",
  currency: "Taka",
  population: "161,376,708",
  callingCode: "+880",
};

var country2 = {
  name: "India",
  currency: "Rupee",
  population: "1,161,376,708",
  callingCode: "+99",
};


console.log("");
console.log("Name : " + country1.name);
console.log("Currency : " + country1.currency);
console.log("Population : " + country1.population);
console.log("Calling code : " + country1.callingCode);
console.log("");
console.log("Name : " + country2.name);
console.log("Currency : " + country2.currency);
console.log("Population : " + country2.population);
console.log("Calling code : " + country2.callingCode);