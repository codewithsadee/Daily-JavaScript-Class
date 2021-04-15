function array() {
  var numbers = [10, 27, 30, 40, 59, 60, 73, 80, 90];
  numbers.push(99);
  var sum = 0;
  for (var x = 0; x < 10; x++) {
    if (numbers[x] % 2 == 0) {
      sum += numbers[x];
      document.write(
        'This is Even numbers <span class="even">' + numbers[x] + "</span><br>"
      );
    } else {
      document.write(
        'This is Odd numbers <span class="odd">' + numbers[x] + "</span><br>"
      );
    }
  }
  document.write('All Even equal to = <span class="even">' + sum + "</span>");
}

array();
