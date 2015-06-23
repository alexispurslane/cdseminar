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

