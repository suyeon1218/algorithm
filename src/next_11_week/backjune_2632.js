const fs = require('fs');
const [goal, info, ...arr] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [m, n] = info.split(' ').map(Number);
const arr1 = arr.slice(0, m).map(Number);
const arr2 = arr.slice(m).map(Number);
const memo = {};
const numberGoal = Number(goal);
let answer = 0;

for (let i = 0; i < m; i++) {
  let sum = 0;

  for (let j = 0; j < m; j++) {
    const index = (i + j) % m;
    sum += arr1[index];

    if (memo[sum] === undefined || j === m - 1) {
      memo[sum] = 1;
    } else {
      memo[sum] += 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  let sum = 0;

  for (let j = 0; j < n; j++) {
    if (i !== 0 && j === n - 1) continue;

    const index = (i + j) % n;
    sum += arr2[index];

    if (sum === numberGoal) answer += 1;
    if (memo[numberGoal - sum] !== undefined) {
      answer += memo[numberGoal - sum];
    }
  }
}

if (memo[numberGoal] !== undefined) {
  answer += memo[numberGoal];
}

console.log(answer);
