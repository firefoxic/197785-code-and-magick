'use strict';

var ENTER_KEY_CODE = 13;
var SPACE_KEY_CODE = 32;
var ESCAPE_KEY_CODE = 27;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
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
  return event.type === 'click' || event.keyCode && event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE;
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

setupOpen.addEventListener('click', showSetup);
setupOpen.addEventListener('keydown', showSetup);
setupClose.addEventListener('click', hideSetup);
setupClose.addEventListener('keydown', hideSetup);
setupSubmit.addEventListener('click', hideSetup);
setupSubmit.addEventListener('keydown', hideSetup);
