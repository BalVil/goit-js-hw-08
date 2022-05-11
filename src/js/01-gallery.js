import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ original, preview, description }) => {
      return `<div class="gallery">
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</div>`;
    })
    .join('');
}

// add a caption display ('options' from SimpleLightbox)
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
