function solution(s) {
	const answer = [];
	s = s.split(' ');

	for (const word of s) {
		let newWord = '';
		for (let i = 0; i < word.length; i++) {
			if (i % 2 === 0) {
				newWord += word[i].toUpperCase();
			} else {
				newWord += word[i].toLowerCase();
			}
		}
		answer.push(newWord);
	}

	return answer.join(' ');
}
