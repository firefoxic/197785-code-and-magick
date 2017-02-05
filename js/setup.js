'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = [
  'rgb(0, 0, 0)',
  'rgb(255, 0, 0)',
  'rgb(0, 0, 255)',
  'rgb(255, 255, 0)',
  'rgb(0, 128, 0)'
];
var fireballColors = [
  'rgb(238, 72, 48)',
  'rgb(48, 168, 238)',
  'rgb(92, 230, 192)',
  'rgb(232, 72, 213)',
  'rgb(230, 232, 72)'
];

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

wizardCoat.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumber];
});

wizardEyes.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[colorNumber];
});

fireball.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * fireballColors.length);
  fireball.style.backgroundColor = fireballColors[colorNumber];
});
