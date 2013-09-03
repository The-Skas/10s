(function (window) {
    var Skelaton = function(monsterName, imgMonster) {
        this.initialize(monsterName, imgMonster);
    }

    Skelaton.prototype = Monster.prototype;
    // Skelaton.prototype = new Monster();

    Skelaton.prototype.update = function(){
      // I can call any function from another as long as I pass.. its values.

    }

    window.Skelaton = Skelaton;
}(window))