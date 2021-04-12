function factorial(y) {  // 4! = 4 * (4-1) * (4-2) * (4-3)
  if (y === 0 || y === 1) {
    return 1;
  } else {
    return y * factorial(y - 1);
  }
}

var ans = factorial(4);
document.write("answer = " + ans);
