function solution(data, col, rowBegin, rowEnd) {
	const s = [];

	data = data.sort((a, b) => {
		if (a[col - 1] - b[col - 1] === 0) {
			return a[0] < b[0] ? 1 : -1;
		} else if (a[col - 1] - b[col - 1] < 0) {
			return -1;
		} else {
			return 1;
		}
	});

	for (let row = rowBegin; row <= rowEnd; row++) {
		const sum = data[row - 1].reduce((prev, curr) => {
			return prev + (curr % row);
		}, 0);

		s.push(sum);
	}
	return s.reduce((prev, curr) => prev ^ curr, 0);
}
