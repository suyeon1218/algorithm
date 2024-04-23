function solution(weights) {
	const memo = {};
	let result = 0;

	for (const weight of weights) {
		if (memo[weight] === undefined) {
			memo[weight] = 0;
		}

		memo[weight] += 1;
	}

	weights.sort((a, b) => a - b);

	for (const weight of weights) {
		if (memo[weight] > 1) {
			result += memo[weight] - 1;
		}
		if (memo[weight * 2]) {
			result += memo[weight * 2];
		}
		if (memo[weight * (3 / 2)]) {
			result += memo[weight * (3 / 2)];
		}
		if (memo[weight * (4 / 3)]) {
			result += memo[weight * (4 / 3)];
		}

		memo[weight] -= 1;
	}

	return result;
}

// ! 시간초과
function solution_fail(weights) {
	const memo = {};
	let result = 0;

	const compare = (weight1, weight2) => {
		let a = weight1;
		let b = weight2;
		let remain = weight1 % weight2;

		while (remain !== 0) {
			a = b;
			b = remain;
			remain = a % b;
		}

		if (weight1 / b > 4 || weight2 / b > 4) {
			return 0;
		}
		if (weight1 / b === 1 && weight2 / b >= 3) {
			return 0;
		}
		if (weight2 / b === 1 && weight1 / b >= 3) {
			return 0;
		}

		return 1;
	};

	for (let i = 0; i < weights.length - 1; i++) {
		if (memo[weights[i]] === undefined) {
			memo[weights[i]] = {};
		}
		for (let j = i + 1; j < weights.length; j++) {
			if (memo[weights[j]] === undefined) {
				memo[weights[j]] = {};
			}
			if (memo[weights[i]][weights[j]] !== undefined) {
				result += memo[weights[i]][weights[j]];
				continue;
			}
			const compareResult = compare(weights[i], weights[j]);

			if (compareResult === 1) {
				memo[weights[i]][weights[j]] = 1;
				memo[weights[j]][weights[i]] = 1;
			} else {
				memo[weights[i]][weights[j]] = 0;
				memo[weights[j]][weights[i]] = 0;
			}

			result += compareResult;
		}
	}

	return result;
}
