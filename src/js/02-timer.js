import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector(`button[data-start]`);
const days = document.querySelector(`span[data-days]`);
const hours = document.querySelector(`span[data-hours]`);
const minutes = document.querySelector(`span[data-minutes]`);
const seconds = document.querySelector(`span[data-seconds]`);
startBtn.disabled = true;
let userDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      userDate = selectedDates[0].getTime();
    }
  },
};
const flatPickr = flatpickr('input#datetime-picker', options);

const countTime = () => {
  let time = setInterval(() => {
    startBtn.disabled = true;

    let ms = userDate - Date.now();
    let daysT = Math.floor(ms / 86400000);
    let hoursT = Math.floor((ms % 86400000) / 3600000);
    let minutesT = Math.floor(((ms % 86400000) % 3600000) / 60000);
    secondsT = Math.floor((((ms % 86400000) % 3600000) % 60000) / 1000);
    days.textContent = daysT > 10 ? daysT : addLeadingZero(daysT);
    hours.textContent = hoursT > 10 ? hoursT : addLeadingZero(hoursT);
    minutes.textContent = minutesT > 10 ? minutesT : addLeadingZero(minutesT);
    seconds.textContent = secondsT > 10 ? secondsT : addLeadingZero(secondsT);
    if (ms <= 0) {
      clearInterval(time);
      days.textContent = `00`;
      hours.textContent = `00`;
      minutes.textContent = `00`;
      seconds.textContent = `00`;
    }
  }, 1000);
};

startBtn.addEventListener(`click`, countTime);

function addLeadingZero(value) {
  return String.apply(value).padStart(2, `0`);
}
