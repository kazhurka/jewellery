'use strict';
(function () {

  (function () {
    var slider = document.querySelector('.suggestion');
    var pagesListEl = document.querySelectorAll('.suggestion__page');

    var picsList = document.querySelector('.suggestion__slider ul');

    var picsListEl = document.querySelectorAll('.suggestion__slider li');
    var pagesAmountEl = document.querySelector('.suggestion__pages p');


    if (!(slider && pagesListEl && picsList && picsListEl && pagesAmountEl)) {
      return;
    }

    var position = 0;
    var page = 1;

    var widthPic = 300;
    var countPic = 2;
    pagesAmountEl.textContent = picsListEl.length / countPic;

    var getParam = function () {
      if (window.screen.width < 1366 && window.screen.width > 1024) {
        widthPic = 300;
        countPic = 3;
      }
      if (window.screen.width < 1024 && window.screen.width > 767) {
        widthPic = 354;
        countPic = 2;
      } else {
        if (window.screen.width < 768) {
          widthPic = 160;
          countPic = 2;
          pagesListEl.forEach(function (item) {
            item.classList.add('suggestion__page--hidden');
          });
          pagesListEl[0].classList.remove('suggestion__page--hidden');
        } else {
          widthPic = 300;
          countPic = 4;
        }
      }
    };

    getParam();

    var getPage = function () {
      page = -(position / (widthPic * countPic));
      return page;
    };

    var setActivePage = function () {
      var activePage = document.querySelector('.suggestion__page--active');
      activePage.classList.remove('suggestion__page--active');
      var currentPageEl = pagesListEl[getPage()];
      currentPageEl.classList.add('suggestion__page--active');
      if (screen.width < 768) {
        activePage.classList.add('suggestion__page--hidden');
        activePage.classList.remove('suggestion__page--active');
        currentPageEl.classList.add('suggestion__page--active');
        currentPageEl.classList.remove('suggestion__page--hidden');
        pagesAmountEl.textContent = picsListEl.length / countPic;

      }

    };

    slider.querySelector('.suggestion__button--left button').onclick = function () {
      position += widthPic * countPic;
      position = Math.min(position, 0);
      picsList.style.marginLeft = position + 'px';
      setActivePage();

    };

    slider.querySelector('.suggestion__button--right button').onclick = function () {
      position -= widthPic * countPic;
      position = Math.max(position, -widthPic * (picsListEl.length - countPic));
      picsList.style.marginLeft = position + 'px';
      setActivePage();
    };

    pagesListEl.forEach(function (item) {
      if (screen.width > 320) {
        item.onclick = function (evt) {
          event.preventDefault();

          var activePage = document.querySelector('.suggestion__page--active');
          activePage.classList.remove('suggestion__page--active');
          var pagesListArr = Array.from(pagesListEl);
          position = -pagesListArr.indexOf(evt.target) * (widthPic * countPic);
          picsList.style.marginLeft = position + 'px';
          evt.target.classList.add('suggestion__page--active');
        };
      }
    });


  })();


  (function () {
    var ESCAPE = 'Escape';
    var MAINBUTTON = '0';
    var modalCart = document.querySelector('.cart-modal');
    var modalWrap = document.querySelector('.modal-wrap-cart');
    var addButton = document.querySelector('.product__button');
    var closeButton = document.querySelector('.cart-modal__close');
    var body = document.querySelector('body');

    if (!(modalCart && modalWrap && addButton && closeButton && body)) {
      return;
    }

    var closeModal = function () {
      modalWrap.classList.remove('modal-wrap-cart--active');
      modalCart.classList.remove('cart-modal--active');
      body.classList.remove('body--modal');
    };

    var modalKeyCloseHandler = function (evtEsc) {
      if (evtEsc.key === ESCAPE) {
        closeModal();
        document.removeEventListener('keydown', modalKeyCloseHandler);
        closeButton.removeEventListener('click', modalMouseCloseHandler);
        document.removeEventListener('click', modalOverClickHandler);
      }
    };

    var modalOverClickHandler = function (evtOver) {
      if (evtOver.target === modalWrap || evtOver.target === closeButton) {
        closeModal();
        closeButton.removeEventListener('click', modalMouseCloseHandler);
        document.removeEventListener('keydown', modalKeyCloseHandler);
        document.removeEventListener('click', modalOverClickHandler);
      }
    };
    var modalMouseCloseHandler = function (evtM) {
      if (evtM.button === MAINBUTTON) {
        closeModal();
        closeButton.removeEventListener('click', modalMouseCloseHandler);
        document.removeEventListener('keydown', modalKeyCloseHandler);
        document.removeEventListener('click', modalOverClickHandler);
      }
    };

    var modalOpenHandler = function () {
      modalWrap.classList.add('modal-wrap-cart--active');
      modalCart.classList.add('cart-modal--active');
      body.classList.add('body--modal');
      closeButton.addEventListener('click', modalMouseCloseHandler);
      modalWrap.addEventListener('click', modalOverClickHandler);
      document.addEventListener('keydown', modalKeyCloseHandler);

    };
    if (addButton) {
      addButton.addEventListener('click', modalOpenHandler);
    }


  })();

  (function () {
    var ESCAPE = 'Escape';
    var MAINBUTTON = '0';
    var modalLogin = document.querySelector('.login');
    var addButton = document.querySelector('.main-header__user-link--login');
    var closeButton = document.querySelector('.login__close button');
    var modalWrap = document.querySelector('.modal-wrap');
    var body = document.querySelector('body');

    if (!(modalLogin && modalWrap && addButton && closeButton && body)) {
      return;
    }

    var closeModal = function () {
      modalWrap.classList.remove('modal-wrap--active');
      modalLogin.classList.remove('login--active');
      body.classList.remove('body--modal');
    };
    var removeModalHandlers = function () {
      document.removeEventListener('keydown', modalKeyCloseHandler);
      closeButton.removeEventListener('click', modalMouseCloseHandler);
      document.removeEventListener('click', modalOverClickHandler);
    };
    var modalKeyCloseHandler = function (evtEsc) {
      if (evtEsc.key === ESCAPE) {
        closeModal();
        removeModalHandlers();
      }
    };

    var modalOverClickHandler = function (evtOver) {
      if (evtOver.target === modalWrap || evtOver.target === closeButton) {
        closeModal();
        removeModalHandlers();
      }
    };
    var modalMouseCloseHandler = function (evtM) {
      if (evtM.button === MAINBUTTON) {
        closeModal();
        removeModalHandlers();
      }
    };

    var modalOpenHandler = function () {
      modalWrap.classList.add('modal-wrap--active');
      modalLogin.classList.add('login--active');
      modalLogin.querySelector('#email').focus();
      body.classList.add('body--modal');
      closeButton.addEventListener('click', modalMouseCloseHandler);
      modalWrap.addEventListener('click', modalOverClickHandler);
      document.addEventListener('keydown', modalKeyCloseHandler);
    };
    if (addButton) {
      addButton.addEventListener('click', modalOpenHandler);
    }

  })();

  (function () {
    var headerMain = document.querySelector('.main-header');
    var navToggle = document.querySelector('.main-header__menu-button');
    if (!(headerMain && navToggle)) {
      return;
    }
    headerMain.classList.remove('main-header--nojs');
    navToggle.addEventListener('click', function () {
      if (headerMain.classList.contains('main-header--open')) {
        headerMain.classList.remove('main-header--open');
      } else {
        headerMain.classList.add('main-header--open');
      }
    });
  })();

  (function () {
    if (!faqItem) {
      return;
    }
    var faqItem = document.querySelectorAll('.faq__item');
    var openHandler = function (item) {
      item.addEventListener('click', function (evt) {
        if (evt.target.parentNode.classList.contains('faq__button--up')) {

          item.classList.remove('faq__item--active');
        }
      });
    };

    var closeHandler = function (item) {
      item.addEventListener('click', function (evt) {
        if (evt.target.parentNode.classList.contains('faq__button--down')) {
          item.classList.add('faq__item--active');
        }
      });
    };

    faqItem.forEach(openHandler);
    faqItem.forEach(closeHandler);
  })();

  (function () {
    var filter = document.querySelector('.filter');
    if (!filter) {
      return;
    }

    var filterOpenButton = document.querySelector('.filter__open button');

    var filterCloseButton = document.querySelector('.filter__close button');
    var filterHeaders = document.querySelectorAll('.filter__group h3');
    filter.classList.remove('filter--no-js');
    filterOpenButton.addEventListener('click', function () {
      if (filter.classList.contains('filter--active')) {
        filter.classList.remove('filter--active');
      } else {
        filter.classList.add('filter--active');
      }
    });
    filterCloseButton.addEventListener('click', function () {
      filter.classList.remove('filter--active');
    });


    var filterGroup = document.querySelectorAll('.filter__group');

    var openHandler = function (item) {
      item.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('filter__button--up')) {
          item.classList.remove('filter__group--active');
        }
      });
    };
    var toggleHandler = function (item) {
      item.addEventListener('click', function (evt) {
        if (Array.from(filterHeaders).indexOf(evt.target) !== -1) {


          if (evt.target.parentNode.classList.contains('filter__group--active')) {

            evt.target.parentNode.classList.remove('filter__group--active');
          } else {
            evt.target.parentNode.classList.add('filter__group--active');
          }
        }
      });
    };

    var closeHandler = function (item) {
      item.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('filter__button--down')) {
          item.classList.add('filter__group--active');
        }
      });
    };

    filterGroup.forEach(openHandler);
    filterGroup.forEach(closeHandler);
    filterGroup.forEach(toggleHandler);


  })();


})();
