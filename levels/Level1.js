function initLevels()
{
    // Level1

    // Level2
    levels[0] = new Level();
    levels[0].levelInit = function()
    {
        levels[0].lives = 10;
        Hacker.prototype.arrHackers = [];
        debugger;
    }
    levels[0].level = function()
    {
        window.lvl_width = 500;
        window.lvl_height = 290 ;
        var pSpawnX = lvl_width/2;
        var pSpawnY = lvl_height/2;
        // Layout
        this.layout();
        // *end layout*

        // Door needs to be drawn first to stage.
        var door = new Door()
        door.x = 100;
        door.y = 100;
        stage.addChild(door);
        arr_ent.push(door);
        stage.setChildIndex(door, 1);

        // var rocket = new Rocket("test", contentManager.imgRocket, 16,16);
        // rocket.x = rocket.y = 200;
        // stage.addChild(rocket);

        // Has to be here
        this.initPlayer(pSpawnX,pSpawnY);


        // DEBUG STUFF
        circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 5);
        //Set position of Shape instance.


        text_stuff();
        levelTick = createjs.Ticker.getTime();
        gameState = State.prototype.Game_Default
        // Initalize Level specific stuff;
        door.openDoor();

    }
    levels[1] = new Level();
    levels[1].levelInit = function()
    {
        levels[1].lives = 1;
        Hacker.prototype.arrHackers = [];
    }
    levels[1].level = function()
    {
        window.lvl_width = 500;
        window.lvl_height = 300;
        var pSpawnX = lvl_width/2;
        var pSpawnY = lvl_height/2;

        // Layout
        this.layout();
        // *end layout*


        // Door needs to be drawn first to stage.
                            // expression: Evaluate on Shift to open
        var door = new Door("(Hacker.prototype.arrHackers.length >= 1)");
        door.x = canvas.width/2;
        door.y = canvas.height/2-150;
        stage.addChild(door);
        arr_ent.push(door);

        this.initPlayer(pSpawnX,pSpawnY);




        // DEBUG STUFF
        circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 5);
        //Set position of Shape instance.

        stage.addChild(circle);

        text_stuff();
        levelTick = createjs.Ticker.getTime();
        gameState = State.prototype.Game_Default
    }
    levels[2] = new Level();
    levels[2].levelInit = function()
    {
        levels[2].lives = 1;
        Hacker.prototype.arrHackers = [];
    }
    levels[2].level = function()
    {
        window.lvl_width = 500;
        window.lvl_height = 300;
        var pSpawnX = lvl_width/2;
        var pSpawnY = lvl_height/2;

        // Layout
        this.layout();
        // *end layout*
                                // Hacking rate
        var computer = new Computer(300);
        computer.x = canvas.width/2;
        computer.y = canvas.height/2 + 50;
        arr_ent.push(computer);
        stage.addChild(computer);

        // Door needs to be drawn first to stage.
        var door = new Door();
        door.x = canvas.width/2;
        door.y = canvas.height/2-150;
        stage.addChild(door);
        arr_ent.push(door);

        this.initPlayer(pSpawnX,pSpawnY);

        computerMnger = new ComputerManager([computer],door);
        arr_ent.push(computerMnger);
        // var rocket = new Rocket("test", contentManager.imgRocket, 16,16);
        // rocket.x = rocket.y = 200;
        // stage.addChild(rocket);
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
    levels[3] = new Level();
    levels[3].levelInit = function()
    {
        levels[3].lives = 5;
        Hacker.prototype.arrHackers = [];
    }
    levels[3].level = function()
    {
        window.lvl_width = 500;
        window.lvl_height = 300;
        var pSpawnX = lvl_width/2;
        var pSpawnY = lvl_height/2;

        // Layout
        this.layout();
        // *end layout*

        var launcher = new Launcher();
        launcher.x = canvas.width/2;
        launcher.y = canvas.height/2-150;
        launcher.rotation += 0;
        arr_ent.push(launcher);
        stage.addChild(launcher);
                                // Hacking rate
        var computer = new Computer(300, [launcher]);
        computer.x = lvl_width/2 + 200;
        computer.y = lvl_height/2;
        arr_ent.push(computer);
        stage.addChild(computer);

        // Door needs to be drawn first to stage.
        var door = new Door();
        door.x = lvl_width/2 + -200;
        door.y = lvl_height/2;
        stage.addChild(door);
        arr_ent.push(door);

        this.initPlayer(pSpawnX,pSpawnY);

        computerMnger = new ComputerManager([computer],door);
        arr_ent.push(computerMnger);
        // var rocket = new Rocket("test", contentManager.imgRocket, 16,16);
        // rocket.x = rocket.y = 200;
        // stage.addChild(rocket);
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


}