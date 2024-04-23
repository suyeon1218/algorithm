function solution(numbers, hand) {
	let lastLeft = [3, 0];
	let lastRight = [3, 2];

	return numbers
		.map((num) => {
			const row = num === 0 ? 3 : Math.floor(num / 3);
			const col = num === 0 ? 1 : (num % 3) - 1;
			let currHand = hand === 'right' ? 'R' : 'L';

			if (col === 0) {
				currHand = 'L';
				lastLeft = [row, 0];
			} else if (col === -1) {
				currHand = 'R';
				lastRight = [row - 1, 2];
			} else {
				const leftDist =
					Math.abs(lastLeft[0] - row) + Math.abs(lastLeft[1] - col);
				const rightDist =
					Math.abs(lastRight[0] - row) + Math.abs(lastRight[1] - col);
				if (leftDist < rightDist) {
					currHand = 'L';
					lastLeft = [row, 1];
				} else if (leftDist > rightDist) {
					currHand = 'R';
					lastRight = [row, 1];
				} else {
					if (hand === 'right') {
						lastRight = [row, 1];
					} else {
						lastLeft = [row, 1];
					}
				}
			}

			return currHand;
		})
		.join('');
}
