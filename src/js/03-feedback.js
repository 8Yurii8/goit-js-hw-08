const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const feedbackForm = document.querySelector('.feedback-form');

let formState = {
  email: '',
  message: '',
};

function eventLis(event) {
  formState.email = emailInput.value;
  formState.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

var throttle = require('lodash.throttle');
const throttledEventLis = throttle(eventLis, 500);

feedbackForm.addEventListener('input', throttledEventLis);

function loadFormState() {
  const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedState) {
    formState = savedState;
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
}

loadFormState();

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(formState);
  if (emailInput.value === '' || messageInput.value === '') {
    localStorage.removeItem('feedback-form-state');
  }
  emailInput.value = '';
  messageInput.value = '';
});
