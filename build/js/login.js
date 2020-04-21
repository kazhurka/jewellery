'use strict';
(function () {
  var ESCAPE = 'Escape';
  var MAINBUTTON = '0';
  var modalLogin = document.querySelector('.login');
  var addButton = document.querySelector('.main-header__user-link--login');
  var closeButton = modalLogin.querySelector('.login__close button');
  var modalWrap = document.querySelector('.modal-wrap');
  var body = document.querySelector('body');

  var closeModal = function () {
    console.log("ss")
    modalWrap.classList.remove('modal-wrap--active');
    modalLogin.classList.remove('login--active');
    body.classList.remove('body--modal')
  }
  var removeModalHandlers = function () {
    document.removeEventListener('keydown', modalKeyCloseHandler);
    closeButton.removeEventListener('click', modalMouseCloseHandler);
    document.removeEventListener('click', modalOverClickHandler);
  }
  var modalKeyCloseHandler = function (evtEsc) {
    if (evtEsc.key === ESCAPE) {
      closeModal();
      removeModalHandlers();
    }
  }

  var modalOverClickHandler = function (evtOver) {
    if (evtOver.target === modalWrap || evtOver.target === closeButton) {
      closeModal();
      removeModalHandlers();
    }
  }
  var modalMouseCloseHandler = function (evtM) {
    if (evtM.button === MAINBUTTON) {
      closeModal();
      removeModalHandlers()
    }
  }

  var modalOpenHandler = function () {
    modalWrap.classList.add('modal-wrap--active');
    modalLogin.classList.add('login--active');
    body.classList.add('body--modal')
    closeButton.addEventListener('click', modalMouseCloseHandler);
    modalWrap.addEventListener('click', modalOverClickHandler)
    document.addEventListener('keydown', modalKeyCloseHandler)
  }

  addButton.addEventListener('click', modalOpenHandler);
})();
