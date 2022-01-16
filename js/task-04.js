const counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector(
    '#counter [data-action="decrement"]',
);
const incrementBtn = document.querySelector(
    '#counter [data-action="increment"]',
);

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

function onIncrementBtnClick() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

//Второй вариант
// const allCounterBtn = document.querySelectorAll('#counter button');
// const makeEventsForBtn = allCounterBtn =>
//     allCounterBtn.forEach(element => {
//         if (element.dataset.action === 'decrement') {
//             element.addEventListener('click', () => {
//                 counterValue.textContent = Number(counterValue.textContent) - 1;
//             });
//         } else if (element.dataset.action === 'increment') {
//             element.addEventListener('click', () => {
//                 counterValue.textContent = Number(counterValue.textContent) + 1;
//             });
//         }
//     });

// makeEventsForBtn();

// decrementBtn.addEventListener('click', () => {
//     counterValue.textContent = parseInt(counterValue.textContent) - 1;
// });

// const incrementBtn = document.querySelector('.increment');
// incrementBtn.addEventListener('click', () => {
//     counterValue.textContent = parseInt(counterValue.textContent) + 1;
// });

// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//     console.log('Click');
// });

// addListenerBtn.addEventListener('click', () => {
//     console.log('Add listener to targetBtn');

//     targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', () => {
//     console.log('Remove listener from, targetBtn');

//     targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick() {
//     console.log('click');
// }
