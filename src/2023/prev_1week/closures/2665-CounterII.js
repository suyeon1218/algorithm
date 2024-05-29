/*
  * explain
  - Write a function createCounter. It should accpet an initial integer 'init'. It shoud return an object with three functions.
  - increment() : increase the current value by 1 and the returns it.
  - decrement() : reduce the current value by q ans the returns it.
  - reset() : sets the current value to init and then returns it.
*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  const initNum = init;
  let num = init;

  const increment = () => {
    return num += 1;
  }

  const decrement = () => {
    return num -= 1;
  }

  const reset = () => {
    num = initNum;
    return num;
  }

  return {
    increment, decrement, reset
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */