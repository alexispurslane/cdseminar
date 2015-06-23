  // PART TEN
  stage.update(); // Draw the resulting stage from all the changes we made
}

stage.canvas.onmousemove = function (mouse) { // When the player moves the mouse:
  paddle.x = mouse.pageX - paddle.width/2; // The paddle's center should have the same postion as the mouse
}
