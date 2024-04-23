/*
  * explain
  - The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x)))
*/

var compose = function(functions) {
  return function(x) {
    let currValue = x;
    
    for (let i = functions.length - 1; i >= 0; i--) {
      currValue = functions[i](currValue);
    }

    return currValue;
  }
}