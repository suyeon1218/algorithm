function solution(x) {
	const nums = String(x)
		.split('')
		.map((e) => Number(e));

	return x % nums.reduce((prev, curr) => prev + curr, 0) === 0;
}
