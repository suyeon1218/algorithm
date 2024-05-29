function solution(board, moves) {
	const stack = [];
	let removedDoll = 0;

	for (const pickCol of moves) {
		for (let row = 0; row < board.length; row++) {
			if (board[row][pickCol - 1] === 0) {
				continue;
			}

			stack.push(board[row][pickCol - 1]);
			if (
				stack.length >= 2 &&
				stack[stack.length - 1] === stack[stack.length - 2]
			) {
				removedDoll += 2;
				stack.pop();
				stack.pop();
			}

			board[row][pickCol - 1] = 0;
			break;
		}
	}

	return removedDoll;
}
