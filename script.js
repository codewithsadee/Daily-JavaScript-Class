// var random = Math.floor(Math.random() * 5) + 1;
// var randomQoute = "";

// var qouteOne = '“Life is fragile and temporary. The faces of today quickly become the faces of the past. Sorrow, pain, and anger... it all fades-except love. Love is forever and there after, even when we\'ve fallen to our graves.”';
// var qouteTwo = '“Learn from the mistakes of others. You can\'t live long enough to make them all yourself.”';
// var qouteTree = '“The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.”'
// var qouteFour = '“Once you choose hope, anything’s possible.”';
// var qouteFive = '“Once you replace negative thoughts with positive ones, you\'ll start having positive results.”';

// if (random == 1) {
//   randomQoute = qouteOne;
// } else if (random == 2) {
//   randomQoute = qouteTwo;
// } else if (random == 3) {
//   randomQoute = qouteTree;
// } else if (random == 4) {
//   randomQoute = qouteFour;
// } else if (random == 5) {
//   randomQoute = qouteFive;
// }
// document.getElementsByClassName("qoute")[0].innerHTML = randomQoute;
// console.log(random)

var random = Math.floor(Math.random() * 5) + 1;
var randomQuote = '';

var quote = {
  1: '“Life is fragile and temporary. The faces of today quickly become the faces of the past. Sorrow, pain, and anger... it all fades-except love. Love is forever and there after, even when we\'ve fallen to our graves.”',
  2: '“Learn from the mistakes of others. You can\'t live long enough to make them all yourself.”',
  3: '“The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.”',
  4: '“Once you choose hope, anything’s possible.”',
  5: '“Once you replace negative thoughts with positive ones, you\'ll start having positive results.”'
}

randomQuote = quote[random]
document.getElementsByClassName('quote')[0].innerHTML = randomQuote;