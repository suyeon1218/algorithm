function solution(num) {
	let count = 0;

	if (num === 1) return 0;

	while (count < 500) {
		if (num === 1) {
			return count;
		}

		if (num % 2 === 0) {
			num /= 2;
		} else {
			num = num * 3 + 1;
		}
		count += 1;
	}

	return -1;
}
