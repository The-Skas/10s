(function (window)
{
  var Interactable = function(name, img,width, height, anim_obj)
  {
  if(img !==undefined)
    this.initialize(name, img, width,height, anim_obj);
  }

  Interactable.prototype = new createjs.BitmapAnimation();

  Interactable.prototype.BitmapAnimation_initialize = Interactable.prototype.initialize

  Interactable.prototype.initialize = function( name, img, width, height, anim_obj){
    if(anim_obj == undefined)
      anim_obj = {idle: [0, 9, "idle"]};
    var localSpriteSheet = new createjs.SpriteSheet({
      images: [img],
      frames: {width: width, height: height, regX: width/2, regY: height/2},
      animations: anim_obj
    })
    this.BitmapAnimation_initialize(localSpriteSheet);
    this.gotoAndPlay("idle");

  // Shared attribute
    this.hit_radius = 12;
    this.name = name;
  };





  Interactable.prototype.check_hit_radius = function(obj){
    dist=Math.sqrt(Math.pow(this.x-obj.x,2) + Math.pow(this.y-obj.y,2));

    if(dist < obj.hit_radius+this.hit_radius)
    {
      console.log("hit");
      obj.was_hit_by(this);
      this.was_hit_by(obj);
    }
  }

  Interactable.prototype.was_hit_by = function(obj){
    console.log("hit by -> "+obj.name);
  }
  Interactable.prototype.update = function()
  {

  }

  window.Interactable = Interactable;
}(window));