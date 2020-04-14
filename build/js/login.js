'use strict';
(function () {
  var loginModal = document.querySelector('.login');
  var loginOpen = document.querySelector('.main-header__user-link--login');
  var loginClose = loginModal.querySelector('.login__close');
  var modalWrap = document.querySelector('.modal-wrap');

  loginOpen.addEventListener('click', function () {
    loginModal.classList.add('login--active');
    modalWrap.classList.add('modal-wrap--active')
  })

  loginClose.addEventListener('click', function () {
    loginModal.classList.remove('login--active');
    modalWrap.classList.remove('modal-wrap--active')
  })

})();
