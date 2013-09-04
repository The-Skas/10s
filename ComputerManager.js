(function (window)
{
  var ComputerManager = function(arr_comps,door)
  {
    this.computers = arr_comps;
    this.door = door;
  }

  ComputerManager.prototype.update = function()
  {
    var comps_cracked = 0;
    for(var i = 0; i < this.computers.length; i++)
    {
      if(this.computers[i].cracked)
      {
        comps_cracked++;
      }
    }

    if(comps_cracked >= this.computers.length && this.door.open != true)
    {
      debugger;
      this.door.openDoor();
    }
  }

  ComputerManager.prototype.check_hit_radius = function()
  {

  }

  window.ComputerManager = ComputerManager;
}(window))