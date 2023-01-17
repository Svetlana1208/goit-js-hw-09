const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('.delay'),
  step: document.querySelector('.step'),
  amount: document.querySelector('.amount'),
  submit: document.querySelector('button'),
}

let delay;
let step;
let amount;
let position = 0;

refs.delay.addEventListener('input', (e) => {
  delay = Number(e.currentTarget.value);
})

refs.step.addEventListener('input', (e) => {
  step = Number(e.currentTarget.value);
})

refs.amount.addEventListener('input', (e) => {
  amount = Number(e.currentTarget.value);
})

refs.form.addEventListener('submit', zxc);

function zxc(event) {
  event.preventDefault();
  position += 1;

  const createPromise = (position, delay) => {

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
      .catch(error => console.log(error));


