/*
  * explain
  - Given a function fn, an array or arguments args, and a timeout t in milliseconds,
  return a cancel function cancelFn
  - After a delay of t, fn should be called with args passed as parameteers unless cancelFn was called first. In that cas, fn should never be called.
*/

var cancellable = function (fn, args, t) {
  const timer = setTimeout(() => fn(...args), t);
  const cancelFn = () => clearTimeout(timer);

  return cancelFn; // setTimeout 의 id 를 저장해놓음
};

const cancel = cancellable(fn, args, t);

setTimeout(() => {
  cancel();
  console.log(result); // [{"time":20,"returned":10}]
}, 50); // 50초가 지나면 cancle()이 실행되면서 timer 가 실행되지 않고 취소됨 
