const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

function creatListItems(arr) {
    const listEl = document.querySelector('#ingredients');
    let listItemEl = '';
    arr.forEach(element => {
        listItemEl = document.createElement('li');
        listItemEl.textContent = element;
        listItemEl.classList.add('item');
        listEl.append(listItemEl);
    });
}

creatListItems(ingredients);
