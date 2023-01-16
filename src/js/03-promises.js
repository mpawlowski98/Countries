let iDelay = document.querySelector(`input[name="delay"]`);
let iStep = document.querySelector(`input[name="step"]`);
let iAmount = document.querySelector(`input[name="amount"]`);
const submit = document.querySelector(`form`);
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const giveTarget = e => {
  e.preventDefault();
  let targetDelay = Number(iDelay.value);
  let targetStep = Number(iStep.value);
  let targetAmount = Number(iAmount.value);

  for (let i = 1; i <= targetAmount; i++) {
    createPromise(i, targetDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    targetDelay += targetStep;
  }
};

submit.addEventListener(`submit`, giveTarget);
