function solution(m, n, arr1, arr2, goal) {
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
			const index = (i + j) % n;
			sum += arr2[index];

			if (memo[sum] === undefined || j === n - 1) {
				memo[sum] = 1;
			} else {
				memo[sum] += 1;
			}
			if (memo[numberGoal - sum] !== undefined) {
				answer += memo[numberGoal - sum];
			}
		}
	}

	if (memo[numberGoal] !== undefined) {
		answer += memo[numberGoal];
	}

	console.log(answer);
}

solution(5, 3, [2, 2, 1, 7, 2], [6, 8, 3], 7);
