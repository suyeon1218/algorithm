function solution(x, n) {
	return [...new Array(n)].map((el, index) => x * (index + 1));
}
