const START_POINT = 'S';
const POSSIBLE_POINT = 'O';
const IMPOSSIBLE_POINT = 'X';

function solution(park, routes) {
	const startPosition = getStartPosition(park);
	const lastPosition = getLastPosition(park, routes, startPosition);

	return lastPosition;
}

function getStartPosition(park) {
	for (let row = 0; row < park.length; row++) {
		for (let col = 0; col < park[0].length; col++) {
			if (park[row][col] === START_POINT) {
				return [row, col];
			}
		}
	}
}

function isPossibleMove(park, currRow, currCol, nextRow, nextCol) {
	if (
		nextRow < 0 ||
		nextCol < 0 ||
		nextRow > park.length - 1 ||
		nextCol > park[0].length - 1
	) {
		return false;
	}

	for (
		let row = Math.min(currRow, nextRow);
		row <= Math.max(currRow, nextRow);
		row++
	) {
		for (
			let col = Math.min(currCol, nextCol);
			col <= Math.max(currCol, nextCol);
			col++
		) {
			if (park[row][col] === IMPOSSIBLE_POINT) {
				return false;
			}
		}
	}

	return true;
}

function getLastPosition(park, routes, startPosition) {
	let currPosition = [...startPosition];

	for (const route of routes) {
		const [direction, moveNumber] = route.split(' ');
		const [currRow, currCol] = currPosition;
		const nextRow =
			direction === 'N'
				? currRow - Number(moveNumber)
				: direction === 'S'
				? currRow + Number(moveNumber)
				: currRow;
		const nextCol =
			direction === 'W'
				? currCol - Number(moveNumber)
				: direction === 'E'
				? currCol + Number(moveNumber)
				: currCol;

		if (isPossibleMove(park, currRow, currCol, nextRow, nextCol)) {
			currPosition = [nextRow, nextCol];
		}
	}

	return currPosition;
}
