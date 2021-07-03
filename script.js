var clock = {
    hours: document.querySelector(".hours"),
    minutes: document.querySelector(".minutes"),
    seconds: document.querySelector(".seconds"),
    amPm: document.querySelector(".am-pm")
};

function time() {
    setTimeout(function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        clock.hours.innerText = hours;
        clock.minutes.innerText = minutes;
        clock.seconds.innerText = seconds;       
        time();
    },1000);
}
time();
