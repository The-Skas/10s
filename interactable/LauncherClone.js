(function (window)
{
  var LauncherClone = function(target)
  {
    this.name = "launcher"
    this.img = contentManager.imgLauncher;
    this.height = 64;
    this.width = 64;
    var anim_obj = {idle: [0, 0, "idle"]};
    this.initialize(this.name, this.img, this.height, this.width, anim_obj);
    this.speed = 2;
    this.interval = 200;
    this.lastTime=createjs.Ticker.getTime()-this.interval;
    // this.target = target;
  }

  LauncherClone.prototype = new Interactable();
  LauncherClone.prototype.update = function()
  {
    // this.curr_hackers = Hacker.prototype.arrHackers.slice(0);
    // this.curr_hackers.push(current_character);
    // for(var i =0; i < this.curr_hackers.length; i++)
    // {
    //   if(this.curr_hackers[i].dead == false)
    //   {
    //     this.target = this.curr_hackers[i];
    //     this.deployRocket();
    //     return;
    //   }
    // }

    this.deployRocket();
  }
  LauncherClone.prototype.deployRocket = function()
  {

      if(this.lastTime+this.interval < createjs.Ticker.getTime())
      {
        var rocket = new Rocket(this.x,this.y,this.target,this.speed);
        rocket.x = this.x;
        rocket.y = this.y;
        // Rule, allow classes to handle
        var ind=stage.getChildIndex(this)
        stage.addChildAt(rocket,ind+1);

        this.lastTime = createjs.Ticker.getTime();
      }
  }


  window.LauncherClone = LauncherClone;
}(window))