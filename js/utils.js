'use strict';

window.utils = (function () {

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  return {
    getRandomElement: getRandomElement,
    getRandomElementExcept: function (array, currentElement) {
      var newElement = currentElement;
      while (newElement === currentElement) {
        newElement = getRandomElement(array);
      }
      return newElement;
    }
  };

})();
