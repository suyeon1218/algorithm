function solution(arr) {
	return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}
