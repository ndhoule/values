'use strict';

var assert = require('assert');
var eql = require('deep-eql');
var values = require('../');

describe('values', function() {
  it('should be a function', function() {
    assert(typeof values === 'function');
  });

  it('should have an arity of 1', function() {
    assert(values.length === 1);
  });

  it('should retrieve a list of all values from an object', function() {
    var source = { a: 'aaa', b: 'bbb', c: 'ccc' };

    assert(eql(
      values(source).sort(),
      ['aaa', 'bbb', 'ccc'].sort()
    ));
  });

  it('should ignore inherited properties', function() {
    var parent = { ignore: true };
    var child = Object.create(parent);
    child.a = 'aaa';
    child.b = 'bbb';
    child.c = 'ccc';

    assert(eql(
      values(child).sort(),
      ['aaa', 'bbb', 'ccc'].sort()
    ));
  });

  it('should work on arrays', function() {
    var array = [1, 2, 3];

    assert(eql(
      values(array),
      array
    ));
  });

  it('should work on string objects', function() {
    var string = new String('test');

    assert(eql(
      values(string),
      ['t', 'e', 's', 't']
    ));
  });
});
