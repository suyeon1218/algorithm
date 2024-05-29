/*
  * explain: CreateHelloWorld Functionshould return a new function that always returns "Hello World"
*/

const createHelloWorld = function() {
  return function(...args) {
      return 'Hello World';
  }
};