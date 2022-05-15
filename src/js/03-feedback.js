import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

updateFormContent();

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();

  const inputValue = evt.target.email.value;
  const textareaValue = evt.target.message.value;

  if (inputValue === '' || textareaValue === '') {
    return console.log('Please fill in all the fields!');
  }

  evt.target.reset();

  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(formData);
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function updateFormContent() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);

  try {
    if (savedData) {
      const { email, message } = JSON.parse(savedData);

      formRef.elements.email.value = email || '';
      formRef.elements.message.value = message || '';
    }
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
