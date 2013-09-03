(function (window)
{
  var Level = function()
  {

  }

  Level.prototype.level1 = function()
  {


    player_h = new Hacker("player1", contentManager.imgHacker);

    stage.addChild(player_h);
    arr_ent.push(player_h);

    computer = new Computer("computer", contentManager.imgComputer, 64,64);
    computer.x = canvas.width/2 + 100;
    computer.y = canvas.height/2;
    stage.addChild(computer);

    // var rocket = new Rocket("test", contentManager.imgRocket, 16,16);
    // rocket.x = rocket.y = 200;
    // stage.addChild(rocket);

    current_character = player_h;

    console.log("Game has started.!");
    arr_ent.push(computer);
    stage.setChildIndex(computer, 1);


    // DEBUG STUFF
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 5);
    //Set position of Shape instance.

    stage.addChild(circle);

    text_stuff();
    levelTick = createjs.Ticker.getTime();
    gameState = State.prototype.Game_Default
  }

  window.Level = Level;
}(window))