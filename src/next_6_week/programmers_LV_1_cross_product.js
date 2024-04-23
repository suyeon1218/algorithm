function solution(a, b) {
	return a
		.map((_, index) => a[index] * b[index])
		.reduce((prev, curr) => prev + curr, 0);
}
