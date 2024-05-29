// * 해결!!

// * 1. 예시로.. 1101 같이 0이 있는 숫자가 있고, 1111 같이 0이 없는 숫자가 있음

// * 2. 0 이 있는 숫자의 경우 맨 뒤에서부터 0 을 1 로 바꿈
// * 2-1. 바꿔야 하는 인덱스가 맨 뒷자리 인덱스가 아니라면 해당 숫자보다 더 작은 숫자가 있음 -> 바로 뒷자리를 0으로 바꿔줘야 함

// * 3. 0 이 없는 숫자의 경우 맨 앞을 0으로 바꾸고, 그 다음 맨 앞 숫자에 1을 추가하면 됨

function solution(numbers) {
  const answer = [];

  for (const num of numbers) {
    const originBinary = num.toString(2).split('');
    let changedIndex = -1;

    for (let i = originBinary.length - 1; i >= 0; i--) {
      if (originBinary[i] === '0') {
        changedIndex = i;
        break;
      }
    }

    if (changedIndex !== -1) {
      originBinary[changedIndex] = '1';

      if (changedIndex !== originBinary.length - 1) {
        originBinary[changedIndex + 1] = '0';
      }
    } else {
      originBinary[0] = '0';
      originBinary.unshift('1');
    }

    answer.push(parseInt(originBinary.join(''), 2));
  }

  return answer;
}

solution([7]);
