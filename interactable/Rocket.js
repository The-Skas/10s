(function (window)
{
  var Rocket = function(x,y,target)
  {
    this.img = contentManager.imgRocket;
    // Class vars
    this.name = "rocket"
    this.height = 16;
    this.width = 16;
    this.anim_obj = {idle: [0, 0, "idle"]}
    this.vX = 0;
    this.vY = 0;
    this.acc=0.05;
    this.max_speed = 10;
    //
    // init stuff;
    this.initialize(this.name, this.img, this.height, this.width, this.anim_obj);

    this.target = target;
    this.x = x;
    this.y = y;
    this.hit_radius = 5;

    arr_ent.push(this);
  }

  Rocket.prototype = new Interactable();

  Rocket.prototype.update = function()
  {
    if(this.target !== null &&
      this.target.dead == false)
    {
      this.calculateAngle();
    }
    this.vX += this.acc;
    this.vY += this.acc;
    this.vX = Math.min(this.max_speed, this.vX);
    this.vY = Math.min(this.max_speed, this.vY);
    var radians = Math.degToRad(this.rotation);
    this.x += this.vX * Math.cos(radians);
    this.y += this.vY * Math.sin(radians);
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
  Rocket.prototype.was_hit_by = function(obj)
  {
    if (obj instanceof Hacker)
    {
      debugger;
      stage.removeChild(this);
      var t_ind = arr_ent.indexOf(this);
      arr_ent.splice(t_ind,1);
    }
  }
  window.Rocket = Rocket;
}(window))