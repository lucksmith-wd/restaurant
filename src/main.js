import displayHome from './js-modules/home';
import displayMenuPage from './js-modules/menu';
import displayContactPage from './js-modules/contact';

import './images/location.png';
import './images/rest1.jpg';
import './images/rest2.jpg';
import './images/rest3.jpg';
import './images/desserts/brownies.jpg';
import './images/desserts/cheesecake.jpg';
import './images/desserts/waffles.jpg';
import './images/entrees/filet-mignon.jpg';
import './images/entrees/house-burger.jpg';
import './images/entrees/ribeye-steak.jpg';
import './images/starters/caesar-salad.jpg';
import './images/starters/onion-soup.jpg';
import './images/starters/shrimp-cocktail.jpg';
import './images/icons/email-icon.svg';
import './images/icons/location-icon.svg';
import './images/icons/phone-icon.svg';

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


