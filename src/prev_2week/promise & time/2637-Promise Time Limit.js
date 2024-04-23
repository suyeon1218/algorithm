/*
  * explain
  Given an asynchronous function fn, and a time t in milliseconds, return a new time limited version of the input function.

  - fn: fn takes arguments provided to the time limited function.

  - the time limited function should follow these roulse:
    - If the fn complete within the time limit of t millisecons, the time limited function should resolve with the result.
    - If the execution of the fn exceeds the time limit, the time limited function should reject with the string 'Time Limit Exceeded'.
*/

// ! Promise.race method

var timeLimit = function (fn, t) {
  return async function (...args) {
    const completePromise = fn(...args);
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limt  Exceeded');
      }, t)
    });

    return Promise.race([completePromise, timeoutPromise]);
  }
};