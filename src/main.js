import displayHome from './js-modules/home';
import displayMenuPage from './js-modules/menu';
import displayContactPage from './js-modules/contact';

const navItems = [...document.querySelectorAll('.nav__item')];
const content = document.querySelector('.content');

displayHome();

function removeAllChildren() {
  let child = content.lastElementChild;
  while (child) {
    content.removeChild(child);
    child = content.lastElementChild;
  }
}

function displayPage(activeItem, displayFn) {
  for (let navItem of navItems) {
    if (navItem === activeItem) {
      if (!navItem.classList.contains('active')) {
        navItem.classList.add('active')
      }
      removeAllChildren();
      displayFn();
    } else {
      navItem.classList.remove('active');
    }
  }
}

navItems[0].addEventListener('click', () => displayPage(navItems[0], displayHome));
navItems[1].addEventListener('click', () => displayPage(navItems[1], displayMenuPage));
navItems[2].addEventListener('click', () => displayPage(navItems[2], displayContactPage));


