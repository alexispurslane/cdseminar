  // PART SEVEN
  for (var i=0; i < bricks.length; i++) { // Now, remember that we saved where all the bricks were? We loop through the bricks, incrementing i while it is less that the length of that array of bricks
    if (isTouching(ball, bricks[i])) { // If the ball is touching the current brick that we are looking at,
      stage.removeChild(bricks[i]); // Remove the brick, from the stage
      ball.dy = -ball.dy; // Bounce the ball
      bricks.splice(i, 1); // And remove the brick from the array, so the ball doesn't bounce of a non-existant brick
    }
  }

