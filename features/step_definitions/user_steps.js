var sharedSteps = module.exports = function(){
  this.World = require('../support/browser');
  this.Given(/^I am on the home page$/, function (callback) {
    this.visit('/', next);
  });

  this.Then(/^I should see "([^"]*)"$/, function (arg1, callback) {
    this.browser.text('body').should.include.string(text);
    next();
  });
}
