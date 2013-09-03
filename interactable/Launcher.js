(function (window)
{
  var Launcher = function(name, img, height, width)
  {
    debugger;
    var anim_obj = {idle: [0, 0, "idle"]};
    this.initialize(name, img, height, width, anim_obj);
  }

  Launcher.prototype = new Interactable();

  Interactable.prototype.was_hit_by = function(obj){
    console.log("hit by -> "+obj.name);
  }

  window.Launcher = Launcher;
}(window))