// this is event listener class //

var elem = document.createElement("h1");
var text = document.createTextNode("you've successfully clicked on the button");
elem.appendChild(text);

var Btn = document.querySelector(".btn");
Btn.addEventListener("click", function () {
  alert("hello i'm clicked");
  document.body.appendChild(elem);
  elem.classList.add("heading2");
});

