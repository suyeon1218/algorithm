function solution(_, m, score) {
	let profit = 0;

	score.sort((a, b) => b - a);

	score.reduce((box, apple) => {
		box.push(apple);

		if (box.length === m) {
			profit += m * apple;
		}

		return box.length === m ? [] : box;
	}, []);

	return profit;
}
