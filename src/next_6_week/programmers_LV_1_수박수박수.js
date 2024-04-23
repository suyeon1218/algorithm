function solution(n) {
	let answer = '';

	for (let i = 1; i <= n; i++) {
		if (i % 2 === 0) {
			answer += '박';
		} else {
			answer += '수';
		}
	}

	return answer;
}

// ! 이건거 같다
var waterMelon = (n) => '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
