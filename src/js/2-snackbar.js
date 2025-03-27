import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value, 10);
  const state = form.elements.state.value;

  if (isNaN(delay) || delay <= 0) {
    iziToast.error({
      title: "Error",
      message: "Please enter a valid delay in milliseconds.",
    });
    return;
  }

  createPromise(delay, state)
    .then((result) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${result}ms`,
      });
    })
    .catch((error) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${error}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
const fieldset = document.querySelector('.field');
const radioButtons = document.querySelectorAll('.field input[type="radio"]');

radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      fieldset.style.borderColor = '#000000'; 
    }
  });
});