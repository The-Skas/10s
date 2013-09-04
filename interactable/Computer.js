(function (window)
{
  var Computer = function(name, img, height, width)
  {
    var anim_obj ={idle: [0, 9, "idle"]};
    this.initialize(name, img, height, width, anim_obj);
    this.radius
    this.cracked = false;
    this.ticks = 0;
    this.txt = new createjs.Text("", "20px Courier", "#ff7700");
    this.txt.name = "text";
    this.txt.x = 87;
    this.txt.y = 48;
  }

  Computer.prototype = new Interactable();

  Computer.prototype.update = function()
  {

  }
  Computer.prototype.check_hit_radius = function(obj){
    Interactable.prototype.check_hit_radius.call(this, obj);
  }

  window.Computer = Computer;
}(window))