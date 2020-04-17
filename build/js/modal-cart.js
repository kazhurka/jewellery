'use strict';
(function () {
  var ESCAPE = 'Escape';
  var MAINBUTTON = '0';
  var modalCart = document.querySelector('.cart-modal');
  var modalWrap = document.querySelector('.modal-wrap');
  var addButton = document.querySelector('.product__button');
  var closeButton = document.querySelector('.cart-modal__close');
  var body = document.querySelector('body');

  var closeModal = function () {
    modalWrap.classList.remove('modal-wrap--active');
    modalCart.classList.remove('cart-modal--active');
    body.classList.remove('body--modal')
  }

  var modalKeyCloseHandler = function (evtEsc) {
    if (evtEsc.key === ESCAPE) {
      closeModal();
      document.removeEventListener('keydown', modalKeyCloseHandler);
      closeButton.removeEventListener('click', modalMouseCloseHandler);
      document.removeEventListener('click', modalOverClickHandler);
    }
  }

  var modalOverClickHandler = function (evtOver) {
    if (evtOver.target === modalWrap || evtOver.target === closeButton) {
      closeModal();
      closeButton.removeEventListener('click', modalMouseCloseHandler);
      document.removeEventListener('keydown', modalKeyCloseHandler);
      document.removeEventListener('click', modalOverClickHandler);
    }
  }
  var modalMouseCloseHandler = function (evtM) {
    if (evtM.button === MAINBUTTON) {
      closeModal();
      closeButton.removeEventListener('click', modalMouseCloseHandler);
      document.removeEventListener('keydown', modalKeyCloseHandler);
      document.removeEventListener('click', modalOverClickHandler);
    }
  }

  var modalOpenHandler = function () {
    modalWrap.classList.add('modal-wrap--active');
    modalCart.classList.add('cart-modal--active');
    body.classList.add('body--modal')
    closeButton.addEventListener('click', modalMouseCloseHandler);
    modalWrap.addEventListener('click', modalOverClickHandler)
    document.addEventListener('keydown', modalKeyCloseHandler)

  }

  addButton.addEventListener('click', modalOpenHandler);

})();
