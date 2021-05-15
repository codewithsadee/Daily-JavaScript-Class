var clock = new Date();
var hours = clock.getHours().toString();
var minutes = clock.getMinutes().toString();
var seconds = clock.getSeconds().toString();

document.write('<div class="clock">' + hours + "<span m> : </span>" + minutes + "<span s> : </span>" + seconds + '</div>');