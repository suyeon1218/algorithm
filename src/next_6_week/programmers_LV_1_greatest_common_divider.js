// function solution(n, m) {
// 	if (m < n) {
// 		[n, m] = [m, n];
// 	}

// 	if (m % n === 0) {
// 		return [n, m];
// 	}

// 	let maxDivider = 1;

// 	for (let i = 2; i <= n; i++) {
// 		if (n % i === 0 && m % i === 0) {
// 			maxDivider = i;
// 		}
// 	}

// 	return [maxDivider, (n * m) / maxDivider];
// }

// ! 흑흑 공식이 뭔데요

function solution(a, b) {
	let multiple = a * b;
	let remain = a % b;

	while (remain !== 0) {
		a = b;
		b = remain;
		remain = a % b;
		console.log(a, b, remain);
	}

	console.log(b, multiple / b);
	return [b, multiple / b];
}

solution(100, 180);
