const inputRef = document.querySelector('#controls').firstElementChild;
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', onCreateBtnRefClick);
destroyBtnRef.addEventListener('click', onDestroyBtnClick);

function onCreateBtnRefClick() {
    const amount = inputRef.value;
    amount ? createBoxes(amount) : alert('Введите число');
}

// Очищаем #boxes и сбрасываем значения width, height до стандартных
function onDestroyBtnClick() {
    width = 30;
    height = 30;
    boxesRef.innerHTML = '';
}

// Формируем шаблонную строку для добавления в документ
let width = 30;
let height = 30;

function createBoxes(amount) {
    const arr = [];
    for (let i = 1; i <= amount; i += 1) {
        const color = getRandomHexColor();
        arr.push(
            `<div class="box" style="width: ${width}px; height: ${height}px; background-color: ${color}"></div>`,
        );
        width += 10;
        height += 10;
    }
    boxesRef.insertAdjacentHTML('beforeend', arr.join(''));
}

// Функция рандомного HEX цвета
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
