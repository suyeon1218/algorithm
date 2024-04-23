function solution(s) {
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'p' || s[i] === 'P') {
			count += 1;
		} else if (s[i] === 'y' || s[i] === 'Y') {
			count -= 1;
		}
	}

	return count === 0;
}
