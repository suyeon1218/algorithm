function solution(left, right) {
	let sum = 0;

	for (let num = left; num <= right; num++) {
		const maxSearchNum = Math.sqrt(num);
		let measure = 0;

		for (let search = 1; search <= maxSearchNum; search++) {
			if (num % search === 0) {
				measure += 2;
				if (maxSearchNum === search) {
					measure -= 1;
				}
			}
		}

		sum += measure % 2 === 0 ? num : -num;
	}

	return sum;
}

// ! 제곱근이 홀수면 약수의 개수가 홀수이다

function solution(left, right) {
	let answer = 0;

	for (let i = left; i <= right; i++) {
		if (Number.isInteger(Math.sqrt(i))) {
			answer -= i;
		} else {
			answer += i;
		}
	}
	return answer;
}
