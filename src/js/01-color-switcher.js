const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);
let background = document.querySelector(`body`);
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
stopBtn.disabled = true;

let start = () => {
  let backgroundColor = () => {
    background.style.backgroundColor = `${getRandomHexColor()}`;
  };
  timerId = setInterval(backgroundColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

let stop = () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener(`click`, start);
stopBtn.addEventListener(`click`, stop);
