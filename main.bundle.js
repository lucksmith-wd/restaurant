/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js-modules/contact.js":
/*!***********************************!*\
  !*** ./src/js-modules/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/js-modules/home.js");


const content = document.querySelector('.content');

function createInfoLine(iconPath, textContent) {
  const infoLine = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'information');
  infoLine.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createImageElement)('information__icon', iconPath));
  infoLine.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'information__details', textContent));
  return infoLine;
}

function createFormItem(type, name, textContent) {

}



function displayContactPage() {

  const contactInfo = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'contact-info');
  const locationMap = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createImageElement)('map', '/src/images/location.png');
  const infoLines = [
    createInfoLine('/src/images/icons/location-icon.svg', '050000 Shijiazhuang, Wanda Plaza 3F / 542'),
    createInfoLine('/src/images/icons/email-icon.svg', 'wanda_westaurant@imaginary.com'),
    createInfoLine('/src/images/icons/phone-icon.svg', '0311-1234-8668'),
  ];
  contactInfo.appendChild(locationMap);
  infoLines.forEach((line) => contactInfo.appendChild(line));


  const emailFormItem = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', 'form-item');
  const emailLabel = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', null, 'Your email address');
  emailLabel.setAttribute('for', 'email');
  const emailField = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('input');
  emailField.setAttribute('type', 'email');
  emailField.setAttribute('name', 'email');
  emailField.setAttribute('id', 'email');
  emailFormItem.appendChild(emailLabel);
  emailFormItem.appendChild(emailField);

  const messageFormItem = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', 'form-item');
  const messageLabel = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', null, 'Your message');
  messageLabel.setAttribute('for', 'message');
  const messageField = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('textarea');
  messageField.setAttribute('name', 'message');
  messageField.setAttribute('id', 'message');
  messageField.setAttribute('cols', '30');
  messageField.setAttribute('rows', '10');
  messageFormItem.appendChild(messageLabel);
  messageFormItem.appendChild(messageField);

  const ul = document.createElement('ul');
  ul.appendChild(emailFormItem);
  ul.appendChild(messageFormItem);

  const contactForm = document.createElement('form');
  const button = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', null, 'Send');
  button.setAttribute('type', 'submit');

  contactForm.appendChild(ul);
  contactForm.appendChild(button);

  const contactContent = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'contact-content');
  contactContent.appendChild(contactInfo);
  contactContent.appendChild(contactForm);

  content.appendChild(contactContent);




}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContactPage);

/***/ }),

/***/ "./src/js-modules/home.js":
/*!********************************!*\
  !*** ./src/js-modules/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createImageElement": () => (/* binding */ createImageElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.querySelector('.content');

function appendTitle() {
  const title = createElement('div', 'title');
  const titleName = createElement('span', 'title__name', `Wanda's Westaurant`);
  const titleTagline = createElement('span', 'title__tagline', `The Best Imaginary Restaurant in Town`);
  title.appendChild(titleName);
  title.appendChild(titleTagline);
  content.appendChild(title);
}

function appendDescription() {
  const description = createElement('div', 'description');
  const descText = `Ever since opening in 2009, Wanda’s Westaurant has been the number 1 choice for people with an appetite for
  authentic western food in Shijiazhuang. Our food, prepared to the highest standard by our world renowned head
  chef, a selection of exquisite French wines and a cozy atmosphere guarantee a wonderful experience for our
  guests.`
  const paragraph = createElement('p', null, descText);
  description.appendChild(paragraph);
  content.appendChild(description);
}

function appendGallery() {
  const gallery = createElement('div', 'gallery');
  const images = [
    createImageElement('gallery__item', '/src/images/rest1.jpg'),
    createImageElement('gallery__item', '/src/images/rest2.jpg'),
    createImageElement('gallery__item', '/src/images/rest3.jpg'),
  ];
  for (let img of images) {
    gallery.appendChild(img);
  }
  content.appendChild(gallery);
}

function appendInfo() {
  const info = createElement('div', 'info');
  const table = createElement('table', 'info__opening');

  const rows = [
    createRow('th', ['Opening Hours']),
    createRow('td', ['Monday - Thursday', '10:30 - 23:00']),
    createRow('td', ['Friday - Sunday', '10:30 - 1:00']),
  ];

  for (let row of rows) {
    table.appendChild(row);
  }
  info.appendChild(table);
  content.appendChild(info);
}

