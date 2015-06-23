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

