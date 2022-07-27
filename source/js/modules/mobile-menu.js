const navMain = document.querySelector('.navigation__list');
const navToggle = document.querySelector('.navigation__button');
const navWrapper = document.querySelector('.navigation');
const navLogo = document.querySelector('.navigation__logo-link');
const greetings = document.querySelector('.greetings');
const navLinks = document.querySelectorAll('.navigation__link');

navMain.classList.remove('navigation__list--no-js');
navMain.classList.add('navigation__list--closed');
navToggle.classList.remove('navigation__button--no-js');
navToggle.classList.add('navigation__button--closed');
greetings.classList.remove('greetings--no-js');
navLogo.classList.remove('navigation__logo-link--no-js');
navWrapper.classList.remove('navigation--no-js');

const onNavToggleClick = () => {
  let svgLink = 'opened';

  document.querySelector('.navigation__wrapper').classList.toggle('navigation__wrapper--opened');

  navToggle.classList.toggle('navigation__button--closed');
  navToggle.classList.toggle('navigation__button--opened');
  navLogo.classList.toggle('navigation__logo-link--opened');
  navMain.classList.toggle('navigation__list--closed');
  navMain.classList.toggle('navigation__list--opened');

  if (navToggle.classList.contains('navigation__button--opened')) {
    navToggle.querySelector('span').textContent = 'Закрыть меню навигации';
  } else {
    svgLink = 'closed';
    navToggle.querySelector('span').textContent = 'Открыть меню навигации';
  }
  navToggle.querySelector('use').setAttribute('xlink:href', `img/sprite.svg#navigation-icon-${svgLink}`);
};

navToggle.addEventListener('click', () => {
  onNavToggleClick();
});

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    onNavToggleClick();
  });
});
