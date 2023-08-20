import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
setGalleryHtml('beforeend', galleryElCreateMarkup(galleryItems));

function galleryElCreateMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
            return `<li class="gallery_item">
        <a class="gallery_link" href="${original}">
        <img class="gallery__image"
             src="${preview}"
             data-source="${original}"  
             alt="${description}" />
             </a>
             </li>`; 
        })
        .join (''); 
}

function setGalleryHtml(position, gallery) {
    galleryContainer.insertAdjacentHTML(position, gallery);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: "bottom",
  download: "Download",

});  