function solution(maps) {
	const locations = { S: undefined, L: undefined, E: undefined };
	let minDist = 0;

	const newMaps = maps.map((line) => line.split(''));

	newMaps.forEach((line, row) =>
		line.forEach((cell, col) => {
			if (cell !== 'O' || cell !== 'X') {
				locations[cell] = [row, col];
			}
		}),
	);

	minDist += getMinDist(maps, locations['S'], locations['L']);
	minDist += getMinDist(maps, locations['L'], locations['E']);

	return minDist === Infinity ? -1 : minDist;
}

function getMinDist(maps, start, end) {
	const newMaps = maps.map((line) => line.split(''));
	const queue = [[...start, 0]];

	let minDist = Infinity;

	function isOutOfBound(row, col) {
		return (
			row < 0 ||
			col < 0 ||
			row > newMaps.length - 1 ||
			col > newMaps[0].length - 1
		);
	}

	while (queue.length > 0) {
		const [row, col, dist] = queue.shift();

		if (isOutOfBound(row, col)) continue;
		if (newMaps[row][col] === 'X') continue;

		if (row === end[0] && col === end[1]) {
			minDist = Math.min(minDist, dist);
		}

		newMaps[row][col] = 'X';

		queue.push([row - 1, col, dist + 1]);
		queue.push([row + 1, col, dist + 1]);
		queue.push([row, col - 1, dist + 1]);
		queue.push([row, col + 1, dist + 1]);
	}

	return minDist;
}
