var secondsHand = document.querySelector("#seconds");
var minutesHand = document.querySelector("#minutes");
var hoursHand = document.querySelector("#hours");


function getSecondsSinceStartOfDay() {
    return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}

function secondsAngle(time) {
    let sec = time % 60;
    return (360 * time / 60 + 180) % 360;
}

function minutesAngle(time) {
    let min = (time / 60) % 60;
    return (360 * min / 60 + 180) % 360;
}

function hoursAngle(time) {
    let hr = (time / 3600) % 12;
    return (360 * hr / 12 + 180) % 360;
}

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  console.log(time);
  secondsHand.style.transform = `rotate(${secondsAngle(time)}deg)`;
  minutesHand.style.transform = `rotate(${minutesAngle(time)}deg)`;
  hoursHand.style.transform = `rotate(${hoursAngle(time)}deg)`;
}, 1000);


