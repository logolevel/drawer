const sentinel = document.querySelector('.sticky-sentinel');
const header = document.querySelector('.header');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      console.log('СТАЛ sticky');
      header.classList.add('is-stuck');
    } else {
      console.log('УЖЕ НЕ sticky');
      header.classList.remove('is-stuck');
    }
  },
  {
    root: null, // viewport
    threshold: 0,
    rootMargin: '-60px 0px 0px 0px' // смещение верхнего края viewport вниз на высоту header
  }
);

observer.observe(sentinel);

const toggleButton = document.querySelector('.drawer__toggle');
const headerHeight = 58;

toggleButton.addEventListener('click', () => {
  if (header.classList.contains('is-stuck')) {
    // Если header уже sticky → скроллим в начало страницы
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // Если drawer еще не sticky → скроллим sentinel под header (top: 60px)
    const scrollTargetY = window.scrollY + sentinel.getBoundingClientRect().top - headerHeight;

    window.scrollTo({
      top: scrollTargetY,
      behavior: 'smooth'
    });
  }
});


// Обработчик для изменения изображения при клике
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.content__image-image');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const defaultUrl = this.dataset.defaultUrl;
            const secondUrl = this.dataset.secondUrl;
            
            if (this.src === defaultUrl) {
                this.src = secondUrl;
            } else {
                this.src = defaultUrl;
            }
        });
    });
});

