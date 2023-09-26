window.onload = function () {
  //---vars to access html elements ---//
  let minutes = 0o0;
  let seconds = 0o0;
  let tens = 0o0;

  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMinutes = document.getElementById("minutes");

  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");

  let Interval;

  //---functions to start, stop, reset ---//
  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function () {
    clearInterval(Interval);
  }

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  }

  function startTimer() {
    tens++;

    if (tens <= 9) appendTens.innerHTML = "0" + tens;
    if (tens > 9) appendTens.innerHTML = tens;
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) appendSeconds.innerHTML = seconds;
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  }
};
