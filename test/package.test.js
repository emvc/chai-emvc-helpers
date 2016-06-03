/* global describe, it, expect */

var emvc = require('..');

describe('chai-emvc-function', function() {

  it('should export function', function() {
    expect(emvc).to.be.an('function');
  });

});
