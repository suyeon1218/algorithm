function solution(land) {
	let visitOil = [...new Array(land.length)].map(() =>
		new Array(land[0].length).fill(false),
	);
	let maxOil = 0;

	const drilling = (row, col, totalOil) => {
		if (row === land.length) {
			maxOil = Math.max(
				totalOil.reduce((prev, curr) => prev + curr, 0),
				maxOil,
			);
			return;
		}

		if (visitOil[row][col] || land[row][col] === 0) {
			totalOil.push(0);
			visitOil[row][col] = true;
		}
		if (land[row][col] === 1) {
			const sectionOil = findSectionOil(row, col, 1);
			totalOil.push(sectionOil);
		}

		drilling(row + 1, col, [...totalOil]);
	};

	const findSectionOil = (row, col) => {
		if (row < 0 || col < 0 || row >= land.length || col >= land[0].length) {
			return 0;
		}
		if (visitOil[row][col]) {
			return 0;
		}

		visitOil[row][col] = true;

		if (land[row][col] === 0) {
			return 0;
		}

		return (
			1 +
			findSectionOil(row - 1, col) +
			findSectionOil(row + 1, col) +
			findSectionOil(row, col - 1) +
			findSectionOil(row, col + 1)
		);
	};

	for (let col = 0; col < land[0].length; col++) {
		drilling(0, col, []);
		visitOil = [...new Array(land.length)].map(() =>
			new Array(land[0].length).fill(false),
		);
	}

	return maxOil;
}