function createRow(cellType, textContents) {
  const row = createElement('tr');
  const cells = []
  for (let textContent of textContents) {
    const cell = createElement(cellType, null, textContent)
    if (cellType === 'th') {
      cell.setAttribute('colspan', '2');
    }
    cells.push(cell);
  }
  for (let cell of cells) {
    row.appendChild(cell);
  }
  return row;
}



function createImageElement(className, src) {
  const img = createElement('img', className);
  img.src = src;
  return img;
}

function createElement(elementName, className, textContent) {
  const element = document.createElement(elementName);
  if (className) {
    element.classList.add(className);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

const displayHome = function () {
  appendTitle();
  appendDescription();
  appendGallery();
  appendInfo();
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);




/***/ }),

/***/ "./src/js-modules/menu.js":
/*!********************************!*\
  !*** ./src/js-modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/js-modules/home.js");


function createDish(name, description, price, image) {
  const node = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'food');
  node.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createImageElement)('food__img', image));
  const infoNode = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'food__info');
  const infoComponents = [
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'food-name', name),
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'food-description', description),
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'food-price', `$${price}`),
  ];
  for (let info of infoComponents) {
    infoNode.appendChild(info);
  }
  node.appendChild(infoNode);
  return node;
}

const displayMenuPage = function () {
  const content = document.querySelector('.content');
  const menuTitle = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'menu-title', 'Menu');
  const menuContent = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'menu-content');

  const startersTitle = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'section-title', 'Starters');
  const startersSection = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'section');
  const starters = [
    createDish(
      'Caesar Salad',
      'Made with free range chicken, organic salad, fresh tomatoes and the likes.',
      4.99,
      '/src/images/starters/caesar-salad.jpg'),
    createDish(
      'Shrimp Cocktail',
      'Containing all kinds of delicious-melicious fresh sea stuff.',
      7.99,
      '/src/images/starters/shrimp-cocktail.jpg'),
    createDish(
      'French Onion Soup',
      'Piping hot, made with fresh onions from our own farm, fresh mozarella cheese and lots of love.',
      3.99,
      '/src/images/starters/onion-soup.jpg'),
  ];
  starters.forEach((starter) => startersSection.appendChild(starter));

  menuContent.appendChild(startersTitle);
  menuContent.appendChild(startersSection);

  const entreesTitle = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'section-title', 'Entrees');
  const entreesSection = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'section');
  const entrees = [
    createDish(
      'Filet Mignon',
      'The finest cut of beef sourced locally.',
      14.99,
      '/src/images/entrees/filet-mignon.jpg'),
    createDish(
      'Ribeye Steak',
      'The other finest cut of beef sourced locally.',
      16.99,
      '/src/images/entrees/ribeye-steak.jpg'),
    createDish(
      'House Burger',
      'Succulent burger patty with fresh lettuce, tomatoes, cheese with house dressing in hand-made crispy buns',
      10.99,
      '/src/images/entrees/house-burger.jpg'),
  ];
  entrees.forEach((entree) => entreesSection.appendChild(entree));

  menuContent.appendChild(entreesTitle);
  menuContent.appendChild(entreesSection);


  const dessertsTitle = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3', 'section-title', 'Dessers');
  const dessertsSection = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'section');
  const desserts = [
    createDish(
      'Cheesecake',
      'Moist, creamy filling on a rich, Graham cracker crust topped with raspberry sauce.',
      5.99,
      '/src/images/desserts/cheesecake.jpg'),
    createDish(
      'Brownies',
      'Simply delicious.',
      4.99,
      '/src/images/desserts/brownies.jpg'),
    createDish(
      'Waffles',
      'Soft, hot waffles topped with craft custard and fresh raspberries.',
      4.99,
      '/src/images/desserts/waffles.jpg'),
  ];
  desserts.forEach((dessert) => dessertsSection.appendChild(dessert));

  // for (let dessert of desserts) {
  //   dessersSection.appendChild(dessert);
  // };

  menuContent.appendChild(dessertsTitle);
  menuContent.appendChild(dessertsSection);


  content.appendChild(menuTitle);
  content.appendChild(menuContent);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenuPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-modules/home */ "./src/js-modules/home.js");
