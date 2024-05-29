/*
  * explain
  - When Given two promisese given, return a new promise. 
  - 'promise1' and 'promise2' will both resolve with a number. The returned promise should resolve with the sum of the tow numbers.
*/

var addTwoPromises = async function(promise1, promise2){
  let sumNumber = 0;

  sumNumber += await promise1;
  sumNumber += await promise2;

  return sumNumber;
}