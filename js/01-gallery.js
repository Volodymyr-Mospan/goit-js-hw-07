import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let instance = '';

const galleryRef = document.querySelector('div.gallery');

galleryRef.innerHTML = createGalleryMarkup(galleryItems);
galleryRef.addEventListener('click', onPictureClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join('');
}

function onPictureClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  console.log(event.target.dataset.source);

  instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280">`, {
    onShow: () => {
      window.addEventListener('keydown', onEscPress);
    },
    onClose: () => {
      window.removeEventListener('keydown', onEscPress);
    },
  });

  instance.show();
}

function onEscPress(event) {
  console.log(event.code);

  if (event.code === 'Escape') {
    instance.close();
  }
}
