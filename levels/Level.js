(function (window)
{
  var Level = function()
  {
    // this.level;
    // this.levelInit;
  }
  Level.prototype.layout = function(){
    var container=new createjs.Container();
    container.name = "layout"
    stage.addChild(container);
        // icon
    var icon = new createjs.Bitmap(contentManager.imgIconHacker);
    icon.x = canvas.width/10;
    icon.y = 310;
        // font
    var txt = new createjs.Text(levels[ind_lvl].lives,"36px Courier", "#76EE00")
    txt.x = icon.x+50;
    txt.y = icon.y-10;
        // add
    var square = new createjs.Shape();
    square.graphics.setStrokeStyle(8).beginStroke("green").drawRect(0,0,140,90)
    square.x = canvas.width-150;
    square.y = canvas.height-95;

    var hint = new createjs.Text(levels[ind_lvl].hint, "14px Courier", "#76EE00")
    hint.lineWidth =140;
    hint.x = square.x+4;
    hint.y = canvas.height-95;
    debugger;
    // circle.graphics.beginFill("red").drawCircle(0, 0, 5);
    container.addChild(icon);
    container.addChild(square);
    container.addChild(txt);
    container.addChild(hint);
  }
  Level.prototype.initPlayer= function(pSpawnX,pSpawnY){
    var spawn = new createjs.Bitmap(contentManager.imgSpawn);
    spawn.x = pSpawnX; spawn.regX= spawn.image.width/2;
    spawn.y = pSpawnY; spawn.regY= spawn.image.height/2;
    stage.addChild(spawn);
    var player_h = new Hacker("player1", contentManager.imgHacker);
    player_h.x = pSpawnX;
    player_h.y = pSpawnY;
    stage.addChild(player_h);
    arr_ent.push(player_h);

    current_character = player_h;

    var arr_hackers = Hacker.prototype.arrHackers;
    // initializes clones;
    for(var i = 0; i < arr_hackers.length; i++)
    {
      arr_hackers[i].x = pSpawnX;
      arr_hackers[i].y = pSpawnY;
      arr_hackers[i].prevX = pSpawnX;
      arr_hackers[i].prevY = pSpawnY;
      arr_hackers[i].dead = false;
      arr_hackers[i].gotoAndStop("down");
      // state is a func;
      arr_hackers[i].arr_funcs = State.prototype.Hacker_Input_Default;
      arr_hackers[i].state = State.prototype.Hacker_MimicInit;
      stage.addChild(arr_hackers[i]);
      arr_ent.push(arr_hackers[i]);
    }
    console.log("Game has started.!");

  }
  Level.prototype.reset = function(){
    arr_ent =[];
    stage.removeAllChildren();
    // hash_keydown ={};
    // arr_keys = [];
    this.levelInit();
    this.level();
  }
  Level.prototype.levelInit = function()
  {
  }
  Level.prototype.level = function()
  {

    window.lvl_width = 500;
    window.lvl_height = 300;

    // Layout
    var container=new createjs.Container();
    container.name = "layout"
    stage.addChild(container);
        // icon
    var icon = new createjs.Bitmap(contentManager.imgIconHacker);
    icon.x = canvas.width/10;
    icon.y = 300;
        // font
    var txt = new createjs.Text("","36px Courier", "#76EE00")
    txt.x = icon.x+50;
    txt.y = icon.y-10;
        // add
    container.addChild(icon);
    container.addChild(txt);
    // *end layout*
    var computer = new Computer("computer", contentManager.imgComputer, 64,64);
    computer.x = canvas.width/2 + 100;
    computer.y = canvas.height/2;
    stage.addChild(computer);

    // Door needs to be drawn first to stage.
    var door = new Door("door", contentManager.imgDoor)
    door.x = 100;
    door.y = 100;
    stage.addChild(door);
    arr_ent.push(door);

    computerMnger = new ComputerManager([computer],door);
    arr_ent.push(computerMnger);
    // var rocket = new Rocket("test", contentManager.imgRocket, 16,16);
    // rocket.x = rocket.y = 200;
    // stage.addChild(rocket);
    var player_h = new Hacker("player1", contentManager.imgHacker);

    stage.addChild(player_h);
    arr_ent.push(player_h);

    current_character = player_h;

    console.log("Game has started.!");

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

  Level.prototype.checkBounds = function(obj)
  {
    if(obj.x > window.lvl_width || obj.x < 0
    || obj.y > window.lvl_height|| obj.y < 0)
      obj.was_hit_by("Bounds");
  }
  window.Level = Level;
}(window))