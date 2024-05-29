/*
  * explain
  Given an object or array obj, return a compact ojbect.

  * compact object
  It's the same as the original object, except with keys containing falsy values removed, THis operation applies to the object and ansy nested objects.
  Arrays are considered objects where the indices are keys.
  A value is considered falsy whe Boolean(value) return false.

  You may assume the obj is the output of JSON.parse In other owrds, it is valid JSON.
*/

/**
 * @param {Object} obj
 * @return {Object}
 */

// * My slow solution...
var compactObject = function (obj) {
  const addObject = (obj, key, item) => {
    obj[key] = item;
  }

  const addArray = (arr, item) => {
    arr.push(item);
  }

  const addItem = (result, key, value) => {
    Array.isArray(result) === true 
      ? addArray(result, value)
      : addObject(result, key, value);
  }

  const recursive = (obj, parent) => {
    console.log(obj);
    const result = Array.isArray(obj)
      ? []
      : {};

    for (let key in obj) {
      const value = obj[key];

      if (value) {
        if (typeof(value) === 'object') {
          addItem(result, key, recursive(value, key));
          continue;
        }
        addItem(result, key, value);
      }
    }

    return result;
  }

  return recursive(obj);
};

// * another person solution
var compactObject = function(obj) {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const result = {};

  for (const key in obj) {
    const value = compactObject(obj[key]);
    if (Boolean(value)) {
      result[key] = value;
    }
  }
  return result;
};