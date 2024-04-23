// * query 랑 user 일일이 완탐 -> 효율성 실패
// * 이진탐색 -> 어디서 런탐에러 나지? -> right = userLen - 1 로 안 해줘서...
// * 여전히 효율성 실패

function solution(info, queries) {
  const answer = [];

  queries = queries.map((query) => query.split(' and ').join(' ').split(' '));
  info = info
    .map((user) => user.split(' '))
    .sort((a, b) => Number(a[4]) - Number(b[4]));

  for (const query of queries) {
    const queryLen = query.length;
    const queryScore = Number(query[queryLen - 1]);
    let count = 0;
    let left = 0;
    let right = info.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (Number(info[mid][4]) < queryScore) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    for (let i = right + 1; i < info.length; i++) {
      const user = info[i];
      const userLen = user.length;
      let queryIndex = 0;
      let userIndex = 0;

      while (queryIndex < queryLen - 1 && userIndex < userLen - 1) {
        if (query[queryIndex] === '-') {
          queryIndex += 1;
          userIndex += 1;
          continue;
        }
        if (query[queryIndex] !== user[userIndex]) {
          break;
        }

        queryIndex += 1;
        userIndex += 1;
      }

      if (queryIndex === queryLen - 1 && userIndex === userLen - 1) {
        count += 1;
      }
    }

    answer.push(count);
  }

  return answer;
}

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];
const query = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];

solution(info, query);
