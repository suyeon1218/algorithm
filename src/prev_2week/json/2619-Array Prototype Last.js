/*
  * explain
  Write code that enhances all arrays such taht you can call the array.last() method on any array and
  it will return the last element. If there are no elements in the array, it should return -1

  You may assume the array is the output of JSON.parse
*/

Array.prototype.last = function() {
  const len = this.length;

  return len === 0 ? -1 : this[len - 1];
}