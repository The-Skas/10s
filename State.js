(function (window) {
  var State = function()
  {

  }

  // Hacker Function States
  Hacker.prototype.JackedInInit = function(_this,obj)
  {
    _this.computer = obj;
    _this.computer.questions =[];
    _this.computer.answers = {};
    _this.computer.str_args = "";
    _this.computer.ticks = 0;
    for(var i = 0; i < 5; i++)
    {
      _this.computer.questions[i] =""
      var integer = Math.getRandomInt(0,9);
      var operator;
      // First
      _this.computer.questions[i] += integer
      for(var j=0; j<2; j++)
      {
        integer = Math.getRandomInt(0,9);
        var operator=Math.getRandomObjArr(["*","+","-"]);
        _this.computer.questions[i] += operator + integer;
      }

      _this.computer.answers[i] = eval(_this.computer.questions[i]);
      // _this.questions[i] = evv
    }
    var container=new createjs.Container();
    container.name = "monitor"
    stage.addChild(container);

    var temp = new createjs.Bitmap(contentManager.imgMonitor);
    container.addChild(temp);

    var string = _this.computer.questions[_this.computer.questions.length-1] + "?\n"
    var temp = new createjs.Text(string, "20px Courier", "#ff7700");
    temp.name = "text"
    temp.x = 87;
    temp.y = 48;
    container.addChild(temp);

    _this.computer.txt = temp;
    if(_this !== current_character)
    {
      container.visible = false;
    }
    // Populate questions
  }

  // ****By using the passed in input, and the _this.input (an arr)
  // gives me greater range in manipulating inputs.
  Hacker.prototype.JackedIn = function(input, _this)
  {// esc
    _this.computer.ticks++;
    if(_this.computer.ticks > 50)
    {
      _this.computer.cracked = true;
    }
    console.log(_this.computer.ticks);
    if(input == 27)
    {
      _this.arr_funcs=State.prototype.Hacker_Input_Default
      var child = stage.getChildByName("monitor");
      while(child !== null)
      {
        stage.removeChild(child);
        child = stage.getChildByName("monitor");
      }
    }
    else if(input == KEYCODE_ENTER)
    {
      // Check if answer to q.
      // remove Enter Key
      _this.input.pop();
      var temp_answer = _this.computer.answers[_this.computer.questions.length-1];
      debugger;
      if(temp_answer == _this.computer.str_args)
      {
        console.log("YOU ARE CORRECTO!");
        _this.computer.questions.pop();
      }
      _this.computer.txt.text += "\n"+_this.computer.questions[_this.computer.questions.length-1]+"\n";
      _this.computer.str_args ="";
      console.log("test")
    }
    else
    {
      // **Why?: I added a for loop to  constantly get the computer.
      // Not only is it hefty, but its not usable. I shouldve linked
      // the too.. imagining in how it works, as if it were real... acctually
      // helps...
      _this.computer.str_args +=(String.fromCharCode(_this.input.pop()));
      _this.computer.txt.text += _this.computer.str_args[_this.computer.str_args.length-1];

      if(_this.computer.txt.text.length % 28 == 0)
      {
        _this.computer.txt.text += "\n"
      }

      if(_this.computer.txt.text.length > 375)
      {
        _this.computer.txt.text ="";
      }
    }
  }
  Hacker.prototype.JackedInExit = function(_this)
  {
    delete _this.computer;
  }
  //*****************
  // Default State
  //****************
  Hacker.prototype.evalMove = function(input, _this)
    {
      var char_key=input
      if(char_key == KEYCODE_A)
      {
        _this.aX = -1;
        _this.aY = 0;
        _this.gotoAndPlay("left")
      }
      else if(char_key == KEYCODE_D)
      {
        _this.aX = 1;
        _this.aY = 0;
        _this.gotoAndPlay("right")
      }
      else if(char_key == KEYCODE_W)
      {
        _this.aY = -1;
        _this.aX = 0;
        _this.gotoAndPlay("top")
      }
      else if(char_key == KEYCODE_S)
      {
        _this.aY = 1;
        _this.aX = 0;
        _this.gotoAndPlay("down");
      }
      else
      {
        _this.aY = 0;
        _this.aX = 0;
        return false;
      }

      // Cuts out function to not repeat itself in check;
      var ind=_this.temp_arr.indexOf(_this.evalMove);
      _this.temp_arr.splice(ind, 1);

      _this.aX = Math.min(_this.aX,2.0);
      _this.aY = Math.min(_this.aY,2.0);
      return true;
    }
    // Hacker-JackedIn
    // This function sets this.hack to true, so that you need
    // space to make it work.
    Hacker.prototype.evalHack = function(input, _this)
    {
    if(input == KEYCODE_SPACE)
      {
        var ind=_this.temp_arr.indexOf(_this.evalShoot);
        _this.temp_arr.splice(ind, 1);
        _this.hack = true;
      }
    }

  //**** Update State Handler ****
  State.prototype.Hacker_MimicInit = function(_this)
  {
    _this.index_mimic = 0;
    debugger;
    _this.state = State.prototype.Hacker_Mimic;
    _this.x = 0;
    _this.y = 0;
    _this.prevX = 0;
    _this.prevY = 0;
    debugger;
  }
  State.prototype.Hacker_Mimic = function(_this)
  {
    debugger;

    _this.hack = false;
    _this.temp_arr = _this.arr_funcs.slice();
    _this.aX = 0;
    _this.aY = 0;
    _this.prevX = _this.x;
    _this.prevY = _this.y;
    debugger;
    var i = _this.index_mimic;
    _this.input = _this.mimic_input[i] ||
      _this.mimic_input[_this.mimic_input.length-1];
    _this.index_mimic++;

    if(i > 1000)
    {
      _this.state = State.prototype.Hacker_MimicExit;
      _this.state = State.prototype.Hacker_Default;
    }


    _this.evalInput();
    // I can call any function from another as long as I pass.. its values.

    _this.vX = _this.aX * _this.speed;
    _this.vY = _this.aY * _this.speed;
    _this.x += _this.vX;
    _this.y += _this.vY;
  }
  State.prototype.Hacker_MimicExit = function(_this)
  {
    delete _this.index_mimic;
    delete _this.mimic_input;
  }
  State.prototype.Hacker_Default = function(_this)
  {

    _this.hack = false;
    _this.temp_arr = _this.arr_funcs.slice();
    _this.aX = 0;
    _this.aY = 0;
    _this.prevX = _this.x;
    _this.prevY = _this.y;

    _this.mimic_input.push(_this.input.slice());
    _this.evalInput();
    // I can call any function from another as long as I pass.. its values.

    _this.vX = _this.aX * _this.speed;
    _this.vY = _this.aY * _this.speed;
    _this.x += _this.vX;
    _this.y += _this.vY;

  }
    //**** Input Function handlers *****
    State.prototype.Hacker_Input_Default = [Hacker.prototype.evalMove, Hacker.prototype.evalHack];

    State.prototype.Hacker_Input_JackedIn = [Hacker.prototype.JackedIn];
    // *****End Input States ****
 // End Hacker States
 //*****************
 // stage.tick() states.
   State.prototype.Game_Default = function()
   {
    var time = createjs.Ticker.getTime()-levelTick;
    var ticks = (10-(time)/1000).toFixed(2);
      if (ticks < 0) ticks = "Times up.";
      txt.text = ticks;
      current_character.input = arr_keys;
      for(var i=0; i< arr_ent.length; i++)
      {
        arr_ent[i].update();
        for(var j = 1+i; j < arr_ent.length; j++)
        {
          arr_ent[i].check_hit_radius(arr_ent[j]);
        }
      }
    }
    State.prototype.Game_Title = function()
    {

    }
    // State.prototype.Game_ComputerScreen = function()
    // {
    //   var ticks = (10-(createjs.Ticker.getTime())/1000).toFixed(2);
    //   if (ticks < 0) ticks = "Times up.";
    //   txt.text = ticks;
    // }
  window.State = State;
}(window))