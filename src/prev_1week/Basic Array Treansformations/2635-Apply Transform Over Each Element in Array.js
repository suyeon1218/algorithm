/*
  * explain
  - Gien a integer array 'arr' and a mapping function 'fn', return a new array with a transformation applied to each element.
  - The returnes array should be created such taht `returnedArray[i] = fn(arr[i], i)`
  ! - Pleas solve it without the built-in Array.map method
*/

var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }

  return arr;
}