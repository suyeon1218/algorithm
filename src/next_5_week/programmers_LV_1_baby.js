function solution(babbling) {
	const memo = { aya: true, ye: true, woo: true, ma: true };
	let possibleWord = 0;

	for (const word of babbling) {
		let saveWordLen = 0;
		let start = 0;
		let prevWord = '';

		for (let end = start + 1; end <= word.length; end++) {
			const subWord = word.substring(start, end);

			if (memo[subWord] && prevWord !== subWord) {
				saveWordLen += end - start;
				prevWord = subWord;
				start = end;
			}
		}

		if (word.length === saveWordLen) {
			possibleWord += 1;
		}
	}

	return possibleWord;
}

// ! 정규식...
function solution(babbling) {
	const regexp1 = /(aya|ye|woo|ma)\1+/;
	const regexp2 = /^(aya|ye|woo|ma)+$/;

	return babbling.reduce(
		(ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
		0,
	);
}