/* harmony import */ var _js_modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-modules/menu */ "./src/js-modules/menu.js");
/* harmony import */ var _js_modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-modules/contact */ "./src/js-modules/contact.js");




const navItems = [...document.querySelectorAll('.nav__item')];
const content = document.querySelector('.content');

(0,_js_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

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

navItems[0].addEventListener('click', () => displayPage(navItems[0], _js_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"]));
navItems[1].addEventListener('click', () => displayPage(navItems[1], _js_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"]));
navItems[2].addEventListener('click', () => displayPage(navItems[2], _js_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"]));



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0k7QUFDTTs7QUFFdEQ7QUFDQTs7QUFFQSw0REFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFFQUFxRSx3REFBVztBQUNoRixxRUFBcUUsd0RBQWU7QUFDcEYscUVBQXFFLDJEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvanMtbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvanMtbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvanMtbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlSW1hZ2VFbGVtZW50IH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlSW5mb0xpbmUoaWNvblBhdGgsIHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGluZm9MaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2luZm9ybWF0aW9uJyk7XG4gIGluZm9MaW5lLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlRWxlbWVudCgnaW5mb3JtYXRpb25fX2ljb24nLCBpY29uUGF0aCkpO1xuICBpbmZvTGluZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCAnaW5mb3JtYXRpb25fX2RldGFpbHMnLCB0ZXh0Q29udGVudCkpO1xuICByZXR1cm4gaW5mb0xpbmU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1JdGVtKHR5cGUsIG5hbWUsIHRleHRDb250ZW50KSB7XG5cbn1cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlDb250YWN0UGFnZSgpIHtcblxuICBjb25zdCBjb250YWN0SW5mbyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250YWN0LWluZm8nKTtcbiAgY29uc3QgbG9jYXRpb25NYXAgPSBjcmVhdGVJbWFnZUVsZW1lbnQoJ21hcCcsICcvc3JjL2ltYWdlcy9sb2NhdGlvbi5wbmcnKTtcbiAgY29uc3QgaW5mb0xpbmVzID0gW1xuICAgIGNyZWF0ZUluZm9MaW5lKCcvc3JjL2ltYWdlcy9pY29ucy9sb2NhdGlvbi1pY29uLnN2ZycsICcwNTAwMDAgU2hpamlhemh1YW5nLCBXYW5kYSBQbGF6YSAzRiAvIDU0MicpLFxuICAgIGNyZWF0ZUluZm9MaW5lKCcvc3JjL2ltYWdlcy9pY29ucy9lbWFpbC1pY29uLnN2ZycsICd3YW5kYV93ZXN0YXVyYW50QGltYWdpbmFyeS5jb20nKSxcbiAgICBjcmVhdGVJbmZvTGluZSgnL3NyYy9pbWFnZXMvaWNvbnMvcGhvbmUtaWNvbi5zdmcnLCAnMDMxMS0xMjM0LTg2NjgnKSxcbiAgXTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQobG9jYXRpb25NYXApO1xuICBpbmZvTGluZXMuZm9yRWFjaCgobGluZSkgPT4gY29udGFjdEluZm8uYXBwZW5kQ2hpbGQobGluZSkpO1xuXG5cbiAgY29uc3QgZW1haWxGb3JtSXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ2Zvcm0taXRlbScpO1xuICBjb25zdCBlbWFpbExhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBudWxsLCAnWW91ciBlbWFpbCBhZGRyZXNzJyk7XG4gIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgY29uc3QgZW1haWxGaWVsZCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVtYWlsRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gIGVtYWlsRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG4gIGVtYWlsRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbCcpO1xuICBlbWFpbEZvcm1JdGVtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICBlbWFpbEZvcm1JdGVtLmFwcGVuZENoaWxkKGVtYWlsRmllbGQpO1xuXG4gIGNvbnN0IG1lc3NhZ2VGb3JtSXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgJ2Zvcm0taXRlbScpO1xuICBjb25zdCBtZXNzYWdlTGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIG51bGwsICdZb3VyIG1lc3NhZ2UnKTtcbiAgbWVzc2FnZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lc3NhZ2UnKTtcbiAgY29uc3QgbWVzc2FnZUZpZWxkID0gY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbWVzc2FnZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJyk7XG4gIG1lc3NhZ2VGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcbiAgbWVzc2FnZUZpZWxkLnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xuICBtZXNzYWdlRmllbGQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJyk7XG4gIG1lc3NhZ2VGb3JtSXRlbS5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xuICBtZXNzYWdlRm9ybUl0ZW0uYXBwZW5kQ2hpbGQobWVzc2FnZUZpZWxkKTtcblxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmFwcGVuZENoaWxkKGVtYWlsRm9ybUl0ZW0pO1xuICB1bC5hcHBlbmRDaGlsZChtZXNzYWdlRm9ybUl0ZW0pO1xuXG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBudWxsLCAnU2VuZCcpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHVsKTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBjb25zdCBjb250YWN0Q29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250YWN0LWNvbnRlbnQnKTtcbiAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudCk7XG5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRhY3RQYWdlOyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5mdW5jdGlvbiBhcHBlbmRUaXRsZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAndGl0bGUnKTtcbiAgY29uc3QgdGl0bGVOYW1lID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICd0aXRsZV9fbmFtZScsIGBXYW5kYSdzIFdlc3RhdXJhbnRgKTtcbiAgY29uc3QgdGl0bGVUYWdsaW5lID0gY3JlYXRlRWxlbWVudCgnc3BhbicsICd0aXRsZV9fdGFnbGluZScsIGBUaGUgQmVzdCBJbWFnaW5hcnkgUmVzdGF1cmFudCBpbiBUb3duYCk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlTmFtZSk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGFnbGluZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmREZXNjcmlwdGlvbigpIHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgZGVzY1RleHQgPSBgRXZlciBzaW5jZSBvcGVuaW5nIGluIDIwMDksIFdhbmRh4oCZcyBXZXN0YXVyYW50IGhhcyBiZWVuIHRoZSBudW1iZXIgMSBjaG9pY2UgZm9yIHBlb3BsZSB3aXRoIGFuIGFwcGV0aXRlIGZvclxuICBhdXRoZW50aWMgd2VzdGVybiBmb29kIGluIFNoaWppYXpodWFuZy4gT3VyIGZvb2QsIHByZXBhcmVkIHRvIHRoZSBoaWdoZXN0IHN0YW5kYXJkIGJ5IG91ciB3b3JsZCByZW5vd25lZCBoZWFkXG4gIGNoZWYsIGEgc2VsZWN0aW9uIG9mIGV4cXVpc2l0ZSBGcmVuY2ggd2luZXMgYW5kIGEgY296eSBhdG1vc3BoZXJlIGd1YXJhbnRlZSBhIHdvbmRlcmZ1bCBleHBlcmllbmNlIGZvciBvdXJcbiAgZ3Vlc3RzLmBcbiAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlRWxlbWVudCgncCcsIG51bGwsIGRlc2NUZXh0KTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEdhbGxlcnkoKSB7XG4gIGNvbnN0IGdhbGxlcnkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZ2FsbGVyeScpO1xuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgY3JlYXRlSW1hZ2VFbGVtZW50KCdnYWxsZXJ5X19pdGVtJywgJy9zcmMvaW1hZ2VzL3Jlc3QxLmpwZycpLFxuICAgIGNyZWF0ZUltYWdlRWxlbWVudCgnZ2FsbGVyeV9faXRlbScsICcvc3JjL2ltYWdlcy9yZXN0Mi5qcGcnKSxcbiAgICBjcmVhdGVJbWFnZUVsZW1lbnQoJ2dhbGxlcnlfX2l0ZW0nLCAnL3NyYy9pbWFnZXMvcmVzdDMuanBnJyksXG4gIF07XG4gIGZvciAobGV0IGltZyBvZiBpbWFnZXMpIHtcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZyk7XG4gIH1cbiAgY29udGVudC5hcHBlbmRDaGlsZChnYWxsZXJ5KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kSW5mbygpIHtcbiAgY29uc3QgaW5mbyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdpbmZvJyk7XG4gIGNvbnN0IHRhYmxlID0gY3JlYXRlRWxlbWVudCgndGFibGUnLCAnaW5mb19fb3BlbmluZycpO1xuXG4gIGNvbnN0IHJvd3MgPSBbXG4gICAgY3JlYXRlUm93KCd0aCcsIFsnT3BlbmluZyBIb3VycyddKSxcbiAgICBjcmVhdGVSb3coJ3RkJywgWydNb25kYXkgLSBUaHVyc2RheScsICcxMDozMCAtIDIzOjAwJ10pLFxuICAgIGNyZWF0ZVJvdygndGQnLCBbJ0ZyaWRheSAtIFN1bmRheScsICcxMDozMCAtIDE6MDAnXSksXG4gIF07XG5cbiAgZm9yIChsZXQgcm93IG9mIHJvd3MpIHtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIGluZm8uYXBwZW5kQ2hpbGQodGFibGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3coY2VsbFR5cGUsIHRleHRDb250ZW50cykge1xuICBjb25zdCByb3cgPSBjcmVhdGVFbGVtZW50KCd0cicpO1xuICBjb25zdCBjZWxscyA9IFtdXG4gIGZvciAobGV0IHRleHRDb250ZW50IG9mIHRleHRDb250ZW50cykge1xuICAgIGNvbnN0IGNlbGwgPSBjcmVhdGVFbGVtZW50KGNlbGxUeXBlLCBudWxsLCB0ZXh0Q29udGVudClcbiAgICBpZiAoY2VsbFR5cGUgPT09ICd0aCcpIHtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcbiAgICB9XG4gICAgY2VsbHMucHVzaChjZWxsKTtcbiAgfVxuICBmb3IgKGxldCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG4gIHJldHVybiByb3c7XG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZUVsZW1lbnQoY2xhc3NOYW1lLCBzcmMpIHtcbiAgY29uc3QgaW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgY2xhc3NOYW1lKTtcbiAgaW1nLnNyYyA9IHNyYztcbiAgcmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSwgY2xhc3NOYW1lLCB0ZXh0Q29udGVudCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGRpc3BsYXlIb21lID0gZnVuY3Rpb24gKCkge1xuICBhcHBlbmRUaXRsZSgpO1xuICBhcHBlbmREZXNjcmlwdGlvbigpO1xuICBhcHBlbmRHYWxsZXJ5KCk7XG4gIGFwcGVuZEluZm8oKTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lO1xuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjcmVhdGVJbWFnZUVsZW1lbnQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUltYWdlRWxlbWVudCB9IGZyb20gXCIuL2hvbWVcIjtcblxuZnVuY3Rpb24gY3JlYXRlRGlzaChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlKSB7XG4gIGNvbnN0IG5vZGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZm9vZCcpO1xuICBub2RlLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlRWxlbWVudCgnZm9vZF9faW1nJywgaW1hZ2UpKTtcbiAgY29uc3QgaW5mb05vZGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZm9vZF9faW5mbycpO1xuICBjb25zdCBpbmZvQ29tcG9uZW50cyA9IFtcbiAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZm9vZC1uYW1lJywgbmFtZSksXG4gICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2Zvb2QtZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbiksXG4gICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2Zvb2QtcHJpY2UnLCBgJCR7cHJpY2V9YCksXG4gIF07XG4gIGZvciAobGV0IGluZm8gb2YgaW5mb0NvbXBvbmVudHMpIHtcbiAgICBpbmZvTm9kZS5hcHBlbmRDaGlsZChpbmZvKTtcbiAgfVxuICBub2RlLmFwcGVuZENoaWxkKGluZm9Ob2RlKTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmNvbnN0IGRpc3BsYXlNZW51UGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IG1lbnVUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgJ21lbnUtdGl0bGUnLCAnTWVudScpO1xuICBjb25zdCBtZW51Q29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51LWNvbnRlbnQnKTtcblxuICBjb25zdCBzdGFydGVyc1RpdGxlID0gY3JlYXRlRWxlbWVudCgnaDMnLCAnc2VjdGlvbi10aXRsZScsICdTdGFydGVycycpO1xuICBjb25zdCBzdGFydGVyc1NlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2VjdGlvbicpO1xuICBjb25zdCBzdGFydGVycyA9IFtcbiAgICBjcmVhdGVEaXNoKFxuICAgICAgJ0NhZXNhciBTYWxhZCcsXG4gICAgICAnTWFkZSB3aXRoIGZyZWUgcmFuZ2UgY2hpY2tlbiwgb3JnYW5pYyBzYWxhZCwgZnJlc2ggdG9tYXRvZXMgYW5kIHRoZSBsaWtlcy4nLFxuICAgICAgNC45OSxcbiAgICAgICcvc3JjL2ltYWdlcy9zdGFydGVycy9jYWVzYXItc2FsYWQuanBnJyksXG4gICAgY3JlYXRlRGlzaChcbiAgICAgICdTaHJpbXAgQ29ja3RhaWwnLFxuICAgICAgJ0NvbnRhaW5pbmcgYWxsIGtpbmRzIG9mIGRlbGljaW91cy1tZWxpY2lvdXMgZnJlc2ggc2VhIHN0dWZmLicsXG4gICAgICA3Ljk5LFxuICAgICAgJy9zcmMvaW1hZ2VzL3N0YXJ0ZXJzL3NocmltcC1jb2NrdGFpbC5qcGcnKSxcbiAgICBjcmVhdGVEaXNoKFxuICAgICAgJ0ZyZW5jaCBPbmlvbiBTb3VwJyxcbiAgICAgICdQaXBpbmcgaG90LCBtYWRlIHdpdGggZnJlc2ggb25pb25zIGZyb20gb3VyIG93biBmYXJtLCBmcmVzaCBtb3phcmVsbGEgY2hlZXNlIGFuZCBsb3RzIG9mIGxvdmUuJyxcbiAgICAgIDMuOTksXG4gICAgICAnL3NyYy9pbWFnZXMvc3RhcnRlcnMvb25pb24tc291cC5qcGcnKSxcbiAgXTtcbiAgc3RhcnRlcnMuZm9yRWFjaCgoc3RhcnRlcikgPT4gc3RhcnRlcnNTZWN0aW9uLmFwcGVuZENoaWxkKHN0YXJ0ZXIpKTtcblxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChzdGFydGVyc1RpdGxlKTtcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoc3RhcnRlcnNTZWN0aW9uKTtcblxuICBjb25zdCBlbnRyZWVzVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMycsICdzZWN0aW9uLXRpdGxlJywgJ0VudHJlZXMnKTtcbiAgY29uc3QgZW50cmVlc1NlY3Rpb24gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnc2VjdGlvbicpO1xuICBjb25zdCBlbnRyZWVzID0gW1xuICAgIGNyZWF0ZURpc2goXG4gICAgICAnRmlsZXQgTWlnbm9uJyxcbiAgICAgICdUaGUgZmluZXN0IGN1dCBvZiBiZWVmIHNvdXJjZWQgbG9jYWxseS4nLFxuICAgICAgMTQuOTksXG4gICAgICAnL3NyYy9pbWFnZXMvZW50cmVlcy9maWxldC1taWdub24uanBnJyksXG4gICAgY3JlYXRlRGlzaChcbiAgICAgICdSaWJleWUgU3RlYWsnLFxuICAgICAgJ1RoZSBvdGhlciBmaW5lc3QgY3V0IG9mIGJlZWYgc291cmNlZCBsb2NhbGx5LicsXG4gICAgICAxNi45OSxcbiAgICAgICcvc3JjL2ltYWdlcy9lbnRyZWVzL3JpYmV5ZS1zdGVhay5qcGcnKSxcbiAgICBjcmVhdGVEaXNoKFxuICAgICAgJ0hvdXNlIEJ1cmdlcicsXG4gICAgICAnU3VjY3VsZW50IGJ1cmdlciBwYXR0eSB3aXRoIGZyZXNoIGxldHR1Y2UsIHRvbWF0b2VzLCBjaGVlc2Ugd2l0aCBob3VzZSBkcmVzc2luZyBpbiBoYW5kLW1hZGUgY3Jpc3B5IGJ1bnMnLFxuICAgICAgMTAuOTksXG4gICAgICAnL3NyYy9pbWFnZXMvZW50cmVlcy9ob3VzZS1idXJnZXIuanBnJyksXG4gIF07XG4gIGVudHJlZXMuZm9yRWFjaCgoZW50cmVlKSA9PiBlbnRyZWVzU2VjdGlvbi5hcHBlbmRDaGlsZChlbnRyZWUpKTtcblxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChlbnRyZWVzVGl0bGUpO1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChlbnRyZWVzU2VjdGlvbik7XG5cblxuICBjb25zdCBkZXNzZXJ0c1RpdGxlID0gY3JlYXRlRWxlbWVudCgnaDMnLCAnc2VjdGlvbi10aXRsZScsICdEZXNzZXJzJyk7XG4gIGNvbnN0IGRlc3NlcnRzU2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzZWN0aW9uJyk7XG4gIGNvbnN0IGRlc3NlcnRzID0gW1xuICAgIGNyZWF0ZURpc2goXG4gICAgICAnQ2hlZXNlY2FrZScsXG4gICAgICAnTW9pc3QsIGNyZWFteSBmaWxsaW5nIG9uIGEgcmljaCwgR3JhaGFtIGNyYWNrZXIgY3J1c3QgdG9wcGVkIHdpdGggcmFzcGJlcnJ5IHNhdWNlLicsXG4gICAgICA1Ljk5LFxuICAgICAgJy9zcmMvaW1hZ2VzL2Rlc3NlcnRzL2NoZWVzZWNha2UuanBnJyksXG4gICAgY3JlYXRlRGlzaChcbiAgICAgICdCcm93bmllcycsXG4gICAgICAnU2ltcGx5IGRlbGljaW91cy4nLFxuICAgICAgNC45OSxcbiAgICAgICcvc3JjL2ltYWdlcy9kZXNzZXJ0cy9icm93bmllcy5qcGcnKSxcbiAgICBjcmVhdGVEaXNoKFxuICAgICAgJ1dhZmZsZXMnLFxuICAgICAgJ1NvZnQsIGhvdCB3YWZmbGVzIHRvcHBlZCB3aXRoIGNyYWZ0IGN1c3RhcmQgYW5kIGZyZXNoIHJhc3BiZXJyaWVzLicsXG4gICAgICA0Ljk5LFxuICAgICAgJy9zcmMvaW1hZ2VzL2Rlc3NlcnRzL3dhZmZsZXMuanBnJyksXG4gIF07XG4gIGRlc3NlcnRzLmZvckVhY2goKGRlc3NlcnQpID0+IGRlc3NlcnRzU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNzZXJ0KSk7XG5cbiAgLy8gZm9yIChsZXQgZGVzc2VydCBvZiBkZXNzZXJ0cykge1xuICAvLyAgIGRlc3NlcnNTZWN0aW9uLmFwcGVuZENoaWxkKGRlc3NlcnQpO1xuICAvLyB9O1xuXG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnRzVGl0bGUpO1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0c1NlY3Rpb24pO1xuXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGlzcGxheUhvbWUgZnJvbSAnLi9qcy1tb2R1bGVzL2hvbWUnO1xuaW1wb3J0IGRpc3BsYXlNZW51UGFnZSBmcm9tICcuL2pzLW1vZHVsZXMvbWVudSc7XG5pbXBvcnQgZGlzcGxheUNvbnRhY3RQYWdlIGZyb20gJy4vanMtbW9kdWxlcy9jb250YWN0JztcblxuY29uc3QgbmF2SXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9faXRlbScpXTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5kaXNwbGF5SG9tZSgpO1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbigpIHtcbiAgbGV0IGNoaWxkID0gY29udGVudC5sYXN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBjaGlsZCA9IGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZShhY3RpdmVJdGVtLCBkaXNwbGF5Rm4pIHtcbiAgZm9yIChsZXQgbmF2SXRlbSBvZiBuYXZJdGVtcykge1xuICAgIGlmIChuYXZJdGVtID09PSBhY3RpdmVJdGVtKSB7XG4gICAgICBpZiAoIW5hdkl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICB9XG4gICAgICByZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgZGlzcGxheUZuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59XG5cbm5hdkl0ZW1zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheVBhZ2UobmF2SXRlbXNbMF0sIGRpc3BsYXlIb21lKSk7XG5uYXZJdGVtc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlQYWdlKG5hdkl0ZW1zWzFdLCBkaXNwbGF5TWVudVBhZ2UpKTtcbm5hdkl0ZW1zWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheVBhZ2UobmF2SXRlbXNbMl0sIGRpc3BsYXlDb250YWN0UGFnZSkpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==