function addition(x, y) {
  var result = x + y;
  document.write("sum = " + result + "<br>");
}
function subtraction(x, y) {
  var result = x - y;
  document.write("sub = " + result + "<br>");
}
function multiplication(x, y) {
  var result = x * y;
  document.write("mul = " + result + "<br>");
}
function division(x, y) {
  var result = x / y;
  document.write("divition = " + result + "<br>");
}
function modulas(x, y) {
  return x % y;
}
addition(30, 100);
subtraction(20, 10);
multiplication(5, 5);
division(10, 5);
document.write("modulas = " + modulas(2, 1));
