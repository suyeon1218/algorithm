function solution(maps) {
	const days = [];
	maps = maps.map((line) => line.split(''));

	function isOutOfBound(row, col) {
		return (
			row < 0 || col < 0 || row > maps.length - 1 || col > maps[0].length - 1
		);
	}

	function search(row, col) {
		const stack = [[row, col]];
		let day = 0;

		while (stack.length > 0) {
			const [row, col] = stack.pop();

			if (isOutOfBound(row, col) || maps[row][col] === 'X') {
				continue;
			}

			day += Number(maps[row][col]);
			maps[row][col] = 'X';

			stack.push([row - 1, col]);
			stack.push([row + 1, col]);
			stack.push([row, col - 1]);
			stack.push([row, col + 1]);
		}

		days.push(day);
	}

	for (let row = 0; row < maps.length; row++) {
		for (let col = 0; col < maps[0].length; col++) {
			if (maps[row][col] !== 'X') {
				search(row, col);
			}
		}
	}

	return days.length === 0 ? [-1] : days.sort((a, b) => a - b);
}
