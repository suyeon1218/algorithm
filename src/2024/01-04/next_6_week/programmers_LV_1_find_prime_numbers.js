// ! 시간 초과

function solution(n) {
	let primeNumberCounter = 0;

	for (let i = 2; i <= n; i++) {
		if (isPrimeNumber(i)) {
			primeNumberCounter += 1;
		}
	}

	return primeNumberCounter;
}

function isPrimeNumber(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return true;
}

// ? 통과

function solution(n) {
	const primeCheck = new Array(n + 1).fill(true);
	let primeNumberCounter = 0;

	primeCheck[0] = false;
	primeCheck[1] = false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		for (let j = i * i; j <= n; j += i) {
			primeCheck[j] = false;
		}
	}

	for (let i = 2; i <= n; i++) {
		if (primeCheck[i]) primeNumberCounter += 1;
	}

	return primeNumberCounter;
}

// ! 배수들은 탐색 No
function solution(n) {
	const primeCheck = new Array(n + 1).fill(true);
	let primeNumberCounter = 0;

	primeCheck[0] = false;
	primeCheck[1] = false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (!primeCheck[i]) continue;
		for (let j = i * i; j <= n; j += i) {
			primeCheck[j] = false;
		}
	}

	for (let i = 2; i <= n; i++) {
		if (primeCheck[i]) primeNumberCounter += 1;
	}

	return primeNumberCounter;
}
