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



export default displayHome;

export { createElement, createImageElement };
