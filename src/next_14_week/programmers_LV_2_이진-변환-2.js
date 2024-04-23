// ! 정규표현식으로 0 없애는 방법도 있음

function solution(s) {
  var ans = [0, 0];
  while (s !== '1') {
    const oldLen = s.length;
    s = s.replace(/0/g, '');
    const newLen = s.length;
    s = newLen.toString('2');

    ans[1] += oldLen - newLen;
    ans[0]++;
  }

  return ans;
}
