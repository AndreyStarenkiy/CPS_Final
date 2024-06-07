var swiperElement = document.querySelector('.swiper');
var swiperWrapper = document.querySelector('.swiper-wrapper');
var moreLessButton = document.querySelector('.brands__expand-brands');
var buttonText = document.querySelector('.expand-brands__text');
var expandImage = document.querySelector('.expand-brands__expand-img');

moreLessButton.addEventListener('click', function () {
  if (!swiperElement.classList.contains('swiper--expanded')) {
    expandImage.classList.add('expand-brands__expand-img--upside');
    swiperElement.style.maxHeight = swiperElement.scrollHeight + 'px';
    swiperElement.classList.add('swiper--expanded');
    moreLessButton.classList.add('brands__expand-brands--expanded');
    buttonText.textContent = 'Скрыть';
  } else {
    expandImage.classList.remove('expand-brands__expand-img--upside');
    swiperElement.style.maxHeight = '200px';
    swiperElement.classList.remove('swiper--expanded');
    moreLessButton.classList.remove('brands__expand-brands--expanded');
    buttonText.textContent = 'Показать всё';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const initializeSwiper = () => {
    console.log('initializeSwiper WoRKS');
    const breakpoint = window.matchMedia('(max-width: 767.98px)');

    if (breakpoint.matches) {
      console.log('Kapusta)');
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 16,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });

      swiperWrapper.classList.add('swiper-wrapper--initialized');
      console.log('SWIPER INITIALIZED');
      moreLessButton.classList.add('expand-brands--disabled');
    }
  };

  initializeSwiper();
});
