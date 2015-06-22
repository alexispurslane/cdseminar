window.onload = function () {
  var canvas = document.getElementById('myGame');
  canvas.width = document.body.width;
  canvas.height = document.body.height;
  var ctx = canvas.getContext('2d');
  
  // Build a game! (Easier said than done)
  ctx.font = '12pt Helvetica';
  ctx.fillStyle = 'red';

  var str = 'Hello World!';
  ctx.fillText(str, (canvas.width/2) - 4*str.length, canvas.height/2);
}
