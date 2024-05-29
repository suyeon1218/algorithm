function solution(floor) {
	let result = 0;
	floor = String(floor).split('').map(Number);

	while (floor.length > 0) {
		const currFloor = floor.pop();

		if (currFloor < 5) {
			result += currFloor;
		} else if (currFloor > 5) {
			result += 10 - currFloor;
			if (floor.length === 0) {
				result += 1;
			} else {
				floor[floor.length - 1] += 1;
			}
		} else {
			if (floor.length > 0 && floor[floor.length - 1] < 5) {
				result += 5;
				continue;
			}
			if (floor.length > 0 && floor[floor.length - 1] >= 5) {
				floor[floor.length - 1] += 1;
				result += currFloor;
				continue;
			}
			result += currFloor;
		}
	}

	return result;
}

function solution2(storey) {
	if (storey < 5) return storey;
	const r = storey % 10;
	const m = (storey - r) / 10;
	return Math.min(r + solution(m), 10 - r + solution(m + 1));
}
