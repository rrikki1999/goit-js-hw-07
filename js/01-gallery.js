import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listImages = document.querySelector(".gallery");
console.log(listImages);

const imagesMarkup = createImagesMurkupList(galleryItems);
listImages.insertAdjacentHTML('beforeend', imagesMarkup);
listImages.addEventListener('click', openImage);

function createImagesMurkupList(images){
    return images
    .map(({original, preview, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

function openImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
      return;
  }

  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${largeImageUrl}">
  `);

  instance.show();

  const img = instance.element().querySelector('img');
  img.addEventListener('click', () => {
      instance.close();
      document.removeEventListener('keydown', escapeHandler);
  });

  const escapeHandler = (e) => {
      if (e.key === 'Escape') {
          instance.close();
          document.removeEventListener('keydown', escapeHandler);
      }
  };

  document.addEventListener('keydown', escapeHandler);
}


