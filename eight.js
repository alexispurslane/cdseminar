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

