/*
  * explain
  Given a function fn and a time i illiseconds t, reuturn a debounced version of that function.

  A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time.
  The debounced function should also receive the passed parameters.
*/

var debounce = function(fn, t) {
  let timer = null;

    return function(...args) {
      clearTimeout(timer); // cancel pre timer
      timer = setTimeout(() => { // set new timer -> after t milliseconds, it executes fn(...args)
        fn(...args)
      }, t);    
    }
};

const log = debounce(console.log, 100);
log('Hello'); 
log('Hello');
log('Hello'); // Logged at t = 100ms
// log = function(clearTimeout(time); timer = setTimeout(() => {...}, 100));
