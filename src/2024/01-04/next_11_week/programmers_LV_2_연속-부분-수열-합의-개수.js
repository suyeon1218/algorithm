// ! 인재님 피자 문제 덕에 쉽게 풀었다 ㅠㅠ

function solution(elements) {
  const answer = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;

    for (let j = 0; j < elements.length; j++) {
      const index = (i + j) % elements.length;
      sum += elements[index];

      answer.add(sum);
    }
  }

  return answer.size;
}
