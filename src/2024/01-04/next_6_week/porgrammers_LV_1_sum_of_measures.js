function solution(n) {
	const measures = [];
	const maxSearchNum = Math.sqrt(n);

	for (let i = 1; i < maxSearchNum; i++) {
		if (n % i === 0) {
			measures.push(i);
			measures.push(n / i);
		}
	}

	if (maxSearchNum === Math.floor(maxSearchNum)) {
		measures.push(maxSearchNum);
	}

	return measures.reduce((prev, curr) => prev + curr, 0);
}
