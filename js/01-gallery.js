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

galleryList.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick (e) {
    e.preventDefault();
    if (e.target.nodeName != 'IMG') {
    return
    } 
    else {
    const instance = basicLightbox
        .create(`<img width="1400" height="900" 
                src= "${e.target.dataset.source}">`, 
    {
        onShow: (instance) => {       
            this.onInstanceClick = function (e) {
            if (e.code === "Escape") 
            { instance.close() }
            }
            document.addEventListener("keydown", this.onInstanceClick)
        },
        onClose: () => {
            document.removeEventListener("keydown", this.onInstanceClick)
        }
        })
        instance.show()
    }
}

// createListImage();
// function createListImage(item, parent) {
//     const { preview, original, description } = item;
//     const img = document.createElement('img');

//     img.classList.add('gallery__image');
//     img.dataset.source = original;
//     img.src = preview;
//     img.alt = description;

//     parent.appendChild(img);
// }