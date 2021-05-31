//* creating new element from javaScript

var Name = "It's Mohammad Sadee";
var newHeding = document.createElement("h1");   //* creating heading one element
var text = document.createTextNode(Name);   //* creating text for heading one
newHeding.appendChild(text); //* adding text into heading one
document.getElementsByClassName("my-div")[0].appendChild(newHeding);   //* adding heading element into div;


var intro = "Hello! everyOne, I'm from javaScript";
var newDiv = document.createElement("div");  //* creating a div element
var newHeading1 = document.createElement("h1");  //* creating h1 element for div
var text = document.createTextNode(intro);   //* creating text for heading
newHeading1.appendChild(text);   //* adding text into heading
newDiv.appendChild(newHeading1)  //* adding heading into div
document.body.appendChild(newDiv);   //* adding div into body