import { createElement, createImageElement } from "./home";

function createDish(name, description, price, image) {
  const node = createElement('div', 'food');
  node.appendChild(createImageElement('food__img', image));
  const infoNode = createElement('div', 'food__info');
  const infoComponents = [
    createElement('div', 'food-name', name),
    createElement('div', 'food-description', description),
    createElement('div', 'food-price', `$${price}`),
  ];
  for (let info of infoComponents) {
    infoNode.appendChild(info);
  }
  node.appendChild(infoNode);
  return node;
}

const displayMenuPage = function () {
  const content = document.querySelector('.content');
  const menuTitle = createElement('h2', 'menu-title', 'Menu');
  const menuContent = createElement('div', 'menu-content');

  const startersTitle = createElement('h3', 'section-title', 'Starters');
  const startersSection = createElement('div', 'section');
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

  const entreesTitle = createElement('h3', 'section-title', 'Entrees');
  const entreesSection = createElement('div', 'section');
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


  const dessertsTitle = createElement('h3', 'section-title', 'Dessers');
  const dessertsSection = createElement('div', 'section');
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

export default displayMenuPage;