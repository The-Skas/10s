(function (window) {
    var Hacker = function(monsterName, imgMonster) {
        this.initialize(monsterName, imgMonster);
        // Creates a clone of funcs
        debugger;
        this.arr_funcs = State.prototype.Hacker_Input_Default;
        // define our own type of input.
        // init object variables.
        this.type = "Hacker"
        this.name = this.id;
        this.speed *= 2.0;
        this.scaleX = 2.0;
        this.scaleY = 2.0;
        // used to do time stuff.
        this.mimic = false;
        // An array that stores an object
        // of type arr;
        this.mimic_input = [];
        this.state = State.prototype.Hacker_Default;
    }

    Hacker.prototype = new Character();
    // Update
    Hacker.prototype.update = function(){
      if (this.input.length != undefined)
      {
        if(this.input[this.input.length-1] == 16)
        {
          this.state = State.prototype.Hacker_MimicInit;
          current_character = new Hacker("player1", contentManager.imgHacker);
          arr_ent.push(current_character);
          stage.addChild(current_character);
          this.input.pop();
          hash_keydown = {};
          arr_keys = [];
          return;
        }
      }
      this.state(this);

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
      if(obj.name == "computer")
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
          arr_keys = [];
          delete this.hack;
        }
      }
      if(obj instanceof Rocket)
      {
        arr_ent.splice(this);
      }
    }
    window.Hacker = Hacker;
}(window))