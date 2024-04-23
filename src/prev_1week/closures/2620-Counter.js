/*
  * explain: Given an integer n, return a counter function.
  * This function initiall y return n and then returns 1 more than tho previous value every subsequent time it called.
*/

var createCounter = function(n) {
  let num = n;
  return function() {
      return num++;
  };
};