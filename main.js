var stage = new createjs.Stage("myGame");
stage.canvas.width = window.innerWidth;
stage.canvas.height = window.innerHeight;

var ball = new createjs.Shape();
ball.width = ball.height = 15;
ball.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, ball.width);
ball.x = stage.canvas.width/2 - 5;
ball.y = stage.canvas.height/2 - 5;
stage.addChild(ball);

var paddle = new createjs.Shape();
paddle.width = 150;
paddle.height = 15;
paddle.graphics.beginFill("red").drawRect(0, 0, paddle.width, paddle.height);
paddle.x = stage.canvas.width/2 - paddle.width;
paddle.y = stage.canvas.height - paddle.height-30;
stage.addChild(paddle);

// Manage physics
var gravity = 10;
createjs.Ticker.addEventListener("tick", function (dt, paused) {
  ball.dx = ball.dx || 0;
  ball.dy = ball.dy || gravity;
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.x < paddle.x + paddle.width  && ball.x + ball.width  > paddle.x &&
      ball.y < paddle.y + paddle.height && ball.y + ball.height > paddle.y) {
    if (ball.x > paddle.x+paddle.width/2) { // Its on the right half
      ball.dx = Math.floor((Math.random() * 15) + 1);
    } else {
      ball.dx = -Math.floor((Math.random() * 15) + 1);
    }
    ball.dy = -ball.dy;
  }
  if (ball.y+ball.width > stage.canvas.height || ball.y-ball.height < 0) {
    ball.dy = -(ball.dy);
  }
  if (ball.x-ball.width < 0 || ball.x+ball.width > stage.canvas.width) {
    ball.dx = -(ball.dy);
  }
  stage.update();
});

stage.canvas.onmousemove = function (e) {
  paddle.x = e.pageX;
}
