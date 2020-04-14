'use strict';
(function () {
  var modalCart = document.querySelector('.cart-modal');
  var modalWrap = document.querySelector('.modal-wrap');
  var addButton = document.querySelector('.product__button');
  var closeButton = document.querySelector('.cart-modal__close');
  addButton.addEventListener('click', function () {
    modalWrap.classList.add('modal-wrap--active');
    modalCart.classList.add('cart-modal--active');
    closeButton.addEventListener('click', function () {
      modalWrap.classList.remove('modal-wrap--active');
      modalCart.classList.remove('cart-modal--active');
    })
  })
})();
