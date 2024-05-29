/*
  * explain
  - Given an integer array `nums`, a reduecer function `fn`, and an initial value `init`, return a reduced array.
  - A redeced array is created by applying the following operation: `val = fn(inni, num[0])`, `val = fn(val, nums[1])`, `val = fn(val, nums[2])`,
  - ... until every element in the array has been processed. The final value of val is returned.
  - If the length of the array is 0, it shoud return init.
  - Please solve it without using the built-in Array.reduce method.
*/

var reduce = function(nums, fn, init) {
  let currNum = init;

  for (let i = 0; i < nums.length; i++) {
    currNum += fn(currNum, nums[i]);
  }

  return currNum;
}