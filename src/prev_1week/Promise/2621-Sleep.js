/*
  * explain
  - Given a positive integer mills, 
 ! - write an asynchronous function tat sleeps form mills milliseconds. 
  - It can resolve any value.
*/

async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}