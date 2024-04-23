function solution(number, limit, power) {
	let totalKg = 0;

	for (let i = 1; i <= number; i++) {
		const travelNum = Math.sqrt(i);
		let measure = 0;

		for (let j = 1; j <= travelNum; j++) {
			if (i % j === 0) measure += 2;
			if (j === travelNum) measure -= 1;
			if (measure > limit) {
				measure = power;
				break;
			}
		}

		totalKg += measure;
	}

	return totalKg;
}
