//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

//* 1st way to declare object <==//
var object1 = new Object();
object1.name = "Mohammad sadee";
object1.email = "mohammadsadee24@gmail.com";
object1.print = function () {
  console.log(object1.name);
  console.log(object1.email);
};

//* 2nd way to declare object <==//
var object2 = {
  name: "Mohammad sadee",
  email: "mohammadsadee24@gamil.com",

  print: function () {
    console.log(object2.name);
    console.log(object2.email);
  },
};

//* Object Template : creating for multiObject handling <==//
function objects(name, email) {
  this.name = name;
  this.email = email;

  this.print = function () {
    console.log(this.name);
    console.log(this.email);
  };
}
var object3 = new objects("Mohammad sadee", "mohammadsadee24@gamil.com");

object1.print();
object2.print();
object3.print();
