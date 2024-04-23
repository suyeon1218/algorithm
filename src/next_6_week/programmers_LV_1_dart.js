function solution(dartResult) {
	const sections = {
		S: 1,
		D: 2,
		T: 3,
	};
	const scores = [];

	for (let i = 0; i < dartResult.length; i++) {
		const round = [];
		const lastScoreIndex = scores.length - 1;

		if (dartResult[i] === '*') {
			scores[lastScoreIndex] *= 2;

			if (lastScoreIndex > 0) {
				scores[lastScoreIndex - 1] *= 2;
			}
			continue;
		}
		if (dartResult[i] === '#') {
			scores[lastScoreIndex] *= -1;
			continue;
		}

		while (sections[dartResult[i]] === undefined) {
			round.push(dartResult[i]);
			i += 1;
		}

		const section = sections[dartResult[i]];
		const score = Number(round.join(''));

		scores.push(Math.pow(score, section));
	}

	return scores.reduce((prev, curr) => prev + curr, 0);
}
