var should = require('should');
var objectKeysToCase = require('..');
var camelCase = require('camel-case');

describe('object-keys-to-case', function() {
  it('should turn all the keys to camel-case', function() {
    var foo = {
      Bar: 'buz',
      PingPong: 'Woo'
    };
    objectKeysToCase(foo, camelCase);
    foo.should.have.keys('bar', 'pingPong');
  });

  it('should turn all the keys to lowercase', function() {
    var foo = {
      Bar: 'buz',
      PingPong: 'Woo'
    };

    function toLowerCase(str) {
      return str.toLowerCase();
    }

    objectKeysToCase(foo, toLowerCase);
    foo.should.have.keys('bar', 'pingpong');
  })
})
