const display = document.querySelector(".stopwatch-display");
const buttons = document.querySelectorAll(".stopwatch-control button");
const container = document.querySelector(".container-stopwatch");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

// Додати 0 попереду, якщо число <10
const formatTime = (time) => (time < 10 ? `0${time}` : time);

// Оновлення виводу на екран
const updateDisplay = () => {
  display.innerHTML = `
    <span>${formatTime(hours)}</span>
    <span>:</span>
    <span>${formatTime(minutes)}</span>
    <span>:</span>
    <span>${formatTime(seconds)}</span>`;
};

// Запустити секундомір
const startTimer = () => {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
  container.classList.remove("red", "silver");
  container.classList.add("green");
};

// Зупинити секундомір
const stopTimer = () => {
  clearInterval(interval);
  interval = null;
  container.classList.remove("green", "silver");
  container.classList.add("red");
};

// Обнулити секундомір
const resetTimer = () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  container.classList.remove("green", "red");
  container.classList.add("silver");
};

// Події кнопок
buttons[0].addEventListener("click", startTimer);
buttons[1].addEventListener("click", stopTimer);
buttons[2].addEventListener("click", resetTimer);

updateDisplay();
