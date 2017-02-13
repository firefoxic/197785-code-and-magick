'use strict';

var ENTER_KEY_CODE = 13;
var SPACE_KEY_CODE = 32;
var ESCAPE_KEY_CODE = 27;

var eventTypes = {
  down: [
    'mousedown',
    'keydown'
  ],
  up: [
    'mouseup',
    'keyup'
  ]
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupSubmit = setup.querySelector('.setup-submit');

var wizardCoat = {
  element: setup.querySelector('#wizard-coat'),
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
  element: setup.querySelector('#wizard-eyes'),
  colors: [
    '#000000',
    '#ff0000',
    '#0000ff',
    '#ffff00',
    '#008000'
  ]
};

var fireball = {
  element: setup.querySelector('.setup-fireball'),
  colors: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]
};

var changeColor = function (item) {
  var currentColor = item.element.getAttribute('fill');
  var getNewColor = function () {
    var newColor = window.utils.getRandomElementExcept(item.colors, currentColor);
    item.element.setAttribute('fill', newColor);
    currentColor = newColor;
  };
  item.element.addEventListener('click', getNewColor);
};

changeColor(wizardCoat);
changeColor(wizardEyes);
changeColor(fireball);

var isActivateEvent = function (event) {
  return event.type === 'mouseup' || event.keyCode && event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE;
};

var setupKeydownHandler = function (event) {
  if (event.target !== setupUserName && event.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
    event.preventDefault();
  }
};

var showSetup = function (event) {
  if (isActivateEvent(event)) {
    setup.classList.remove('invisible');
    document.addEventListener('keydown', setupKeydownHandler);
  }
};

var hideSetup = function (event) {
  if (isActivateEvent(event)) {
    setup.classList.add('invisible');
    document.removeEventListener('keydown', setupKeydownHandler);
  }
};

var addActionToElement = function (element, action) {
  for (var i = 0; i < eventTypes.up.length; i++) {
    element.addEventListener(eventTypes.up[i], action);
    element.addEventListener(eventTypes.up[i], function () {
      element.setAttribute('aria-pressed', 'false');
    });
  }
  for (i = 0; i < eventTypes.down.length; i++) {
    element.addEventListener(eventTypes.down[i], function () {
      element.setAttribute('aria-pressed', 'true');
    });
  }
};

addActionToElement(setupOpen, showSetup);
addActionToElement(setupClose, hideSetup);
addActionToElement(setupSubmit, hideSetup);
