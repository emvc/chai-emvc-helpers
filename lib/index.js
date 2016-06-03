module.exports = function(chai, _) {
  var Test = require('./test');

  chai.emvc = chai.emvc || {};
  chai.emvc.helper = function(setup, controller, action) {
    return new Test(setup, controller, action);
  };
  chai.emvc.dynamicHelper = function(setup, controller, action) {
    return new Test(setup, controller, action, true);
  };
};
