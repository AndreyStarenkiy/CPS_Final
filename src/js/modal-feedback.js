var feedback = document.querySelector('.modal-feedback');
var feedbackClose = document.querySelector('.modal-feedback__close-btn');
var cover = document.querySelector('.modal-cover');
var sidemenuChat = document.querySelector('.side-menu__chat');
var sidemenuCall = document.querySelector('.side-menu__call');
var modalCall = document.querySelector('.modal-call');
var modal = document.querySelector('.side-menu');
var modalWrapper = document.querySelector('.side-menu-wrapper');
var body = document.querySelector('.body');

const bodyScroll = require('body-scroll-toggle');
bodyScroll.disable();
bodyScroll.enable();

sidemenuChat.addEventListener('click', function () {
  feedback.classList.add('modal-feedback--modal-open');
  cover.classList.add('modal-cover--modal-open');
  modal.classList.remove('side-menu--open');
  modalWrapper.classList.remove('side-menu-wrapper--modal-open');
  body.classList.add('body--modal-open');
  //body.classList.add('body--modal-open');
  bodyScroll.enable();
  bodyScroll.disable();
});

cover.addEventListener('click', function () {
  feedback.classList.remove('modal-feedback--modal-open');
  cover.classList.remove('modal-cover--modal-open');
  modalWrapper.classList.remove('side-menu-wrapper--modal-open');
  //body.classList.remove('body--modal-open');
  bodyScroll.enable();
});

feedbackClose.addEventListener('click', function () {
  feedback.classList.remove('modal-feedback--modal-open');
  cover.classList.remove('modal-cover--modal-open');
  //body.classList.remove('body--modal-open');
  bodyScroll.enable();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    feedback.classList.remove('modal-feedback--modal-open');
    cover.classList.remove('modal-cover--modal-open');
    modalWrapper.classList.remove('side-menu-wrapper--modal-open');
    //body.classList.remove('body--modal-open');
    bodyScroll.enable();
  }
});
