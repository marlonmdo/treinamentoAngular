(function(app){
    var Component = ng.core.Component;

    app.AppComponent = Component({
        selector: 'my-app',
        template:
          '<h1> Exercicio 1 - Horario Atual</h1>' +
          '<exibe-relogio></exibe-relogio>'
    })
    .Class({
        constructor: function AppComponent() { }
    });

})(window.app || (window.app = {}));