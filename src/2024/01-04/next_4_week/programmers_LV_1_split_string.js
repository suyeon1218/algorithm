function solution(s) {
	let result = 0;

	for (let i = 0; i < s.length; i++) {
		const x = s[i];
		let xCount = 0;
		let notXCount = 0;

		for (let j = i; j < s.length; j++) {
			if (s[j] !== x) {
				notXCount += 1;
			}
			if (s[j] === x) {
				xCount += 1;
			}
			if (xCount === notXCount) {
				result += 1;
				i = j;
				break;
			}
			if (j === s.length - 1) {
				result += 1;
				i = j;
				break;
			}
		}
	}

	return result;
}

// ! 진짜 좋은 방법...

function solution(s) {
	let answer = 0;
	let current;
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		if (count === 0) {
			answer++;
			current = s[i];
			count = 1;
		} else {
			if (current !== s[i]) count--;
			else count++;
		}
	}

	return answer;
}
