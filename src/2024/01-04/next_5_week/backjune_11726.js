const fs = require('fs');
const n = fs.readFileSync('dev/stdin').toString().trim();

const solution = (number) => {
	const memo = { 1: 1, 2: 2, 3: 3 };

	for (let i = 4; i <= number; i++) {
		memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
	}

	return memo[number];
};

console.log(solution(Number(n)));
