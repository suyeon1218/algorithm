// ! 시도 1 -> padStart 로 붙여서 각 자리수 일치하는지 비교
// ! 시도 2 -> padStart 없이 length 로 비교
// ! 둘다 9, 10 시간초과

function solution(numbers) {
  const answer = [];

  for (const num of numbers) {
    const originBinary = num.toString(2);
    const originLength = originBinary.length;
    let compareNum = num + 1;

    while (1) {
      const compareBinary = compareNum.toString(2);
      const compareLength = compareBinary.length;
      let diff = compareLength - originLength;

      for (let i = 0; i < originLength; i++) {
        if (
          compareBinary[i + (compareLength - originLength)] !== originBinary[i]
        ) {
          diff += 1;
        }
      }

      if (diff <= 2) {
        answer.push(compareNum);
        break;
      }

      compareNum += 1;
    }
  }

  return answer;
}

solution([7]);
