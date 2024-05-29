function solution(a, b) {
	const day = {
		1: 'FRI',
		2: 'SAT',
		3: 'SUN',
		4: 'MON',
		5: 'TUE',
		6: 'WED',
		0: 'THU',
	};
	let dayCount = b;

	for (let month = 1; month < a; month++) {
		if (month <= 7) {
			if (month % 2 === 1) {
				dayCount += 31;
			} else if (month === 2) {
				dayCount += 29;
			} else {
				dayCount += 30;
			}
		} else {
			if (month % 2 === 1) {
				dayCount += 30;
			} else {
				dayCount += 31;
			}
		}
	}

	return day[dayCount % 7];
}

// ! 달력 뭐 이렇게 구하냐

function getDayName(a, b) {
	const tempDate = new Date(2016, a - 1, b);

	console.log(tempDate.toString());

	return tempDate.toString().slice(0, 3).toUpperCase();
}

getDayName(4, 24);
