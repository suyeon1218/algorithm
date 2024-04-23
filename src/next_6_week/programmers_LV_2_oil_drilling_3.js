function solution(land) {
	let maxOil = 0;

	for (let col = 0; col < land[0].length; col++) {
		const totalOil = [];

		for (let row = 0; row < land.length; row++) {
			if (land[row][col] > 1) {
				totalOil.push(land[row][col]);
				continue;
			}
			if (land[row][col] === 1) {
				const oilSections = findOil(land, row, col);
				const oils = Object.keys(oilSections)
					.map((key) => oilSections[key].length)
					.reduce((prev, curr) => prev + curr, 0);

				Object.keys(oilSections).forEach((key) => {
					const row = oilSections[key][0];
					land[row][key] = oils;
				});

				totalOil.push(oils);
			}
		}

		maxOil = Math.max(
			maxOil,
			totalOil.reduce((prev, curr) => prev + curr, 0),
			0,
		);
	}

	return maxOil;
}

function findOil(land, row, col) {
	const oilSections = {};
	const stack = [[row, col]];

	while (stack.length > 0) {
		const [row, col] = stack.pop();

		if (land[row][col] === 0) {
			continue;
		}

		land[row][col] = 0;

		if (oilSections[col] === undefined) {
			oilSections[col] = [];
		}
		oilSections[col].push(row);

		if (row + 1 < land.length && land[row + 1][col] === 1) {
			stack.push([row + 1, col]);
		}
		if (row - 1 >= 0 && land[row - 1][col] === 1) {
			stack.push([row - 1, col]);
		}
		if (col + 1 < land[0].length && land[row][col + 1] === 1) {
			stack.push([row, col + 1]);
		}
		if (col - 1 >= 0 && land[row][col - 1] === 1) {
			stack.push([row, col - 1]);
		}
	}

	return oilSections;
}

solution([
	[0, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0],
	[1, 1, 0, 0, 0, 1, 1, 0],
	[1, 1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0, 1, 1],
]);
