function solution(k, scores) {
	const answer = [];
	const temple = [];
	let minScore = Infinity;
	let minScoreIndex = -1;

	for (let i = 0; i < scores.length; i++) {
		if (temple.length < k) {
			temple.push(scores[i]);
		} else {
			if (minScore < scores[i]) {
				temple[minScoreIndex] = scores[i];
			}
		}

		minScore = Math.min(...temple);
		minScoreIndex = temple.findIndex((element) => element === minScore);
		answer.push(minScore);
	}

	return answer;
}

// ! 아니면 정렬 해서 k 만큼 잘라낼 수 있음
