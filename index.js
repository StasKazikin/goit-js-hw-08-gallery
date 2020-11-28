import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector('.js-gallery');

galleryRef.insertAdjacentHTML('afterbegin',
    galleryItems.map(gallery => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${gallery.original}"
  >
    <img
      class="gallery__image"
      src="${gallery.preview}"
      data-source="${gallery.original}"
      alt="${gallery.description}"
    />
  </a>
</li>`).join(''));
