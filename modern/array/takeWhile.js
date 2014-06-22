/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../utility/callback', './slice'], function(callback, slice) {

  /**
   * Creates a slice of `array` with elements taken from the beginning. Elements
   * are taken until the predicate returns falsey. The predicate is bound to
   * `thisArg` and invoked with three arguments; (value, index, array).
   *
   * If a property name is provided for `predicate` the created "_.pluck" style
   * callback returns the property value of the given element.
   *
   * If an object is provided for `predicate` the created "_.where" style callback
   * returns `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function|Object|string} [predicate=identity] The function called
   *  per element.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.takeWhile([1, 2, 3], function(n) { return n < 3; });
   * // => [1, 2]
   *
   * var characters = [
   *   { 'name': 'barney',  'employer': 'slate', 'blocked': true },
   *   { 'name': 'fred',    'employer': 'slate' },
   *   { 'name': 'pebbles', 'employer': 'na',    'blocked': true }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.pluck(_.takeWhile(characters, 'blocked'), 'name');
   * // => ['barney']
   *
   * // using "_.where" callback shorthand
   * _.pluck(_.takeWhile(characters, { 'employer': 'slate' }), 'name');
   * // => ['barney', 'fred']
   */
  function takeWhile(array, predicate, thisArg) {
    var index = -1,
        length = array ? array.length : 0;

    predicate = callback(predicate, thisArg, 3);
    while (++index < length && predicate(array[index], index, array)) { }
    return slice(array, 0, index);
  }

  return takeWhile;
});
