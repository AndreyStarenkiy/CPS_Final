var swiperElement = document.querySelector('.prices__swiper');
var swiperWrapper = document.querySelector('.prices__swiper-wrapper');
var pricesSlide = document.querySelectorAll('.prices-swiper-slide');
var pricesOrderBtn = document.querySelectorAll('.prices-swiper-slide__order');
var moreLessButton = document.querySelector('.prices__expand-prices');
var buttonText = document.querySelector('.expand-prices__text');
var expandImage = document.querySelector('.expand-prices__expand-img');

moreLessButton.addEventListener('click', function () {
  if (!swiperElement.classList.contains('swiper--expanded')) {
    expandImage.classList.add('expand-prices__expand-img--upside');
    swiperElement.style.maxHeight = swiperElement.scrollHeight + 'px';
    swiperElement.classList.add('swiper--expanded');
    moreLessButton.classList.add('prices__expand-prices--expanded');
    buttonText.textContent = 'Скрыть';
  } else {
    expandImage.classList.remove('expand-prices__expand-img--upside');
    swiperElement.style.maxHeight = '200px';
    swiperElement.classList.remove('swiper--expanded');
    moreLessButton.classList.remove('prices__expand-prices--expanded');
    buttonText.textContent = 'Показать всё';
  }
});

const breakpoint = window.matchMedia('(max-width: 767.98px)');

if (breakpoint.matches) {
  console.log('Prices-swiper initialized!');
  swiperElement.classList.add('prices__swiper--initialized');
  swiperWrapper.classList.add('prices__swiper-wrapper--initialized');
  for (var i = 0; i < pricesSlide.length; i++) {
    pricesSlide[i].classList.add('prices-swiper-slide--initialized');
  }
  for (var i = 0; i < pricesOrderBtn.length; i++) {
    pricesOrderBtn[i].classList.add('prices-swiper-slide__order--swiper-on');
  }
  moreLessButton.classList.add('expand-prices--disabled');
}

/* personal swiper 

window.addEventListener('DOMContentLoaded', () => {
  const initializeSwiper = () => {
    console.log('pricey swiper');
    const breakpoint = window.matchMedia('(max-width: 767.98px)');

    if (breakpoint.matches) {
      console.log('Kapusta)');
      const swiper = new Swiper('.prices__swiper', {
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
      moreLessButton.classList.add('expand-brands--disabled');
    }
  };

  initializeSwiper();
});
*/
