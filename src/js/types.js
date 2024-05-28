var swiperElement = document.querySelector('.types-swiper');
var moreLessButton = document.querySelector('.types__show-types');
var buttonText = document.querySelector('.show-types__text');
var expandImage = document.querySelector('.show-types__expand-img');

moreLessButton.addEventListener('click', function () {
  if (!swiperElement.classList.contains('swiper--expanded')) {
    expandImage.classList.add('show-types__expand-img--upside');
    swiperElement.style.maxHeight = swiperElement.scrollHeight + 'px';
    swiperElement.classList.add('swiper--expanded');
    moreLessButton.classList.add('types__show-types--expanded');
    buttonText.textContent = 'Скрыть';
  } else {
    expandImage.classList.remove('show-types__expand-img--upside');
    swiperElement.style.maxHeight = '200px';
    swiperElement.classList.remove('swiper--expanded');
    moreLessButton.classList.remove('types__show-types--expanded');
    buttonText.textContent = 'Показать всё';
  }
});
