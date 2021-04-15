function array() {
  var numbers = [0, 27, 30, 40, 59, 60, 73, 80, 90];
  numbers.push(99);
  for (var x = 1; x < 10; x++) {
    if (numbers[x] % 2 == 0) {
      numbers[0] += numbers[x];
      document.write(
        'This is Even numbers <span class="even">' + numbers[x] + "</span><br>"
      );
    } else {
      document.write(
        'This is Odd numbers <span class="odd">' + numbers[x] + "</span><br>"
      );
    }
  }
  document.write('All Even equal to = <span class="even">' + numbers[0] + "</span>");
}

array();
