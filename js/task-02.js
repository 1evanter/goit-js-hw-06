const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');


const itemsRef = ingredients.map(ingredient => {
  const itemOfListRef = document.createElement('li');
  itemOfListRef.textContent = ingredient;
  itemOfListRef.classList.add('item');

  return itemOfListRef;
});

listOfIngredients.append(...itemsRef);

console.log(listOfIngredients);


