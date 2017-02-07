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
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ]
};

var wizardEyes = {
  element: setup.querySelector('#wizard-eyes'),
  colors: [
    'rgb(0, 0, 0)',
    'rgb(255, 0, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(0, 128, 0)'
  ]
};

var fireball = {
  element: setup.querySelector('.setup-fireball'),
  colors: [
    'rgb(238, 72, 48)',
    'rgb(48, 168, 238)',
    'rgb(92, 230, 192)',
    'rgb(232, 72, 213)',
    'rgb(230, 232, 72)'
  ]
};

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

var changeColor = function (item) {
  item.element.addEventListener('click', function () {
    item.element.setAttribute('fill', getRandomElement(item.colors));
  });
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
