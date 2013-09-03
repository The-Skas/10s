(function (window)
{
  var Rocket = function(name, img, height, width)
  {
    this.img = contentManager.imgRocket;
    debugger;
    // Class vars
    this.name = "rocket"
    this.height = 16;
    this.width = 16;
    this.anim_obj = {idle: [0, 0, "idle"]}
    this.target = current_character;
    this.vX = 0;
    this.vY = 0;
    this.aX = 0;
    this.aY = 0;
    this.max_speed = 0.1;
    //
    // init stuff;
    this.initialize(this.name, this.img, this.height, this.width, this.anim_obj);

    this.y = this.x = 500;
    this.hit_radius = 5;
    this.target = current_character;
    arr_ent.push(this);
  }

  Rocket.prototype = new Interactable();

  Rocket.prototype.update = function()
  {
    this.target = current_character;
    this.calculateAngle();

    var radians = Math.degToRad(this.rotation);
    debugger;
    this.x += 2 * Math.cos(radians);
    this.y += 2 * Math.sin(radians);
  }
  Rocket.prototype.calculateAngle = function()
  {
    var xDiff = this.target.x - this.x;
    var yDiff = this.target.y-this.y;
    var angleDeg=Math.radToDeg(Math.atan2(yDiff, xDiff));
    var posAngleDeg = Math.toPosAngle(angleDeg);
    // var negAngleDeg = Math.toNegAngle(angleDeg);
    this.rotation = Math.toPosAngle(this.rotation);

    var diff = posAngleDeg - this.rotation;
    debugger;
    if(diff > 180)
    {
      diff = diff - 360;
    }
    else if(diff < -180)
    {
      diff = 360 - diff;
    }
    var sign = Math.getSign(diff);
    if(Math.floor(createjs.Ticker.getTime())%50 == 0)
      console.log(diff);
    // I could be adding negative numbers so incase.
    // I use it else where.. it would be annoying
    this.rotation += sign*Math.min(Math.abs(diff),10);
  }
  window.Rocket = Rocket;
}(window))