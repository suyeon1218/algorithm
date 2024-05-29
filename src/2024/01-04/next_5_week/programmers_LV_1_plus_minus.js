function solution(absolutes, signs) {
	return absolutes
		.map((num, index) => (signs[index] ? num : -num))
		.reduce((prev, curr) => prev + curr, 0);
}
