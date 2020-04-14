'use strict';
(function () {
  var filterOpenButton = document.querySelector('.filter__open-button');
  var filter = document.querySelector('.filter');
  var filterCloseButton = document.querySelector('.filter__close-button')
  filter.classList.remove("filter--no-js");
  filterOpenButton.addEventListener("click", function () {
    if (filter.classList.contains('filter--active')) {
      filter.classList.remove('filter--active');
    } else {
      filter.classList.add('filter--active');
    }
  })
  filterCloseButton.addEventListener("click", function () {
    filter.classList.remove("filter--active");
  })


  var filterGroup = document.querySelectorAll('.filter__group');
  var filterUp = document.querySelector('.filter__button--up');
  var filterDown = document.querySelector('.filter__button--down');


  var openHandler = function (item) {
    item.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('filter__button--up')) {
        console.log(item)
        item.classList.remove('filter__group--active')
      }
    })
  }

  var closeHandler = function (item) {
    item.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('filter__button--down')) {
        item.classList.add('filter__group--active')
      }
    })
  }
  filterGroup.forEach(openHandler);
  filterGroup.forEach(closeHandler);
})();
