(function (window) {
    var Hacker = function(monsterName, imgMonster) {
        this.initialize(monsterName, imgMonster);
        // Creates a clone of funcs
        this.arr_funcs = State.prototype.Hacker_Input_Default;
        // define our own type of input.
        // init object variables.
        this.type = "Hacker"
        this.name = this.id;
        this.speed *= 2.0;
        this.scaleX = 1.0;
        this.scaleY = 1.0;
        // used to do time stuff.
        this.mimic = false;
        // An array that stores an object
        // of type arr;
        this.dead = false;
        this.mimic_input = [];
        this.state = State.prototype.Hacker_Default;
    }
    // Call first
    Hacker.prototype = new Character();
    // Update
    Hacker.prototype.arrHackers = [];

    Hacker.prototype.update = function(){
      try
      {
        if (this.input.length != undefined)
        {
          // if(this.input[this.input.length-1] == 16)
          // {
          //   if(levels[ind_lvl].lives > 0)
          //   {
          //     levels[ind_lvl].lives--;

          //     stage.removeAllChildren();

          //     this.state = State.prototype.Hacker_MimicInit;
          //     Hacker.prototype.arrHackers.push(this);
          //     this.input.pop();
          //     arr_ent =[];
          //     hash_keydown = {};
          //     arr_keys = [];
          //     levels[ind_lvl].level();
          //     return;
          //   }
          // }
        }

      this.state(this);
      }
      catch(e){};
    }

    Hacker.prototype.evalInput = function()
    {
      for(var i = this.input.length-1; i >= 0; i--)
      {
        // ReverseIterate to check the top of input stack first
        // this inturn allows the most recent input to
        // to be checked first, and if a valid input, will
        // remove the function from 'temp_arr' to stop any
        // other inputs from using that func

        // **Skas says*** The funcs are set again on each
        // update

        // Had a one off error that drove me crazy.
        // put a -1 eh... remember less is more. what?
        for(var j = 0; j < this.temp_arr.length ; j++)
        {
          // returns a true if splice is done.
          if(this.temp_arr[j](this.input[i], this))
          {
            j--;
          }
        }
      }
        // call move function
    }

    Hacker.prototype.was_hit_by = function(obj)
    {
      Character.prototype.was_hit_by.call(this, obj);
      if(obj instanceof Computer)
      {
        //change game state to bring up a computer?

        //What evaluate first? Hit.. is always next.
        // so let update handle the stage stuff..
        if(this.hack)
        {
          this.JackedInInit(this, obj);
                          // Takes in an array of funcs
          this.arr_funcs = State.prototype.Hacker_Input_JackedIn;

          // Doesnt go  to hack again!
          // arr_keys = [];
          delete this.hack;
        }
      }
      if(obj instanceof Rocket
        && this.dead == false
        && this.currentAnimation !=="warp"
        && this.currentAnimation !=="end")
      {
        this.dead = true;
        this.gotoAndPlay("dead");
        // var t_ind = arr_ent.indexOf(this);
        // arr_ent.splice(t_ind,1);
        this.state = null;
      }
      if(obj instanceof Door &&
        obj.currentAnimation == "opened")
      {
       if(this.currentAnimation !=="warp"
          && this.currentAnimation !=="end")
       {
        this.gotoAndPlay("warp");
        this.state = function(){}
       }
      }
  }
    window.Hacker = Hacker;
}(window))