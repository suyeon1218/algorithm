function isPrimeNumber(num) {
	const maxNum = Math.sqrt(num);
	let count = 0;

	for (let i = 1; i <= maxNum && count <= 2; i++) {
		if (num % i === 0) {
			count += 2;
		}
	}

	return count === 2 ? true : false;
}

function solution(nums) {
	let count = 0;

	const dfs = (currArr, start) => {
		if (currArr.length === 3) {
			const sum = currArr.reduce((prev, curr) => prev + curr, 0);

			if (isPrimeNumber(sum)) {
				count += 1;
			}
			return;
		}

		for (let i = start; i < nums.length; i++) {
			dfs([...currArr, nums[i]], i + 1);
		}
	};

	dfs([], 0);

	return count;
}
