const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories ', categoriesEl.length);

// Второй вариант. Как по мне плохое решение. Сильно зависит от вёрстки.
categoriesEl.forEach(function (category) {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Element: ', category.lastElementChild.children.length);
});
