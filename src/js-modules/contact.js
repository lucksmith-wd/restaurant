import { createElement, createImageElement } from "./home";

const content = document.querySelector('.content');

function createInfoLine(iconPath, textContent) {
  const infoLine = createElement('div', 'information');
  infoLine.appendChild(createImageElement('information__icon', iconPath));
  infoLine.appendChild(createElement('div', 'information__details', textContent));
  return infoLine;
}

function createFormItem(type, name, textContent) {

}



function displayContactPage() {

  const contactInfo = createElement('div', 'contact-info');
  const locationMap = createImageElement('map', '/src/images/location.png');
  const infoLines = [
    createInfoLine('/src/images/icons/location-icon.svg', '050000 Shijiazhuang, Wanda Plaza 3F / 542'),
    createInfoLine('/src/images/icons/email-icon.svg', 'wanda_westaurant@imaginary.com'),
    createInfoLine('/src/images/icons/phone-icon.svg', '0311-1234-8668'),
  ];
  contactInfo.appendChild(locationMap);
  infoLines.forEach((line) => contactInfo.appendChild(line));


  const emailFormItem = createElement('li', 'form-item');
  const emailLabel = createElement('label', null, 'Your email address');
  emailLabel.setAttribute('for', 'email');
  const emailField = createElement('input');
  emailField.setAttribute('type', 'email');
  emailField.setAttribute('name', 'email');
  emailField.setAttribute('id', 'email');
  emailFormItem.appendChild(emailLabel);
  emailFormItem.appendChild(emailField);

  const messageFormItem = createElement('li', 'form-item');
  const messageLabel = createElement('label', null, 'Your message');
  messageLabel.setAttribute('for', 'message');
  const messageField = createElement('textarea');
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
  const button = createElement('button', null, 'Send');
  button.setAttribute('type', 'submit');

  contactForm.appendChild(ul);
  contactForm.appendChild(button);

  const contactContent = createElement('div', 'contact-content');
  contactContent.appendChild(contactInfo);
  contactContent.appendChild(contactForm);

  content.appendChild(contactContent);




}

export default displayContactPage;