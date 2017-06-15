(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var RelogioService = app.RelogioService;
  var ExibeRelogioComponent = app.ExibeRelogioComponent;
  var AppComponent = app.AppComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ExibeRelogioComponent],
    providers: [RelogioService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));