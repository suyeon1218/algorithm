function solution(n) {
	return String(n)
		.split('')
		.map((el) => Number(el))
		.reduce((prev, curr) => prev + curr, 0);
}
