var zombie = require('zombie')
  , HTML5  = require('html5')
  , should = require('should')
  , server = require('../../server');
  var Browser = require('zombie');

var World = module.exports = function(){
  this.browser = new Browser({runScripts:true, debug:true, htmlParser: HTML5});

  this.page = function(path){
    return "http://localhost:" + server.app.address().port + path
  };

  this.visit = function(path, callback){
    this.browser.visit( this.page(path), function(err, browser, status){
      callback(err, browser, status);
    });
  };
};
