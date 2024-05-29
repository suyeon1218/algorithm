function solution(today, terms, privacies) {
	const answer = [];
	const validatePeriod = {};
	const [currYear, currMonth, currDay] = today.split('.').map((e) => Number(e));

	terms.forEach((term) => {
		const [name, period] = term.split(' ');
		validatePeriod[name] = Number(period);
	});

	for (let i = 0; i < privacies.length; i++) {
		const [date, term] = privacies[i].split(' ');
		const [expiredYear, expiredMonth, expiredDay] = getExpiredDate(
			date,
			validatePeriod[term],
		);

		if (expiredYear > currYear) continue;
		if (expiredYear === currYear) {
			if (expiredMonth > currMonth) continue;
			if (expiredMonth === currMonth) {
				if (expiredDay > currDay) continue;
			}
		}

		answer.push(i + 1);
	}

	return answer;
}

function getExpiredDate(startDate, period) {
	const [startYear, startMonth, startDay] = startDate
		.split('.')
		.map((e) => Number(e));
	let expiredYear = startYear + parseInt(period / 12);
	let expiredMonth = startMonth + (period % 12);

	if (expiredMonth > 12) {
		expiredYear += 1;
		expiredMonth %= 12;
	}

	return [expiredYear, expiredMonth, startDay];
}

// ! 다른 사람 풀이 - timestamp 로 변환해서

function solution(today, terms, privacies) {
	var answer = [];
	var [year, month, date] = today.split('.').map(Number);
	var todates = year * 12 * 28 + month * 28 + date;
	var t = {};
	terms.forEach((e) => {
		let [a, b] = e.split(' ');
		t[a] = Number(b);
	});
	privacies.forEach((e, i) => {
		var [day, term] = e.split(' ');
		day = day.split('.').map(Number);
		var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
		if (dates <= todates) answer.push(i + 1);
	});
	return answer;
}
