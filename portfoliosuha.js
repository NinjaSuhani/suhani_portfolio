let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let laps = [];

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  laps = [];
  updateDisplay();
  lapsList.innerHTML = '';
}

function lap() {
  laps.push(formatTime(elapsedTime));
  const lapItem = document.createElement('li');
  lapItem.textContent = laps[laps.length - 1];
  lapsList.appendChild(lapItem);
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);