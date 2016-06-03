/* global describe, it, expect */

var plugin = require('..')
  , Test = require('../lib/test');

describe('plugin', function() {

  var chai = {};
  plugin(chai);

  it('should add emvc helper to chai', function() {
    expect(chai.emvc).to.be.an('object');
    expect(chai.emvc.helper).to.be.a('function');
    expect(chai.emvc.dynamicHelper).to.be.a('function');
  });

  describe('when helper is invoked', function() {
    var test = chai.emvc.helper();

    it('should return test wrapper', function() {
      expect(test).to.be.an.instanceOf(Test);
    });
  });

  describe('when dynamicHelper is invoked', function() {
    var test = chai.emvc.dynamicHelper();

    it('should return test wrapper', function() {
      expect(test).to.be.an.instanceOf(Test);
    });
  });

});
