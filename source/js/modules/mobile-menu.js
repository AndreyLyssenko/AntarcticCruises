const navMain = document.querySelector('.navigation__list');
const navToggle = document.querySelector('.navigation__button');
const navWrapper = document.querySelector('.navigation');
const navLogo = document.querySelector('.navigation__logo-link');
const greetings = document.querySelector('.greetings');

navMain.classList.remove('navigation__list--no-js');
navMain.classList.add('navigation__list--closed');
navToggle.classList.remove('navigation__button--no-js');
navToggle.classList.add('navigation__button--closed');
greetings.classList.remove('greetings--no-js');
navLogo.classList.remove('navigation__logo-link--no-js');
navWrapper.classList.remove('navigation--no-js');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('navigation__button--opened');
  navToggle.classList.toggle('navigation__button--closed');
  navLogo.classList.toggle('navigation__logo-link--opened');
  navMain.classList.toggle('navigation__list--opened');
  if (navToggle.classList.contains('navigation__button--opened')) {
    navToggle.querySelector('span').textContent = 'Закрыть меню навигации';
  } else {
    navToggle.querySelector('span').textContent = 'Открыть меню навигации';
  }
});
