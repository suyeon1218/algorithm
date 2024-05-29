function solution(s) {
	const result = [];
	const memo = {};

	for (let i = 0; i < s.length; i++) {
		if (memo[s[i]] === undefined) {
			result.push(-1);
		} else {
			result.push(i - memo[s[i]]);
		}
		memo[s[i]] = i;
	}

	return result;
}
