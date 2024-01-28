import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const textInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const updateLocalStorage = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: textInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}, 500);

emailInput.addEventListener('input', updateLocalStorage);
textInput.addEventListener('input', updateLocalStorage);

const loadFormDataFromLocalStorage = () => {
  const storedFormData = localStorage.getItem(storageKey);
  if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    ({ email: emailInput.value, message: textInput.value } = formData);
  }
};

window.addEventListener('load', loadFormDataFromLocalStorage);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  console.log({ email: emailInput.value, message: textInput.value });
  form.reset();
});