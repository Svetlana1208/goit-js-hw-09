import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  input: document.querySelector("#datetime-picker"),
  btnStart: document.querySelector("[data-start]"),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}

refs.btnStart.disabled = true;

let deltaTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0].getTime() < Date.now()) {
        refs.btnStart.disabled = true;
        alert("Please choose a date in the future");
      } else if(selectedDates[0].getTime() > Date.now()) {
        refs.btnStart.disabled = false;
        deltaTime = selectedDates[0].getTime() - Date.now();
      }
    },
  };

flatpickr(refs.input, options);

refs.btnStart.addEventListener('click', convertMs);

convertMs(deltaTime);

function convertMs() {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(deltaTime/ day);
  // Remaining hours
  const hours = Math.floor((deltaTime % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((deltaTime % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((deltaTime % day) % hour) % minute) / second);

  const timer = { days, hours, minutes, seconds };
  refs.days.textContent = timer.days;
  refs.hours.textContent = timer.hours;
  refs.minutes.textContent = timer.minutes;
  refs.seconds.textContent = timer.seconds;

  return { days, hours, minutes, seconds };
}
