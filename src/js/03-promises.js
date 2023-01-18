const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('.delay'),
  step: document.querySelector('.step'),
  amount: document.querySelector('.amount'),}

let delay;
let step;
let amount;
let position = 0;
let intervalId;
let createPromise;

refs.delay.addEventListener('input', (e) => {
  delay = Number(e.currentTarget.value);
})

refs.step.addEventListener('input', (e) => {
  step = Number(e.currentTarget.value);
})

refs.amount.addEventListener('input', (e) => {
  amount = Number(e.currentTarget.value);
})

refs.form.addEventListener('submit', generator);

function generator(event) {
  event.preventDefault();
  position += 1;

  createPromise = (position, delay) => {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => { 
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);

      });
    };
  
      createPromise(position, delay)
      .then(result => console.log(result))
      .catch(error => console.log(error))
      .finally(() => {
        delay += step;
        if(position < amount) {
        generator(event)}
      })
};
