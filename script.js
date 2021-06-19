// eventListener with multiple element //
for (var x = 0; x < 3; x++) {
  document.querySelectorAll(".btn")[x].addEventListener("click", function () {
    var num = this.innerHTML;
    document.querySelector("h2").innerHTML = num + "Clicked";
  });
}
