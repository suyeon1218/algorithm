// * 다른 사람의 풀이

/*
  1. getAnswer 로 for 문을 합쳤음
  2. every, some 메서드를 사용해서 for 문을 하나 줄였음
*/

function solution(arrayA, arrayB) {
  const aResult = getAnswer(arrayA, arrayB);
  const bResult = getAnswer(arrayB, arrayA);

  return aResult > bResult ? aResult : bResult;
}

function getAnswer(A, B) {
  A.sort((a, b) => a - b);
  for (let i = A[0]; i > 1; i--) {
    if (A.every((a) => a % i === 0) && !B.some((b) => b % i === 0)) return i;
  }
  return 0;
}
