function solution(n, m, section) {
	if (n === m) return 1;
	if (section.length === 1) return 1;
	if (m === 1) return section.length;

	let paint = 0;

	for (let i = 0; i < section.length; i++) {
		const initSection = section[i];

		while (initSection + (m - 1) >= section[i + 1]) {
			i += 1;
		}

		paint += 1;
	}

	return paint;
}

function solution2(n, m, sections) {
	let answer = 0;
	let painted = 0;

	for (let section of sections) {
		if (painted < section) {
			answer++;
			painted = section + m - 1;
		}
	}
	return answer;
}
