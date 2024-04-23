function solution(m, n, startX, startY, balls) {
	const result = [];

	const searchTop = (ballX, ballY) => {
		if (ballX === startX && ballY > startY) {
			return Infinity;
		}
		const changeY = n + (n - ballY);

		return (startX - ballX) ** 2 + (startY - changeY) ** 2;
	};
	const searchBottom = (ballX, ballY) => {
		if (ballX === startX && ballY < startY) {
			return Infinity;
		}
		const changeY = -ballY;

		return (startX - ballX) ** 2 + (startY - changeY) ** 2;
	};
	const searchLeft = (ballX, ballY) => {
		if (startY === ballY && startX > ballX) {
			return Infinity;
		}
		const changeX = -ballX;

		return (startX - changeX) ** 2 + (startY - ballY) ** 2;
	};
	const searchRight = (ballX, ballY) => {
		if (startY === ballY && startX < ballX) {
			// 하... 이걸 못찾아서 씨름한거임...?????.....
			return Infinity;
		}
		const changeX = m + (m - ballX);

		return (startX - changeX) ** 2 + (startY - ballY) ** 2;
	};

	for (let [x, y] of balls) {
		let dist = Infinity;

		dist = Math.min(searchTop(x, y), dist);
		dist = Math.min(searchBottom(x, y), dist);
		dist = Math.min(searchLeft(x, y), dist);
		dist = Math.min(searchRight(x, y), dist);

		result.push(dist);
	}

	return result;
}

solution(10, 10, 3, 7, [7, 3]);
