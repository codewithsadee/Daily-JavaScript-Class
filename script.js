//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

function DB(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

const user1 = new DB("tokee24", "tokeeabdullah5@gmail.com", "mdtokee892238");
const user2 = new DB(
  "codewithsadee",
  "mohammadsadee24@gmail.com",
  "mdsadee404305"
);

var userName = prompt("Username : ");
var passWord = prompt("Password : ");

if (
  (userName == user1.username || userName == user2.username) &&
  (passWord == user1.password || passWord == user2.password)
) {
  console.log("Welcome " + userName);
} else {
  console.log("! INFORMATION ERROR");
}
