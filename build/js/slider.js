'use strict';
(function () {
  var slider = document.querySelector('.suggestion');
  var pagesListEl = document.querySelectorAll('.suggestion__page');

  var picsList = slider.querySelector('.suggestion__goods');
  var picsListEl = slider.querySelectorAll('.suggestion__good');


  var position = 0;
  var page = 1;

  var widthPic = 300;
  var countPic = 4;

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
        pagesListEl[pagesListEl.length - 1].classList.remove('suggestion__page--hidden');
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
    pagesListEl[getPage()].classList.add('suggestion__page--active');
  };

  slider.querySelector('.suggestion__button--left').onclick = function () {
    position += widthPic * countPic;
    position = Math.min(position, 0);
    picsList.style.marginLeft = position + 'px';
    setActivePage();

  };

  slider.querySelector('.suggestion__button--right').onclick = function () {
    position -= widthPic * countPic;
    position = Math.max(position, -widthPic * (picsListEl.length - countPic));
    picsList.style.marginLeft = position + 'px';
    setActivePage();

  };
})();
