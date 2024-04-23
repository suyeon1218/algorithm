function solution(n) {
	const remains = [];

	while (n > 0) {
		remains.push(n % 3);
		n = Math.floor(n / 3);
	}

	let remainLen = remains.length - 1;

	return remains.reduce(
		(prev, curr) => prev + curr * Math.pow(3, remainLen--),
		0,
	);
}
