//! 효율성 테스트 중 런타임 오류만

function solution(land) {
	let maxOil = 0;

	const drilling = (row, col, oils) => {
		if (row === land.length) {
			maxOil = Math.max(
				oils.reduce((prev, curr) => prev + curr, 0),
				maxOil,
			);
			return;
		}

		if (land[row][col] === 1) {
			const oilMap = {};
			findSectionOil(row, col, oilMap);

			let oilSum = 0;

			for (const key in oilMap) {
				oilSum += oilMap[key].length;
			}

			for (const key in oilMap) {
				const anyRow = oilMap[key][0];
				land[anyRow][key] = oilSum;
			}
		}

		oils.push(land[row][col]);

		drilling(row + 1, col, oils);
	};

	const findSectionOil = (row, col, sections) => {
		if (row < 0 || col < 0 || row >= land.length || col >= land[0].length) {
			return;
		}
		if (land[row][col] === 0) {
			return;
		}

		if (sections[col] === undefined) {
			sections[col] = [];
		}

		land[row][col] = 0;
		sections[col].push(row);

		findSectionOil(row - 1, col, sections);
		findSectionOil(row + 1, col, sections);
		findSectionOil(row, col - 1, sections);
		findSectionOil(row, col + 1, sections);
	};

	for (let col = 0; col < land[0].length; col++) {
		drilling(0, col, []);
	}

	return maxOil;
}
