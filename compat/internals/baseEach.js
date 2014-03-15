/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./baseForOwn', '../objects/isString', '../support'], function(baseForOwn, isString, support) {

  /**
   * Used as the maximum length an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /**
   * The base implementation of `_.forEach` without support for callback
   * shorthands or `thisArg` binding.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {Array|Object|string} Returns `collection`.
   */
  function baseEach(collection, callback) {
    var index = -1,
        iterable = collection,
        length = collection ? collection.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      if (support.unindexedChars && isString(iterable)) {
        iterable = iterable.split('');
      }
      while (++index < length) {
        if (callback(iterable[index], index, collection) === false) {
          break;
        }
      }
    } else {
      baseForOwn(collection, callback);
    }
    return collection;
  }

  return baseEach;
});
