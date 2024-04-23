function changeQuery(key) {
  if (key[0] == '-') {
    return [
      ['java', key[1], key[2], key[3]],
      ['cpp', key[1], key[2], key[3]],
      ['python', key[1], key[2], key[3]],
    ];
  } else if (key[1] == '-') {
    return [
      [key[0], 'backend', key[2], key[3]],
      [key[0], 'frontend', key[2], key[3]],
    ];
  } else if (key[2] == '-') {
    return [
      [key[0], key[1], 'junior', key[3]],
      [key[0], key[1], 'senior', key[3]],
    ];
  } else if (key[3] == '-') {
    return [
      [key[0], key[1], key[2], 'chicken'],
      [key[0], key[1], key[2], 'pizza'],
    ];
  }
  return [key];
}

function makeQueryKeys(keys) {
  let totalKeys = [keys];

  for (let i = 0; i < 4; i++) {
    let temp = [];

    for (const key of totalKeys) {
      temp = [...temp, ...changeQuery(key)];
    }

    totalKeys = temp;
  }

  return totalKeys;
}

function solution(info, queries) {
  const totalQuery = {};
  const answer = [];

  for (let user of info) {
    user = user.split(' ');

    const queryKey = user.slice(0, 4).join('');
    const score = Number(user[4]);

    if (totalQuery[queryKey] === undefined) {
      totalQuery[queryKey] = [];
    }
    totalQuery[queryKey].push(score);
  }

  for (const queryKey in totalQuery) {
    totalQuery[queryKey] = totalQuery[queryKey].sort((a, b) => a - b);
  }

  for (let query of queries) {
    query = query.split(' and ').join(' ').split(' ');
    const queryScore = Number(query[4]);
    const queryKeys = makeQueryKeys(query.slice(0, 4));
    let count = 0;

    for (let key of queryKeys) {
      key = key.join('');
      if (totalQuery[key] === undefined) continue;

      let left = 0;
      let right = totalQuery[key].length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (totalQuery[key][mid] < queryScore) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }

      count += totalQuery[key].length - left;
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
