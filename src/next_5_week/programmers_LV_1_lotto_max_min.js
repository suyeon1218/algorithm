function solution(myLotto, winNums) {
	const lottoAnswer = new Set(winNums);
	let unKnown = 0;
	let correctNum = 0;

	for (const num of myLotto) {
		if (num === 0) {
			unKnown += 1;
			continue;
		}
		if (lottoAnswer.has(num)) {
			correctNum += 1;
		}
	}

	let maxCorrect = correctNum + unKnown;
	let minCorrect = correctNum;

	if (maxCorrect === 0) {
		maxCorrect += 1;
	}
	if (minCorrect === 0) {
		minCorrect += 1;
	}

	return [7 - maxCorrect, 7 - minCorrect];
}

// ! Rank 를 배열로

function solution(lottos, win_nums) {
	const rank = [6, 6, 5, 4, 3, 2, 1];

	let minCount = lottos.filter((v) => win_nums.includes(v)).length;
	let zeroCount = lottos.filter((v) => v === 0).length;

	const maxCount = minCount + zeroCount;

	return [rank[maxCount], rank[minCount]];
}
