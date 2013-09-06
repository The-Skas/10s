(function (window)
{
  var Door = function(temp_expression)
  {
    if(temp_expression !== undefined)
    {
      this.temp_expression = temp_expression;
    }
    this.height = 64;
    this.width = 64;
    this.img = contentManager.imgDoor;
    this.name = "door";
    this.open = false;
    var anim_obj = {idle: [0, 0, "idle"],
                    open: [0, 18, "opened"],
                    opened: [19, 26, "opened"]};
    this.initialize(this.name, this.img, this.height, this.width, anim_obj);
    this.hit_radius = 5;
  }

  Door.prototype = new Interactable();

  Door.prototype.was_hit_by = function(obj){
    // console.log("hit by -> "+obj);
    if(this.open && this.currentAnimation == "opened")
    {
      if(obj instanceof Hacker)
      {
        if(obj.currentAnimation == "end")
        {
          // resets ents, input, and stage.
        arr_keys = [];
        ind_lvl++;
        gameState = State.prototype.Level_EndInit;
        }
      }
    }
  }

  Door.prototype.update = function(){
    if(eval(this.temp_expression))
    {
      debugger;
      this.openDoor();
    }
  }
  // Door.prototype.check_hit_radius = function(obj)
  // {
  //   if (this.open)
  //   {
  //     console.log("OBENZ!");
  //   }
  //   console.log(this.radius);
  // }
  Door.prototype.openDoor = function()
  {
    if(this.open == false)
    {
      this.open = true;
      this.gotoAndPlay("open");
    }
  };
  window.Door = Door;
}(window))