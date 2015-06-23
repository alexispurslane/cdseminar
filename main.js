// PART HALF
// Contact algorithm
function isTouching (obj1, obj2) {
  return obj1.x < obj2.x + obj2.width  && obj1.x + obj1.width  > obj2.x &&
    obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y; // This is a fairly complex way to detect if one object is touching another. You don't really need to understand this, but if you can figure it out by yourselves, that's great
}

// PART ONE
// Set up the Stage and the player's ball and paddle
var stage = new createjs.Stage("myGame"); // Our canvas element in the HTML page was called myGame, so when we need to create this new Stage, we need to tell it the name of our canvas element
stage.canvas.width = window.innerWidth; // Get the width of the inside of the window, and make the canvas that big. 'stage.canvas' is our origonal canvas element from the HTML, exept that we can now use it in JavaScript
stage.canvas.height = window.innerHeight; // Get the height of the inside of the window, and make the canvas that tall.

var ball = new createjs.Shape(); // Create a new shape. A shape stores it's color, width, height, position, and other types of properties so that we can change them later. For instance, when you change the ball.x, the ball moves
ball.width = ball.height = 15; // The ball is round, so its width is the same as it's height. This is the equivilate in english to: 'the ball's width is the same as the ball's height which is the same as 15'
ball.graphics.beginFill("DeepSkyBlue") // Tell ball.graphics that its fill should be DeepSkyBlue. A fill is like a paint bucket in an image editor
ball.graphics.drawCircle(0, 0, ball.width); // Tell the ball.graphics that it should draw a circle, when told to draw, and that the circle should be ball.width.
ball.x = stage.canvas.width/2; // Set the ball's position to be in the center of the stage. This is done by deviding the canvas width by two for x,
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

// PART TWO
// Set up the bricks
var bricks = []; // A list of all the bricks, so we know where they are later
for (var i=0; i < stage.canvas.width/100; i++) { // We know the bricks are 98px wide, so if we want a small gap between them, we have to leave them a space of 100 pixels, so their right side has a little black gap.
  // We know how many we can fit on the screen, by dividing the width of the screen by the width of the brick
  var brick = new createjs.Shape();
  brick.width = 98;
  brick.height = 50;
  brick.graphics.beginFill("red").drawRect(0, 0, brick.width, brick.height); // Draw the brick rectange with the broper width & height
  brick.x = i*100; // i is 0 on the first brick, 1 on the second, etc. So, we need to multiply i by the width so that it gets the proper position
  brick.y = 2; // Y is two becouse we want a two pixel gap at the top of the brick
  stage.addChild(brick); // Add this brick to the stage, so it can be drawn
  bricks.push(brick); // Add it to the list of bricks, so we know where it is later
}

// PART THREE
// Add a HUD
var HUD = new createjs.Text("LIVES: " + paddle.lives, "40px 'Alterebro Pixel Font'", "white"); // The first argument is the text that it will display. Here, it is "LIVES: " and then the amount of lives on the paddle.
                                                                                               // Also, we tell it that it should use a 40px size of Alterebro Pixel Font in the second argument, and in the third, we tell it that it should be white
HUD.x = stage.canvas.width - 80; // It's postion from the right edge of the canvas should be 80px, so that the full length of the message shows
HUD.y = 0; // It should be right at the top of the canvas.
stage.addChild(HUD); // Tell the stage that the HUD is one of the shapes it should draw

// PART FOUR
// Manage physics
createjs.Ticker.addEventListener("tick", update); // Tell the clock that it should listen for when it ticks, and call update when it does. The clock is called createjs.Ticker.

function update () { // When the ticker ticks, this function is called
  // PART FIVE
  HUD.text = "LIVES: " + paddle.lives; // Update the text in the HUD, so if the paddle's lives changed, the HUD will change too.
  if (paddle.lives <= 0) { // If the player has no lives left...
    stage.removeChild(ball); // Remove the ball, so it isn't drawn any more
    stage.removeChild(paddle); // Same for the paddle

    var text = new createjs.Text("GAME OVER", "128px 'Alterebro Pixel Font'", "red"); // Create new large red text that says GAME OVER
    text.x = stage.canvas.width/2; // Put it in the center of the screen on the x axis
    text.y = stage.canvas.height/2; // And on the y
    stage.addChild(text); // Tell the stage to draw it
    createjs.Ticker.removeEventListener("tick", update); // And tell the ticker to stop telling us when it ticks, so the game stops interacting
  }

  // PART SIX
  if (isTouching(ball, paddle)) { // If the ball is touching the paddle..
    if (ball.x > paddle.x+paddle.width/2) { // and it is on the right of the middle of the paddle, (which is calucluated by adding the paddle's x to the paddle's width divided by two)
      ball.dx = Math.floor((Math.random() * 15) + 1); // If so, send it to the right
    } else {
      ball.dx = -Math.floor((Math.random() * 15) + 1); // Else to the left
    }
    ball.dy = -ball.dy; // And send the ball back up, bouncing
  }

  // PART SEVEN
  for (var i=0; i < bricks.length; i++) { // Now, remember that we saved where all the bricks were? We loop through the bricks, incrementing i while it is less that the length of that array of bricks
    if (isTouching(ball, bricks[i])) { // If the ball is touching the current brick that we are looking at,
      stage.removeChild(bricks[i]); // Remove the brick, from the stage
      ball.dy = -ball.dy; // Bounce the ball
      bricks.splice(i, 1); // And remove the brick from the array, so the ball doesn't bounce of a non-existant brick
    }
  }

  // PART EIGHT
  if (ball.y+ball.height > stage.canvas.height || ball.y-ball.height < 0) { // If the ball is past or touching the top or the bottom of the canvas,
    ball.dy = -(ball.dy); // Bounce it.
    if (ball.y+ball.height > stage.canvas.height) { // If it has bounced off the bottom, then take away a life from the paddle
      paddle.lives -= 1;
    }
  }
  if (ball.x-ball.width < 0 || ball.x+ball.width > stage.canvas.width) { // If it is past or touching the left or the right, bounce it.
    ball.dx = -(ball.dx);
  }

  // PART NINE
  ball.dx = ball.dx || 0; // continue on a prevous tilt, OR just go straight. It only doesnt have a previous tilt in the beggining
  ball.dy = ball.dy || 15; // If it doesnt have a previous speed, just use 15.
  ball.x += ball.dx; // Move in that direction on the x
  ball.y += ball.dy; // Move in that direction on the y

  // PART TEN
  stage.update(); // Draw the resulting stage from all the changes we made
}

stage.canvas.onmousemove = function (mouse) { // When the player moves the mouse:
  paddle.x = mouse.pageX - paddle.width/2; // The paddle's center should have the same postion as the mouse
}
