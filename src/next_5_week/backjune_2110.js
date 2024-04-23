const fs = require('fs');
const [info, ...input] = fs
	.readFileSync('dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, c] = info.split(' ').map((el) => Number(el));

const hasMoreDistance = (maxDistance, router, distances) => {
	let lastRouter = router - 1;
	let preveHouse = distances[0];

	for (let i = 1; i < distances.length; i++) {
		if (distances[i] - preveHouse >= maxDistance) {
			lastRouter -= 1;
			preveHouse = distances[i];
		}
		if (lastRouter === 0) break;
	}

	return lastRouter <= 0;
};

const solution = (house, router, distances) => {
	distances = distances.map((el) => Number(el)).sort((a, b) => a - b);

	let low = 1;
	let high = distances[house - 1];

	while (low < high) {
		const mid = Math.floor((low + high) / 2);

		if (low === mid) {
			return mid;
		}

		if (hasMoreDistance(mid, router, distances)) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}

	// while (low <= high) {
	// 	const mid = Math.floor((low + high) / 2);

	// 	if (hasMoreDistance(mid, router, distances)) {
	// 		low = mid + 1;
	// 	} else {
	// 		high = mid - 1;
	// 	}
	// }

	return low;
};

console.log(solution(n, c, [...input]));
