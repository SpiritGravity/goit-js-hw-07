import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const imageListRef = createimageListRef(galleryItems);
function createimageListRef(galleryItems) {
  return galleryItems
  .map(galleryItem => 
    `<div class="gallery__item"> 
        <a class="gallery__link" 
        href="${galleryItem.original}"> 
        <img 
        class="gallery__image" 
        src = "${galleryItem.preview}" 
        data-source="${galleryItem.original}" 
        alt = "${galleryItem.description}" 
        /> 
        </a> 
    </div>`)
    .join("");
}
galleryList.insertAdjacentHTML("beforeend", imageListRef);

new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionPosition: 'bottom',
    captionDelay: 250,
    enableKeyboard: true,
  });