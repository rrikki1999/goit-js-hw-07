import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const listImages = document.querySelector(".gallery");
const imagesMarkup = createImagesMurkupList(galleryItems);
listImages.insertAdjacentHTML('beforeend', imagesMarkup);


function createImagesMurkupList(images){
    return images
    .map(({original, preview, description}) => {
        return `      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`;
    })
    .join("");
}


const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250 
});