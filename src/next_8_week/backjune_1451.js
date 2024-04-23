const fs = require('fs');
const [rect, ...arr] = fs
	.readFileSync('dev/stdin')
	.toString()
	.trim()
	.split('\n');
const [n, m] = rect.split(' ').map((el) => Number(el));
const map = arr.map((str) => str.split('').map(Number));
let max = -1;

function sum(row1, col1, row2, col2) {
	let sum = 0;

	for (let i = row1; i <= row2; i++) {
		for (let j = col1; j <= col2; j++) {
			sum += map[i][j];
		}
	}

	return sum;
}

for (let col1 = 0; col1 < m - 2; col1++) {
	for (let col2 = col1 + 1; col2 < m - 1; col2++) {
		const r1 = sum(0, 0, n - 1, col1);
		const r2 = sum(0, col1 + 1, n - 1, col2);
		const r3 = sum(0, col2 + 1, n - 1, m - 1);

		if (max < r1 * r2 * r3) max = r1 * r2 * r3;
	}
}

for (let row1 = 0; row1 < n - 2; row1++) {
	for (let row2 = row1 + 1; row2 < n - 1; row2++) {
		const r1 = sum(0, 0, row1, m - 1);
		const r2 = sum(row1 + 1, 0, row2, m - 1);
		const r3 = sum(row2 + 1, 0, n - 1, m - 1);

		if (max < r1 * r2 * r3) max = r1 * r2 * r3;
	}
}

for (let row = 0; row < n - 1; row++) {
	for (let col = 0; col < m - 1; col++) {
		const r1 = sum(0, 0, n - 1, col);
		const r2 = sum(0, col + 1, row, m - 1);
		const r3 = sum(row + 1, col + 1, n - 1, m - 1);

		const r4 = sum(0, 0, row, col);
		const r5 = sum(row + 1, 0, n - 1, col);
		const r6 = sum(0, col + 1, n - 1, m - 1);

		if (max < r1 * r2 * r3) max = r1 * r2 * r3;
		if (max < r4 * r5 * r6) max = r4 * r5 * r6;
	}
}

for (let row = 0; row < n - 1; row++) {
	for (let col = 0; col < m - 1; col++) {
		const r1 = sum(0, 0, row, m - 1);
		const r2 = sum(row + 1, 0, n - 1, col);
		const r3 = sum(row + 1, col + 1, n - 1, m - 1);

		const r4 = sum(0, 0, row, col);
		const r5 = sum(0, col + 1, row, m - 1);
		const r6 = sum(row + 1, 0, n - 1, m - 1);

		if (max < r1 * r2 * r3) max = r1 * r2 * r3;
		if (max < r4 * r5 * r6) max = r4 * r5 * r6;
	}
}

console.log(max);
