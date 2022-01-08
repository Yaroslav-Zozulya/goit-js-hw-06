const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories ', categoriesEl.length);

categoriesEl.forEach(function (categoryEl) {
    console.log('Category: ', categoryEl.querySelector('h2').textContent);
    console.log('Element: ', categoryEl.querySelector('ul').children.length);
});

//Второй вариант. Как по мне плохое решение. Сильно зависит от вёрстки.
// categoriesEl.forEach(function (category) {
//     console.log('Category: ', category.firstElementChild.textContent);
//     console.log('Element: ', category.lastElementChild.children.length);
// });
