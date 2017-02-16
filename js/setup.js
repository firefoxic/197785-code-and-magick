'use strict';

window.enableSetup = (function () {

  var ESCAPE_KEY_CODE = 27;
  var onSetupHide = null;
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');
  var setupUserName = setup.querySelector('.setup-user-name');

  var setupEscapeHandler = function (event) {
    if (event.target !== setupUserName && event.keyCode === ESCAPE_KEY_CODE) {
      setup.classList.add('invisible');
      event.preventDefault();
    }
  };

  var showSetup = function () {
    setup.classList.remove('invisible');
    document.addEventListener('keydown', setupEscapeHandler);
  };

  var hideSetup = function (event) {
    setup.classList.add('invisible');
    document.removeEventListener('keydown', setupEscapeHandler);

    if (typeof onSetupHide === 'function') {
      onSetupHide();
    }
  };

  var onClick = function () {
    hideSetup();
  };

  var onKeyDown = function (event) {
    if (window.utils.isActivateEvent(event)) {
      hideSetup();
    }
  };

  return function (callback) {
    showSetup();
    setupClose.addEventListener('click', onClick);
    setupClose.addEventListener('keypress', onKeyDown);
    setupSubmit.addEventListener('click', onClick);
    setupSubmit.addEventListener('keypress', onKeyDown);
    onSetupHide = callback;
  };

})();

// TODO: Вынести ESCAPE в utils.js
