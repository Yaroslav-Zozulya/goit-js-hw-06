// const images = [
//     {
//         url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'White and Black Long Fur Cat',
//     },
//     {
//         url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//         url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Group of Horses Running',
//     },
// ];
// const galleryEl = document.querySelector('.gallery');

// const makeGallerySlides = images => {
//     return images.map(image => {
//         const galleryImageEl = document.createElement('img');
//         galleryImageEl.classList.add('gallery-image');
//         galleryImageEl.src = image.url;
//         galleryImageEl.alt = image.alt;

//         const galleryItemEl = document.createElement('li');
//         galleryItemEl.classList.add('galleryItem');
//         galleryItemEl.append(galleryImageEl);

//         return galleryItemEl;
//     });
// };
// const test = makeGallerySlides(images);
// galleryEl.append(...test);

const products = [
    {
        name: 'VDS Server',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nostrum sint. Odit, ea voluptates delectus vero dignissimos tenetur eum possimus.',
        price: 2000,
        available: true,
        onSale: true,
    },
    {
        name: 'VDS Cloud',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nostrum sint. Odit, ea voluptates delectus vero dignissimos tenetur eum possimus.',
        price: 1500,
        available: true,
        onSale: true,
    },
    {
        name: 'Dedicated Server',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nostrum sint. Odit, ea voluptates delectus vero dignissimos tenetur eum possimus.',
        price: 3000,
        available: true,
        onSale: true,
    },
    {
        name: 'Hosting',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nostrum sint. Odit, ea voluptates delectus vero dignissimos tenetur eum possimus.',
        price: 500,
        available: true,
        onSale: true,
    },
];

const servers = document.querySelector('.gallery');

const createServersListEl = ({ name, description, price }) => {
    const articleEl = document.createElement('li');
    const titleEl = document.createElement('h2');
    titleEl.classList.add('product__name');
    titleEl.textContent = name;

    const descriptionEl = document.createElement('p');
    descriptionEl.classList.add('product__descr');
    descriptionEl.textContent = description;

    const priceEl = document.createElement('p');
    priceEl.classList.add('product__price');
    priceEl.textContent = `Цена: ${price}$`;

    articleEl.append(titleEl, descriptionEl, priceEl);
    return articleEl;
};

const productsList = products.map(createServersListEl);
servers.append(...productsList);
