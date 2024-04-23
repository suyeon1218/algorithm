function solution(a, b, n) {
	let totalBottle = 0;

	while (n >= a) {
		const give = Math.floor(n / a) * a;
		const recieve = (give * b) / a;
		// ! give * (a / b) 의 경우 소숫점이 되기 때문에 원하는 값을 얻지 못할 수 있다
		n = n - give + recieve;
		totalBottle += recieve;
	}

	return totalBottle;
}

console.log(solution(999999, 4, 999999));
