(function (window)
{
  var Computer = function(name, img, height, width)
  {
    var anim_obj ={idle: [0, 9, "idle"]};
    this.initialize(name, img, height, width, anim_obj);
    this.radius
    this.cracked = false;
  }

  Computer.prototype = new Interactable();

  Computer.prototype.update = function()
  {

  }

  window.Computer = Computer;
}(window))