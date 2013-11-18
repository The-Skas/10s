(function (window) {
  // This is how the Monster function will be called.
  var Monster = function(monsterName, imgMonster){
    this.initialize(monsterName, imgMonster);
  }
  // Monster inherits from BitmapAnimation


  Monster.prototype = new createjs.BitmapAnimation();
  // public properties
  Monster.prototype.IDLEWAITTIME = 40;

  //constructor:
  Monster.prototype.BitmapAnimation_initialize = Monster.prototype.initialize;
  //variable members to handle the idle state
  // and the time to wait
  this.isInIdleMode = false;
  this.idleWaitTicker = 0;

  Monster.prototype.initialize = function( monsterName, imgMonster) {
    var localSpriteSheet = new createjs.SpriteSheet({
      images: [imgMonster], //image to use
                                                          //regx    regy wtf?
      frames: {width: 64, height: 64, regX: 32, regY: 32},

      animations: {
        walk:[0,9, "walk", 4],
        idle:[10, 20, "idle", 4],
      }
    });

    createjs.SpriteSheetUtils.addFlippedFrames(localSpriteSheet, true, false, false);


    //The initialize takes a local SpriteSheet
    this.BitmapAnimation_initialize(localSpriteSheet);


    this.gotoAndPlay("walk_h");

    this.name = monsterName;

    this.direction = 1;

    this.vX = 1;
    this.vY = 0;

    this.currentFrame = 21;
  }
  //end Monster.prototype.initialize

  Monster.prototype.tick = function()
  {
    this.x +=1;
  }
  window.Monster = Monster;
}(window));













