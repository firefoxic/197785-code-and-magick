'use strict';

window.changeColor = function (item) {
  var currentColor = item.element.getAttribute('fill');
  var getNewColor = function () {
    var newColor = window.utils.getRandomElementExcept(item.colors, currentColor);
    item.element.setAttribute('fill', newColor);
    currentColor = newColor;
  };
  item.element.addEventListener('click', getNewColor);
};
