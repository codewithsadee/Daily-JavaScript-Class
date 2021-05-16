var clock = new Date();
var hours = clock.getHours();
var minutes = clock.getMinutes();
var seconds = clock.getSeconds();
var amPm = hours > 12 ? "pm" : "am";

if (hours == 13) {
  hours = 1;
} else if (hours == 14) {
  hours = 2
} else if (hours == 15) {
  hours = 3
} else if (hours == 16) {
  hours = 4
} else if (hours == 17) {
  hours = 5
} else if (hours == 18) {
  hours = 6
} else if (hours == 19) {
  hours = 7
} else if (hours == 20) {
  hours = 8
} else if (hours == 21) {
  hours = 9
} else if (hours == 22) {
  hours = 10
} else if (hours == 23) {
  hours = 11
} else if (hours == 24) {
  hours = 12
}

document.write('<div class="clock">' + hours + "<span s> : </span>" + minutes + '<sub> ' + amPm + '</sub></div>');

var body = document.querySelector('.clock');
var darkThemeBtn = document.querySelector('.dark-theme-btn');

darkThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark')
  
})