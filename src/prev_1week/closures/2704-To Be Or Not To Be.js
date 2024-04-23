/*
 * explain: Wirte a function expect(val) that contains toBe(val) Function and notToBe(val) Function.
 * toBe(val) : accept another valu and returns 'true' if the two values === each other. If they are not eqaul, it shoud throw an error 'Not Equal'
 * noToBe(val) : accept another values ans returns 'false' if the two values !== each other. If they are equal, it shoud throw an error 'Equal'
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val1) {
  const toBe = function (val2) {
    if (val1 === val2) {
      return true;
    } else {
      throw new Error('Not Equal');
    }
  };
  const notToBe = function (val2) {
    if (val1 !== val2) {
      return true;
    } else {
      throw new Error('Equal');
    }
  };

  return {
    toBe,
    notToBe,
  };
};
