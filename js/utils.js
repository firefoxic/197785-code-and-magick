'use strict';

window.utils = (function () {

  var ENTER_KEY_CODE = 13;
  var SPACE_KEY_CODE = 32;

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
    },
    isActivateEvent: function (event) {
      return (event.type === 'click') || (event.keyCode && (event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE));
    }
  };

})();
