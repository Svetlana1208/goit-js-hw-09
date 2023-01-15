import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  input: document.querySelector("#datetime-picker"),
  btnStart: document.querySelector("[data-start]"),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.btnStart.disabled = true;

let selectedDate = null;
let timeLeft = {};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0].getTime() < Date.now()) {
        refs.btnStart.disabled = true;
        alert("Please choose a date in the future");
      } else {
        refs.btnStart.disabled = false;
        selectedDate = selectedDates[0].getTime();
      }
    },
  };

  const timer = {
    intervalId: null,
    start() {
      const startTime = Date.now();
  
      this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedDate - currentTime;
      timeLeft = convertMs(deltaTime);
      if(timeLeft.days === "00" && timeLeft.hours === "00" && timeLeft.minutes === "00" && timeLeft.seconds === "00") {
        clearInterval(this.intervalId);
      }
      refs.days.textContent = timeLeft.days;
      refs.hours.textContent = timeLeft.hours;
      refs.minutes.textContent = timeLeft.minutes;
      refs.seconds.textContent = timeLeft.seconds;
    }, 1000);
  },
  };

refs.btnStart.addEventListener('click', () => {
  timer.start();
});
  
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr(refs.input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms/ day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
