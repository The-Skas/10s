function initLevels()
{
    // Level1

    // Level2
    levels[0] = new Level();
    levels[0].levelInit = function()
    {
        levels[0].lives = 10;
        levels[0].hint = "Hey... Im you 10 seconds from now."
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
        levels[1].hint = "Use your time warp. What does it do? \n[SHIFT]"
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
        levels[2].hint = "[Hold any Direction Key + SPACE next to the computer to hack it. \nHit Enter to exit the terminal.]"
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
        var computer = new Computer(400);
        computer.x = canvas.width/2;
        computer.y = canvas.height/2 - 180;
        arr_ent.push(computer);
        stage.addChild(computer);

        // Door needs to be drawn first to stage.
        var door = new Door();
        door.x = canvas.width/2;
        door.y = canvas.height/2+50;
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
    levels[4] = new Level();
    levels[4].levelInit = function()
    {
        levels[4].lives = 3;
        levels[4].hint = "Dead People can be useful."
        Hacker.prototype.arrHackers = [];
    }
    levels[4].level = function()
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
    levels[3] = new Level();
    levels[3].levelInit = function()
    {
        levels[3].lives = 3;
        levels[3].hint = "Yeah..."
        Hacker.prototype.arrHackers = [];
    }
    levels[3].level = function()
    {
        window.lvl_width = 500;
        window.lvl_height = 300;
        var pSpawnX = 450;
        var pSpawnY = lvl_height/2;

        // Layout
        this.layout();
        // *end layout*
        var launchers = []
        for(var i =0; i < 3; i++)
        {
            launchers[i] = new LauncherClone(current_character);
            launchers[i].x = canvas.width/5*(i+1);
            launchers[i].y = canvas.height/2-200;
            launchers[i].rotation += 0;
            launchers[i].speed = 2;
            arr_ent.push(launchers[i]);
            stage.addChild(launchers[i]);
        }
                                // Hacking rate

        // Door needs to be drawn first to stage.
        var door = new Door();
        door.x = lvl_width/2 + -200;
        door.y = lvl_height/2;
        stage.addChild(door);
        arr_ent.push(door);
        door.openDoor();
        this.initPlayer(pSpawnX,pSpawnY);
        // init missles stuff
        var arr_hackers = Hacker.prototype.arrHackers;
        // make sure arr_hackers not gr8r length then launchers.
        // launchers[0].target = arr_hackers[0] || current_character
        // launchers[1].target = arr_hackers[1] || current_character
        // launchers[1].target
        // var rocket = new Rocket("test", contentManager.imgRocket, 16,16);
        // rocket.x = rocket.y = 200;
        // stage.addChild(rocket);


        // DEBUG STUFF
        circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 5);
        //Set position of Shape instance.

        stage.addChild(circle);

        text_stuff();
        levelTick = createjs.Ticker.getTime();
        gameState = State.prototype.Game_Default
    }
    levels[5] = new Level();
    levels[5].levelInit = function()
    {
        levels[5].lives = 3;
        levels[5].hint = "Need to Hack Multiple Computers.... But may need to coordinate it..."
        Hacker.prototype.arrHackers = [];
    }
    levels[5].level = function()
    {
        window.lvl_width = 500;
        window.lvl_height = 300;
        var pSpawnX = lvl_width/2;
        var pSpawnY = lvl_height/2;

        // Layout
        this.layout();
        // *end layout*

        // var launcher = new Launcher();
        // launcher.x = canvas.width/2;
        // launcher.y = canvas.height/2-150;
        // launcher.rotation += 0;
        // arr_ent.push(launcher);
        // stage.addChild(launcher);
                                // Hacking rate
        var computer = new Computer(50,undefined,true);
        computer.x = lvl_width/2 + 200;
        computer.y = lvl_height/2;
        arr_ent.push(computer);
        stage.addChild(computer);

        var computer2 = new Computer(50,undefined,true);
        computer2.x = lvl_width/2 + 200;
        computer2.y = lvl_height/2 - 100;
        arr_ent.push(computer2);
        stage.addChild(computer2);

        var computer3 = new Computer(50,undefined,true);
        computer3.x = lvl_width/2 + 200;
        computer3.y = lvl_height/2 + 100;
        arr_ent.push(computer3);
        stage.addChild(computer3);
        // Door needs to be drawn first to stage.
        var door = new Door();
        door.x = lvl_width/2 + -200;
        door.y = lvl_height/2;
        stage.addChild(door);
        arr_ent.push(door);

        this.initPlayer(pSpawnX,pSpawnY);

        computerMnger = new ComputerManager([computer,computer2,computer3],door);
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
    levels[6] = new Level();
    levels[6].levelInit = function()
        {
            levels[6].lives = 0;
            levels[6].hint = "(:_:)"
            Hacker.prototype.arrHackers = [];
        }
    levels[6].level = function()
    {
        gameState = State.prototype.Game_OverInit;
    }
}