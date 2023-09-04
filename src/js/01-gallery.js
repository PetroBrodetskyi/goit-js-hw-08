import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

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

galleryContainer.insertAdjacentHTML('beforeend', galleryElem)

galleryContainer.addEventListener('click', imgClick)

function imgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const modal = SimpleLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`
    );
    
    modal.show();

    function closeModal(evt) {
        if (evt.code === 'Escape') {
            modal.close();
            document.removeEventListener('keydown', closeModal);
        }
    }
    document.addEventListener('keydown', closeModal);
    
};
