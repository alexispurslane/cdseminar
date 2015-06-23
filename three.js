// PART THREE
// Add a HUD
var HUD = new createjs.Text("LIVES: " + paddle.lives, "40px 'Alterebro Pixel Font'", "white"); // The first argument is the text that it will display. Here, it is "LIVES: " and then the amount of lives on the paddle.
                                                                                               // Also, we tell it that it should use a 40px size of Alterebro Pixel Font in the second argument, and in the third, we tell it that it should be white
HUD.x = stage.canvas.width - 80; // It's postion from the right edge of the canvas should be 80px, so that the full length of the message shows
HUD.y = 0; // It should be right at the top of the canvas.
stage.addChild(HUD); // Tell the stage that the HUD is one of the shapes it should draw

