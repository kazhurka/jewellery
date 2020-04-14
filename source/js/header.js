'use strict';
(function () {
  var headerMain = document.querySelector('.main-header');
  var navToggle = document.querySelector('.main-header__menu-button');
  headerMain.classList.remove('main-header--nojs');
  navToggle.addEventListener('click', function () {
    if (headerMain.classList.contains('main-header--open')) {
      headerMain.classList.remove('main-header--open');
    } else {
      headerMain.classList.add('main-header--open');
    }
  });
})();
