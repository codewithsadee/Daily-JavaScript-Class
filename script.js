//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

var object1 = new Object();
object1.name = "Mohammad sadee";
object1.email = "mohammadsadee24@gmail.com";

var object2 = {
  name: "Mohammad sadee",
  email: "mohammadsadee24@gamil.com",
};
function objects(name, email) {
  this.name = name;
  this.email = email;
}
var object3 = new objects("Mohammad sadee", "mohammadsadee24@gamil.com");
