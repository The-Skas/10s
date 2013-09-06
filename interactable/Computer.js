(function (window)
{
  var Computer = function(max_ticks,launchers, lockOut_flag)
  {
    // Lockout for multiple timed computers.
    this.lockOut_flag = typeof lockOut_flag !== 'undefined' ? true : false;
    this.lockOut = false;
    this.lockOutInterval = 800;
    this.lastTime;

    var anim_obj ={idle: [0, 8, "idle"], lock:[9,9,"lock"], hacked:[10,10,"hacked"]};
    this.name = "computer"; this.img=contentManager.imgComputer;
    this.height = 64; this.width = 64;
    this.initialize(this.name, this.img, this.height, this.width, anim_obj);
    this.radius
    this.cracked = false;
    this.ticks = 0;
    this.txt = new createjs.Text("", "20px Courier", "#ff7700");
    this.txt.name = "text";
    this.txt.x = 87;
    this.txt.y = 48;
    this.max_ticks = max_ticks;
    if(max_ticks == undefined)
    {
      this.max_ticks = 100;
    }

    //

    this.hackers = [];
    this.launchers = launchers;
    if(launchers == undefined)
    {
      this.launchers =[];
    }
  }

  Computer.prototype = new Interactable();

  Computer.prototype.update = function()
  {
    // if(this.hackers.length > 0)
    // {
    //   for(var i = 0; i < this.hackers.length; i++)
    //   {
    //     for(var j =0; j < this.launchers.length;j++)
    //     {
    //       if(this.hackers[i].dead == false)
    //       {
    //         this.launchers[j].target=this.hackers[i];
    //         this.launchers[j].deployRocket();
    //       }
    //     }
    //   }
    // }
    if(this.lockOut_flag)
    {
      if(this.cracked)
      {
        if(this.lastTime + this.lockOutInterval < g_time)
        {
          this.txt.text = "SECURITY BREACH: \n LOCKING COMPUTER.";
          this.lockOut = true;
          this.gotoAndStop("lock");
          this.alpha = 0.4;
          this.paused = true;
        }
      }
    }

    if(this.lockOut)
    {
      this.gotoAndStop("lock");
    }
    else if(this.cracked)
    {
      this.gotoAndStop("hacked");
    }
  }
  Computer.prototype.check_hit_radius = function(obj){
    Interactable.prototype.check_hit_radius.call(this, obj);
  }

  window.Computer = Computer;
}(window))