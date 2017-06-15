(function(app) {
  var Class = ng.core.Class;
  app.RelogioService = Class({
    constructor: function RelogioService() {
    },
    getHorarioAtual: function() {
      var data = new Date();
      return data;
    },
    generateRelogio: function(delay, callback) {
      var self = this;
      callback(this.getHorarioAtual());
      setInterval(function() {
        callback(self.getHorarioAtual());
      }, delay);
    }
  });
})(window.app || (window.app = {}));