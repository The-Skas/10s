(function (window) {
//CONSTRUCTER:
  var Character = function(monsterName, imgCharacter)
  {
    monsterName = typeof monsterName !== 'undefined' ? monsterName : null;
    if(imgCharacter !== undefined)
      this.initialize(monsterName, imgCharacter);
  }
  // Character inherits from BitmapAnimation
  // Variables.
  Character.prototype = new createjs.BitmapAnimation();
  Character.prototype.BitmapAnimation_initialize = Character.prototype.initialize;
  Character.prototype.initialize = function( monsterName, imgCharacter) {
    var localSpriteSheet = new createjs.SpriteSheet({
      images: [imgCharacter], //image to use
                                                          //regx    regy wtf?
      frames: {width: 16, height: 16, regX: 8, regY: 8},
      animations: {
        left:[1,1, "left"],
        right:[2,2, "right"],
        top:[3,3, "top"],
        down:[0,0, "down"],
        idle:[0,0, "idle", 2],
        dead:[4,22, false]
      }
    });


    //The initialize takes a local SpriteSheet
    this.BitmapAnimation_initialize(localSpriteSheet);

    //
   this.gotoAndPlay("down");

    this.hit_radius = 11;
    this.hp = 100;
    this.speed = 1;
    this.name = monsterName;
    this.direction = 1;

    // Stuff using cords
    this.prevX = 0;
    this.prevY = 0;
    this.vX = 0;
    this.vY = 0;
    this.aX = 0;
    this.aY = 0;

    this.rand_rng = 5;

    //input is an array(not sure if all cases.);
    this.input;
    //a flag that action key was hit
    // *reset on update*
    this.action = false;


// Flag For mimic
    this.mimc = false;
  //handles these attributes
    this.cords = [];
    this.cords_index =0;
  }
  //end Character.prototype.initialize
  function Move(_this)
  {
    input = typeof input !== 'undefined' ? input : null;

    vX = 0; vY = 0;

    _this.x += vX;
    _this.y += vY;
  }


  Character.prototype.check_hit_radius = function(obj)
  {
    dist=Math.sqrt(Math.pow(this.x-obj.x,2) + Math.pow(this.y-obj.y,2));

    if(dist < obj.hit_radius+this.hit_radius)
    {
      console.log("hit");
      obj.was_hit_by(this);
      this.was_hit_by(obj);
    }
  }

  Character.prototype.was_hit_by = function(obj){
    // console.log("hit by -> "+obj.name);
  var char_ind, obj_ind;
  if(obj instanceof Interactable)
  {
    char_ind = stage.getChildIndex(this);
    obj_ind = stage.getChildIndex(obj);

    // Swaps Drawing Order on hit.
    if(this.y < obj.y && char_ind > obj_ind)
    {
      stage.swapChildren(this, obj);
    }
    else if(this.y > obj.y && char_ind < obj_ind)
    {
      stage.swapChildren(this,obj);
    }
  }

  if(obj instanceof Character == false)
    {
      this.x = this.prevX;
      this.y = this.prevY;
    }
  }
  Character.prototype.update = function()
  {
    // Skelaton.prototype.update.apply();
    // Check if input to mimic all actions
    // for recording past previous moves.
    this.cords.push({x: this.x, y: this.y});
  }
  window.Character = Character;
}(window));













