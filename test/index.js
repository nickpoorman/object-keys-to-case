var should = require('should');
var objectKeysToLowercase = require('..');
var camelCase = require('camel-case');

describe('object-keys-to-case', function() {
  it('should turn all the keys to camel-case', function() {
    var foo = {
      Bar: 'buz',
      PingPong: 'Woo'
    };
    objectKeysToLowercase(foo, camelCase);
    foo.should.have.keys('bar', 'pingPong');
  })
})
