/*
  * explain
  -  return a falt function like Array.flat() method without build-in Array.flat method
  
  * arr
  - multi-dimensional array

  * n
  - depth

  * return
  - flattening operation should only be done if the current depth of nesting is less than n.
*/

var flat = function (arr, n = 0) {
  const result = [];

  const recursive = (arr, n) => {
    for (let num of arr) {
      if (Array.isArray(num) === true && n > 0) {
        recursive(num, n - 1);
        continue;
      }
      result.push(num);
    }
  };
  recursive(arr, n);

  return result;
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];

flat(arr, 1);
