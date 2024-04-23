/*
  * explain
  - Given a function 'fn', return a new function taht is identical to the original functnion except that it ensures 'fn' is called at most once.
  - The first time the returned function is called, it should return the same result as 'fn'
  - Every subsequent time it is called, it should return `undefined`
  ! - Only First call returns correct answer
*/

var once = function (fn) {
  let count = 0;

  return function (...args) {
    count += 1;

    return count === 1 ? fn(...args) : undefined;
  }
};