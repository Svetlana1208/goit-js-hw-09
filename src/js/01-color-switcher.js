const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};

let intervalId = null;

refs.btnStart.addEventListener('click', changeInterval);
refs.btnStop.addEventListener('click', stopChanges);

function changeInterval () {
    intervalId = setInterval(changeBackground, 1000);
    refs.btnStart.disabled = true;
}

function changeBackground() {
    refs.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function stopChanges() {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
}