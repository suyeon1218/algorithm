const DOCUMENT = '#';

function solution(wallpaper) {
	const rows = new Set();
	const cols = new Set();

	for (let row = 0; row < wallpaper.length; row++) {
		for (let col = 0; col < wallpaper[0].length; col++) {
			if (wallpaper[row][col] === DOCUMENT) {
				rows.add(row);
				cols.add(col);
			}
		}
	}

	return [
		Math.min(...rows),
		Math.min(...cols),
		Math.max(...rows) + 1,
		Math.max(...cols) + 1,
	];
}
