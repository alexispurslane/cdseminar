  // PART SIX
  if (isTouching(ball, paddle)) { // If the ball is touching the paddle..
    if (ball.x > paddle.x+paddle.width/2) { // and it is on the right of the middle of the paddle, (which is calucluated by adding the paddle's x to the paddle's width divided by two)
      ball.dx = Math.floor((Math.random() * 15) + 1); // If so, send it to the right
    } else {
      ball.dx = -Math.floor((Math.random() * 15) + 1); // Else to the left
    }
    ball.dy = -ball.dy; // And send the ball back up, bouncing
  }

