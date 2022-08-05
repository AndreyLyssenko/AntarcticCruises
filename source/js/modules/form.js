const form = document.querySelector('.booking__form-wrapper').querySelector('form');
const inputName = document.querySelector('#name');
const inputPhone = document.querySelector('#phone');
const inputEmail = document.querySelector('#email');
const formErrorMessage = form.querySelector('.booking__message');
const re = /^[\+]?[0-9]*$/;

inputPhone.addEventListener('focus', () => {
  formErrorMessage.classList.remove('booking__message--error');
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!re.test(inputPhone.value)) {
    formErrorMessage.classList.toggle('booking__message--error');
  } else {
    localStorage.clear();
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('phone', inputPhone.value);
    localStorage.setItem('email', inputEmail.value);
    evt.target.submit();
  }
});
