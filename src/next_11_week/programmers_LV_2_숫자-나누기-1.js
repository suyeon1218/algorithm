// * 내 풀이

/* 
  단순하게 각 최소값의 약수를 구해서 a, b 를 각각 나눌 수 있는지 판단하여 해결
*/

function getMeasures(number) {
  const measures = [];
  const max = Math.sqrt(number);

  for (let i = 1; i <= max; i++) {
    if (number % i === 0) {
      measures.push(i);

      if (i !== max) {
        measures.push(number / i);
      }
    }
  }

  return measures.sort((a, b) => b - a);
}

function solution(arrayA, arrayB) {
  let answerA = 0;
  let answerB = 0;
  arrayA = arrayA.sort((a, b) => a - b);
  arrayB = arrayB.sort((a, b) => a - b);

  const aMeasures = getMeasures(arrayA[0]);
  const bMeasures = getMeasures(arrayB[0]);

  console.log(aMeasures);
  console.log(bMeasures);

  for (const measure of aMeasures) {
    answerA = measure;
    for (const number of arrayA) {
      if (number % measure !== 0) {
        answerA = 0;
        break;
      }
    }
    if (answerA !== 0) break;
  }

  for (const number of arrayB) {
    if (number % answerA === 0) {
      answerA = 0;
      break;
    }
  }

  for (const measure of bMeasures) {
    answerB = measure;
    for (const number of arrayB) {
      if (number % measure !== 0) {
        answerB = 0;
        break;
      }
    }
    if (answerB !== 0) break;
  }

  for (const number of arrayA) {
    if (number % answerB === 0) {
      answerB = 0;
      break;
    }
  }

  return Math.max(answerA, answerB);
}
