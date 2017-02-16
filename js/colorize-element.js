'use strict';

(function () {

  var wizardCoat = {
    element: document.querySelector('#wizard-coat'),
    colors: [
      '#6589a4',
      '#f12b6b',
      '#9264a1',
      '#389f75',
      '#d7d237',
      '#000000'
    ]
  };

  var wizardEyes = {
    element: document.querySelector('#wizard-eyes'),
    colors: [
      '#000000',
      '#ff0000',
      '#0000ff',
      '#ffff00',
      '#008000'
    ]
  };

  var fireball = {
    element: document.querySelector('.setup-fireball'),
    colors: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };

  window.changeColor(wizardCoat);
  window.changeColor(wizardEyes);
  window.changeColor(fireball);

})();
