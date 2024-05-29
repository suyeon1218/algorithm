function solution(t, p) {
	const splitNum = p.length;
	let answer = 0;

	for (let i = 0; i <= t.length - splitNum; i++) {
		const subNum = Number(t.substring(i, i + splitNum));

		if (Number(p) >= subNum) {
			answer += 1;
		}
	}

	return answer;
}
