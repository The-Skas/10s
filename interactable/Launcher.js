(function (window)
{
  var Launcher = function()
  {
    this.name = "launcher"
    this.img = contentManager.imgLauncher;
    this.height = 64;
    this.width = 64;
    var anim_obj = {idle: [0, 0, "idle"]};
    this.initialize(this.name, this.img, this.height, this.width, anim_obj);
    this.lastTime=createjs.Ticker.getTime();

    this.interval = 100000;
    this.target = null;
  }

  Launcher.prototype = new Interactable();
  Launcher.prototype.update = function()
  {
    this.curr_hackers = Hacker.prototype.arrHackers.slice(0);
    this.curr_hackers.push(current_character);
    for(var i =0; i < this.curr_hackers.length; i++)
    {
      if(this.curr_hackers[i].dead == false)
      {
        this.target = this.curr_hackers[i];
        this.deployRocket();
        return;
      }
    }
  }
  Launcher.prototype.deployRocket = function()
  {
    if(this.target !== null || this.target !== undefined)
    {
      if(this.lastTime+this.interval < createjs.Ticker.getTime())
      {
        var rocket = new Rocket(this.x,this.y,this.target);
        rocket.x = this.x;
        rocket.y = this.y;
        // Rule, allow classes to handle
        var ind=stage.getChildIndex(this)
        stage.addChildAt(rocket,ind+1);

        this.lastTime = createjs.Ticker.getTime();
      }
    }
  }
  Interactable.prototype.was_hit_by = function(obj){
    console.log("hit by -> "+obj.name);
  }

  window.Launcher = Launcher;
}(window))