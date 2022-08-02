const form = document.querySelector('.booking__form-wrapper').querySelector('form');
const inputName = document.querySelector('#name');
const inputPhone = document.querySelector('#phone');
const inputEmail = document.querySelector('#email');

form.addEventListener('submit', () => {
  localStorage.clear();
  localStorage.setItem('name', inputName.value);
  localStorage.setItem('phone', inputPhone.value);
  localStorage.setItem('email', inputEmail.value);
});
