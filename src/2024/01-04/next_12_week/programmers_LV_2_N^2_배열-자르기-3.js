// * 진짜 답...

function solution1(n, left, right) {
  const ans = [];

  while (left++ <= right) {
    const a = left % n,
      b = Math.ceil(left / n);
    if (!a) ans.push(n);
    else if (a < b) ans.push(b);
    else if (a < n) ans.push(a);
  }

  return ans;
}

function solution2(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}
