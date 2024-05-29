/*
  * explain
  Given an array of asynchronous function s functions, return a new promise promise. Each function in the arra accepts no arguments and returns a promise.

  * promise resolves
    When all the promises returned from functions were resolved successfully. 
    The resolved value of promise should be an array of all the resolve values of promises in the same oreder as they were in the functions.

  * promise rejects
    When any of the promises returned from function were rejected. promise should also reject with the reason of the first rejection.

  Please solve it without using the built-in Promise.all() function
*/

var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    const answer = [];
    let resolveCount = 0;

    functions.forEach((func, index) => {
      func().then((res) => {
          answer[index] = res;
          resolveCount += 1;

          if (resolveCount === functions.length) {
            resolve(answer);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};

var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    const answer = [];
    let resolveCount = functions.length;

    functions.forEach((func, i) => {
      func().then((res) => {
          answer[i] = res; 
          console.log(--resolveCount === 0 && resolve(answer));
          --resolveCount === 0 && resolve(answer); // ? 이건 어떻게 동작을 하는걸까... 
        })
        .catch(reject);
    });
  });
};

var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    const answer = [];
    let resolveCount = functions.length;

    functions.forEach((func, i) => {
      func().then((res) => {
          answer[i] = res; 
          if (--resolveCount === 0) {
            resolve(answer);
          }
        })
        .catch(reject);
    });
  });
};