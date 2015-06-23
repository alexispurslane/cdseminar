  // PART NINE
  ball.dx = ball.dx || 0; // continue on a prevous tilt, OR just go straight. It only doesnt have a previous tilt in the beggining
  ball.dy = ball.dy || 15; // If it doesnt have a previous speed, just use 15.
  ball.x += ball.dx; // Move in that direction on the x
  ball.y += ball.dy; // Move in that direction on the y

