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
    _this.str_args = "";
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
    container.name = "monitor"+_this.id;
    stage.addChild(container);

    var temp = new createjs.Bitmap(contentManager.imgMonitor);
    container.addChild(temp);



    if(_this !== current_character)
    {
      container.visible = false;
    }
    else
    {
      container.addChild(_this.computer.txt);
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
      _this.computer.txt.text = "BUFFER OVERFLOW!"
    }
    console.log(_this.computer.ticks);
    if(input == 27)
    {
      _this.arr_funcs=State.prototype.Hacker_Input_Default
      var child = stage.getChildByName("monitor"+_this.id);
      stage.removeChild(child);
    }
    else if(input == KEYCODE_ENTER)
    {
      // Check if answer to q.
      // remove Enter Key
      _this.input.pop();
      var temp_answer = _this.computer.answers[_this.computer.questions.length-1];
      if(temp_answer == _this.str_args)
      {
        console.log("YOU ARE CORRECTO!");
        _this.computer.questions.pop();
      }
      _this.computer.txt.text += "\n"+_this.computer.questions[_this.computer.questions.length-1]+"\n";
      _this.str_args ="";
      console.log("test")
    }
    else
    {
      // **Why?: I added a for loop to  constantly get the computer.
      // Not only is it hefty, but its not usable. I shouldve linked
      // the too.. imagining in how it works, as if it were real... acctually
      // helps...
      _this.str_args +=(String.fromCharCode(_this.input.pop()));
      _this.computer.txt.text += _this.str_args[_this.str_args.length-1];

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
    _this.state = State.prototype.Hacker_Mimic;
  }
  State.prototype.Hacker_Mimic = function(_this)
  {

    _this.hack = false;
    _this.temp_arr = _this.arr_funcs.slice();
    _this.aX = 0;
    _this.aY = 0;
    _this.prevX = _this.x;
    _this.prevY = _this.y;
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
    _this.temp_arr = _this.arr_funcs.slice(0);
    _this.aX = 0;
    _this.aY = 0;
    _this.prevX = _this.x;
    _this.prevY = _this.y;

    _this.mimic_input.push(_this.input.slice(0));
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
      debugger;
      var time = createjs.Ticker.getTime()-levelTick;
      var ticks = (10-(time)/1000).toFixed(2);
      txt.text = ticks;
        if (ticks <= 0)
        {
          ticks = "Times up.";
          txt.text = "0.00"
          stage.update();
          gameState = State.prototype.TimesUpInit;
        }

      current_character.input = arr_keys;
      for(var i=0; i< arr_ent.length; i++)
      {
        Level.prototype.checkBounds(arr_ent[i]);
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
    State.prototype.Level_End = function()
    {

    }
    State.prototype.TimesUp = function()
    {

    }
    State.prototype.TimesUpInit = function()
    {
      var arr = stage.children;
      for(var i = 0; i < arr.length; i++)
      {
        arr[i].paused = true;
      }
      var overlay = new createjs.Bitmap(contentManager.imgLayout)
      overlay.alpha = 0.5;
      stage.addChild(overlay);

      var temp_txt = new createjs.Text("10.00", "36px Courier", "#76EE00");
      temp_txt.text = "Your Time is up.";

      temp_txt.y = canvas.height/2 - temp_txt.getMeasuredLineHeight();
      temp_txt.x = canvas.width/2;
      temp_txt.textAlign ="center";
      stage.addChild(temp_txt);

      var temp_txt_hint =new createjs.Text("10.00", "14px Courier", "#76EE00");
      temp_txt_hint.text = "'R' to restart \n\n'Space': action button.\n\n 'SHIFT' to shift backwards in time."
      temp_txt_hint.textAlign = "center";
      temp_txt_hint.x = canvas.width/2;
      temp_txt_hint.y = canvas.height/2+20;

      stage.addChild(temp_txt_hint);

      gameState = State.prototype.TimesUp;

    }
    // State.prototype.Game_ComputerScreen = function()
    // {
    //   var ticks = (10-(createjs.Ticker.getTime())/1000).toFixed(2);
    //   if (ticks < 0) ticks = "Times up.";
    //   txt.text = ticks;
    // }
  window.State = State;
}(window))