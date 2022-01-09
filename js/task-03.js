const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryEl = document.querySelector('.gallery');
const galleryImagesEl = images.map(image => {
    const galleryImageEl = document.createElement('img');
    galleryImageEl.classList.add('galleryItem');
    galleryImageEl.src = image.url;
    galleryImageEl.alt = image.alt;
    return galleryImageEl;
});

galleryEl.append(...galleryImagesEl);

// const galleryEl = document.querySelector('.gallery');

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('nav-item');

// const navItemLinkEl = document.createElement('a');
// navItemLinkEl.classList.add('nav-item__link');
// navItemLinkEl.href = '#';
// navItemLinkEl.textContent = 'четвёртый слайд';

// navItemEl.appendChild(navItemLinkEl);

// galleryEl.appendChild(navItemEl);
// galleryEl.insertBefore(navItemEl, galleryEl.lastElementChild);

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
// ];

// const option = colorPickerOptions[3];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;
// console.log(buttonEl);

// document.body.append(buttonEl);

// const galleryEl = document.querySelector('.gallery');

// const slides = colorPickerOptions.map(slide => {
//     const slideEl = document.createElement('button');
//     slideEl.classList.add('slide');
//     slideEl.type = 'button';
//     slideEl.textContent = slide.label;
//     slideEl.style.backgroundColor = slide.color;
//     slideEl.style.width = '100px';
//     slideEl.style.height = '50px';
//     return slideEl;
// });

// galleryEl.append(...slides);
