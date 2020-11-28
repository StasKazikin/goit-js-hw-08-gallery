import galleryItems from "./gallery-items.js";


const galleryRef = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');

// создает галерею изображений
galleryRef.insertAdjacentHTML('afterbegin', 
  galleryItems.map((gallery, index) => 
    `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${gallery.original}"
      >
        <img
          class="gallery__image"
          src="${gallery.preview}"
          data-source="${gallery.original}"
          alt="${gallery.description}"
          data-index="${index}";
        />
      </a>
    </li>`).join(''));


// открывает модальное окно 
galleryRef.addEventListener('click', onImageClick);

function onImageClick(event) {

  event.preventDefault();
  const img = event.target;

  if (img.nodeName !== 'IMG') {
    return
  }
  lightbox.classList.add('is-open');
  lightboxImage.src = img.dataset.source;
  lightboxImage.alt = img.alt;
};

// закрывает модальное окно по нажатию кнопки
closeBtn.addEventListener('click', closeModal);

function closeModal() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '#';
  lightboxImage.alt = '';
};

// закрывает модальное окно по клику в оверлей
overlay.addEventListener('click', closeModal);



