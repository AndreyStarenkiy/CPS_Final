var swiperElement = document.querySelector('.swiper');
var swiperWrapper = document.querySelector('.swiper-wrapper');
var moreLessButton = document.querySelector('.brands__read-more');
var buttonText = document.querySelector('.read-more__text');
var expandImage = document.querySelector('.read-more__expand-img');

moreLessButton.addEventListener('click', function () {
  if (!swiperElement.classList.contains('swiper--expanded')) {
    expandImage.classList.add('read-more__expand-img--upside');
    swiperElement.style.maxHeight = swiperElement.scrollHeight + 'px';
    swiperElement.classList.add('swiper--expanded');
    moreLessButton.classList.add('brands__read-more--expanded');
    buttonText.textContent = 'Скрыть';
  } else {
    expandImage.classList.remove('read-more__expand-img--upside');
    swiperElement.style.maxHeight = '200px';
    swiperElement.classList.remove('swiper--expanded');
    moreLessButton.classList.remove('brands__read-more--expanded');
    buttonText.textContent = 'Показать всё';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const initializeSwiper = () => {
    const breakpoint = window.matchMedia('(max-width: 767.98px)');

    if (breakpoint.matches) {
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

      swiper.on('slideChange', function () {
        console.log('*** mySwiper.activeIndex', swiper.activeIndex);
      });

      swiperWrapper.classList.add('swiper-wrapper--initialized');
    }
  };

  initializeSwiper();
});
