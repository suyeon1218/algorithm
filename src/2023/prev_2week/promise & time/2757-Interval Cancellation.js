/*
  * explain
  Given 1. function fn, 2. an array of arguments args, 3. and an interal time t
  return a cacel function 4. cancelFn
  
  - fn: The function fn should be called with args immediately an then called angain every t milliseconds until cancelFn is called.
*/

var cancellable = function(fn, args, t) {
  const timer = setInterval(() => {fn(...args)}, t); // ! setInterval's first parameter must be callback function.
  const cancelFn = () => clearInterval(timer);

  return cancelFn;
};
