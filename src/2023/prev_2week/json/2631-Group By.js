/*
  * explain
  Write code that enhances all arrays such that you can call the array .groupBy(fn) method on any array and
  it will return an grouped version of the array.

  A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
  
  The provided callback fn will accept an item in the array and return a string key.

  The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

  Please solve it without lodash's _.groupBy function.
*/

// object
Array.prototype.groupBy = function(fn) {
  const group = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);

    if (group[key] === undefined) {
      group[key] = [];
    }
    group[key].push(this[i]);
  }

  return group;
};

// reduce
Array.prototype.groupBy = function(fn) {
  return this.reduce((result, element) => {
    const key = fn(element);
    result[key] ||= [];
    result[key].push(element);
    return result;
  }, {})
}

// groupBy method
Array.prototype.groupBy = function(fn) {
  return _.chain(this).groupBy(fn);
}

Array.prototype._groupBy = function(fn) {
  return _(this).groupBy(fn);
}
