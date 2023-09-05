import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryElem = galleryItems
    .map(({ preview, description, original }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`)
.join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryElem);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});