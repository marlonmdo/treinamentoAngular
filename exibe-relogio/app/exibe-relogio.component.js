(function(app){
  var Component = ng.core.Component;
  var RelogioService = app.RelogioService;

  app.ExibeRelogioComponent = Component({
      selector: 'exibe-relogio',
      template: '<p> {{horarioAtual}} </p>'
  })
  .Class({
      constructor: [RelogioService, function ExibeHoraComponent(relogioService){
          var self = this;
          relogioService.generateRelogio(1000, function(horarioAtual){
              self.horarioAtual = horarioAtual;
          });
      }]
  });
})(window.app || (window.app = {}));