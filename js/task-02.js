const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients ');

const ingredientsItemsEl = ingredients.map(ingredient => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.classList.add('item');
    ingredientItemEl.textContent = ingredient;

    return ingredientItemEl;
});

ingredientsListEl.append(...ingredientsItemsEl);

//Была вот такая лабуда. Потом понял что я 100 дёргаю DOM :)
// function creatListItems(arr) {
//     const listEl = document.querySelector('#ingredients');
//     const ingredientListEl = [];
//     arr.forEach(element => {
//         const listItemEl = document.createElement('li');
//         listItemEl.textContent = element;
//         listItemEl.classList.add('item');
//         ingredientListEl.push(listItemEl);
//     });
//     listEl.append(...ingredientListEl);
// }

// creatListItems(ingredients);
