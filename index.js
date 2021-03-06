'use strict';

/*
 * Module dependencies.
 */

var keys = require('@ndhoule/keys');

/**
 * Returns an array containing all enumerable values from a `source` object.
 *
 * @name values
 * @api public
 * @category Object
 * @param {Object} source The object to retrieve values from.
 * @return {Array} An array of all the `source` object's values.
 * @example
 * values({ a: 1, b: 2, c: 3 });
 * //=> [1, 2, 3]
 */
var values = function values(source) {
  var ks = keys(source);
  var results = new Array(ks.length);

  for (var i = 0; i < ks.length; i += 1) {
    results[i] = source[ks[i]];
  }

  return results;
};

/*
 * Exports.
 */

module.exports = values;
