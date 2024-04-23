function solution(n, l, r) {
	let answer = 0;
	for (let i = l - 1; i <= r - 1; i++) {
		// if (!i.toString(5).match('2')) answer += 1;
		console.log(i.toString(5));
		console.log(i.toString(5).match('2'));
	}
	return answer;
}

solution(2, 4, 17);
