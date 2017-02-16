'use strict';

(function () {

  var setupOpen = document.querySelector('.setup-open-icon');

  var focusSetupOpen = function () {
    setupOpen.focus();
  };

  var onSetupKeypress = function (event) {
    if (window.utils.isActivateEvent(event)) {
      window.enableSetup(focusSetupOpen);
    }
  };

  setupOpen.addEventListener('keypress', onSetupKeypress);

  setupOpen.addEventListener('click', function () {
    window.enableSetup();
  });

})();

// TODO: Доработать разметку проекта и код модулей таким образом, чтобы повысить их доступность:
// TODO:    1. Добавить свойство tabindex и соответствующие ARIA-роли и свойства элементам #wizard-coat, #wizard-eyes и .fireball-wrap
// TODO:    2. Сделать так, чтобы ранее созданная функция changeColor добавляла обработчик изменения цвета не только по клику, но и по нажатию на кнопку Enter при установленном фокусе на соответствующий элемент.
// TODO: Вернуть в обработчики событий смену aria-атрибутов.
