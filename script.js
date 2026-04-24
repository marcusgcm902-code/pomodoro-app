let time = 1500;
let timer;
let running = false;
let sessions = 0;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("timer").textContent =
    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  if (running) return;
  running = true;

  timer = setInterval(() => {
    time--;
    updateDisplay();

    if (time <= 0) {
      clearInterval(timer);
      sessions++;
      document.getElementById("sessions").textContent = sessions;

      alert("Pause !");
      time = 300;
      running = false;
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  running = false;
  updateDisplay();
}

updateDisplay();