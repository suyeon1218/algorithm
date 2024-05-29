function solution(board) {
	let firstFlag = false;
	let lastFlag = false;
	let firstCount = 0;
	let lastCount = 0;

	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			if (board[row][col] === 'O') {
				firstCount += 1;
			} else if (board[row][col] === 'X') {
				lastCount += 1;
			}
		}
	}

	if (firstCount - lastCount > 1 || firstCount - lastCount < 0) {
		return 0;
	}

	const cross1 = board[0][0] + board[1][1] + board[2][2];
	const cross2 = board[2][0] + board[1][1] + board[0][2];

	if (board[1][1] === 'O') {
		if (cross1 === 'OOO') {
			firstFlag = true;
		}

		if (cross2 === 'OOO') {
			if (firstCount !== 5 && firstFlag) return 0;
			firstFlag = true;
		}
	}

	if (board[1][1] === 'X') {
		if (cross1 === 'XXX') {
			lastFlag = true;
		}

		if (cross2 === 'XXX') {
			if (lastFlag) return 0;
			lastFlag = true;
		}
	}

	for (let row = 0; row < 3; row++) {
		if (board[row] === 'OOO') {
			if (firstCount !== 5 && (firstFlag || lastFlag)) return 0;
			firstFlag = true;
		}
		if (board[row] === 'XXX') {
			if (firstFlag || lastFlag) return 0;
			lastFlag = true;
		}
	}

	for (let col = 0; col < 3; col++) {
		const colString = board[0][col] + board[1][col] + board[2][col];

		if (colString === 'OOO') {
			if (firstCount !== 5 && (firstFlag || lastFlag)) return 0;
			firstFlag = true;
		}
		if (colString === 'XXX') {
			if (firstFlag || lastFlag) return 0;
			lastFlag = true;
		}
	}

	return (firstFlag && firstCount - lastCount !== 1) ||
		(lastFlag && firstCount - lastCount !== 0)
		? 0
		: 1;
}
