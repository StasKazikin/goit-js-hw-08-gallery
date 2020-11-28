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

let activeIndex;

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
  activeIndex = Number(img.dataset.index);
  window.addEventListener('keydown', onKeyPress);
};

// закрывает модальное окно
function closeModal() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '#';
  lightboxImage.alt = '';
  window.removeEventListener('keydown', onKeyPress);
};

// закрывает модальное окно по нажатию кнопки
closeBtn.addEventListener('click', closeModal);

// закрывает модальное окно по клику в оверлей
overlay.addEventListener('click', closeModal);

// отслеживает нажатие клавиш
function onKeyPress(event) {
  if (event.code === 'Escape') { closeModal() };
  if (event.code === 'ArrowRight') { changePictureRight() };
  if (event.code === 'ArrowLeft') { changePictureLeft() };
};

// изменяет картинку вправо
function changePictureRight() {
  if (activeIndex < galleryItems.length - 1) {
    activeIndex += 1;
    lightboxImage.src = galleryItems[activeIndex].original;
    lightboxImage.alt = galleryItems[activeIndex].description;
  };
};

// изменяет картинку влево
function changePictureLeft() {
  if (activeIndex > 0) {
    activeIndex -= 1;
    lightboxImage.src = galleryItems[activeIndex].original;
    lightboxImage.alt = galleryItems[activeIndex].description;
  };
};
