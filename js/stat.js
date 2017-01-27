'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'hsla(0, 0%, 0%, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'hsla(0, 0%, 100%, 1)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'hsla(0, 0%, 0%, 1)';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

// Отрисовать гистограмму:

  var histoWidth = 40;
  var histoHeightMax = 150;
  var histoXMin = 155;
  var histoYMin = 90;
  var histoStep = 90;
  var timeMax = 0;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > timeMax) {
      timeMax = parseInt(times[i], 10);
    }
  }

  var timePerPixel = timeMax / histoHeightMax;

  for (i = 0; i < times.length; i++) {

    var time = parseInt(times[i], 10);
    var histoHeight = parseInt(time / timePerPixel, 10);
    var histoX = histoXMin + histoStep * i;
    var histoY = histoYMin + histoHeightMax - histoHeight;
    var histoColor = names[i] === 'Вы' ? 'hsla(0, 100%, 50%, 1)' : 'hsla(240, ' + 100 * Math.random() + '%, 50%, 1)';

    ctx.fillStyle = histoColor;
    ctx.fillRect(histoX, histoY, histoWidth, histoHeight);

    ctx.fillText(names[i], histoX, 260);

  }

};
