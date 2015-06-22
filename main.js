var stage = new createjs.Stage("myGame");
stage.canvas.width = window.innerWidth;
stage.canvas.height = window.innerHeight;

var ball = new createjs.Shape();
ball.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 5);
ball.x = stage.canvas.width/2 - 5;
ball.y = stage.canvas.height/2 - 5;
stage.addChild(ball);

createjs.Ticker.addEventListener("tick", function (dt, paused) {
  stage.update();
});
