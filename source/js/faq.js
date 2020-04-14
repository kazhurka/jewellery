'use strict';
(function () {
  var faqItem = document.querySelectorAll('.faq__item');
  var openHandler = function (item) {
    item.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('faq__button--up')) {

        item.classList.remove('faq__item--active');
      }
    });
  };

  var closeHandler = function (item) {
    item.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('faq__button--down')) {
        item.classList.add('faq__item--active');
      }
    });
  };

  faqItem.forEach(openHandler);
  faqItem.forEach(closeHandler);
})();
