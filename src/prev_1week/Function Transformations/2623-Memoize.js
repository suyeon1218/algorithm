/*
  * explain
  - return memoized version of `fn` function.
 ! - memoized function is not called twice with the same input. Instead It will return a cached value
  - sum: accpets two integers a and b and returns a + b
  - fib: accepts a single integer n and return fibonachi number
  - factorial: acccepts a single integer n and return factorial number
*/

function memoize(fn) {
  let cache = new Map();

  return function(...args) {
    const key = args.join(',');

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const value = fn(...args);

      cache.set(key, value);
      return value;
    }
  }
}