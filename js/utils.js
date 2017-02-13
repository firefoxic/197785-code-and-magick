'use strict';

window.utils = {
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  },
  getRandomElementExcept: function (array, currentElement) {
    var newElement = currentElement;
    while (newElement === currentElement) {
      newElement = window.utils.getRandomElement(array);
    }
    return newElement;
  }
};
