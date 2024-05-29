function solution(n) {
	n = n - 1;
	const maxNum = Math.sqrt(n);

	for (let i = 2; i <= maxNum; i++) {
		if (n % i === 0) {
			return i;
		}
	}

	return n;
}
