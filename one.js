// PART ONE
// Set up the Stage and the player's ball and paddle
var stage = new createjs.Stage("myGame"); // Our canvas element in the HTML page was called myGame, so when we need to create this new Stage, we need to tell it the name of our canvas element
stage.canvas.width = window.innerWidth; // Get the width of the inside of the window, and make the canvas that big. 'stage.canvas' is our origonal canvas element from the HTML, exept that we can now use it in JavaScript
stage.canvas.height = window.innerHeight; // Get the height of the inside of the window, and make the canvas that tall.

var ball = new createjs.Shape(); // Create a new shape. A shape stores it's color, width, height, position, and other types of properties so that we can change them later. For instance, when you change the ball.x, the ball moves
ball.width = ball.height = 15; // The ball is round, so its width is the same as it's height. This is the equivilate in english to: the balls width is the same as the balls height which is the same as 15
ball.graphics.beginFill("DeepSkyBlue") // Tell ball.graphics that its fill should be DeepSkyBlue. A fill is like a paint bucket in an image editor
ball.graphics.drawCircle(0, 0, ball.width); // Tell the ball.graphics that it should draw a circle, when told to draw, and that the circle should be ball.width.
ball.x = stage.canvas.width/2; // Set the balls position to be in the center of the stage. This is done by deviding the canvas width by two for x,
ball.y = stage.canvas.height/2; // and the canvas height by two for y
stage.addChild(ball); // Tell the stage that the ball is one of the shapes it has to draw

var paddle = new createjs.Shape(); // Setting up the paddle is almost the same as setting up the ball, exept that we have to tell it to have lives. You can set any property you want on Shapes, but only some of thier properties are actually used by EaselJS
paddle.width = 150;
paddle.height = 15;
paddle.lives = 4;
paddle.graphics.beginFill("red").drawRect(0, 0, paddle.width, paddle.height);
paddle.x = stage.canvas.width/2 - paddle.width;
paddle.y = stage.canvas.height - paddle.height-30;
stage.addChild(paddle);

