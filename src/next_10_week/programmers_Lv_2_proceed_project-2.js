function changeTimeToTimeStamp(time) {
	const [hour, minute] = time.split(':').map(Number);

	return hour * 60 + minute;
}

function solution(plans) {
	const result = [];
	const delay = [];

	const newPlans = plans
		.map((plan) => {
			const [subject, startTime, playTime] = plan;

			return [subject, changeTimeToTimeStamp(startTime), Number(playTime)];
		})
		.sort((a, b) => b[1] - a[1]);

	while (newPlans.length > 0) {
		const [subject, startTime, playTime] = newPlans.pop();

		if (newPlans.length === 0) {
			result.push(subject);
			break;
		}
		let term = newPlans[newPlans.length - 1][1] - (startTime + playTime);

		if (term < 0) {
			delay.push([subject, Math.abs(term)]);
			continue;
		}
		result.push(subject);

		while (term > 0 && delay.length > 0) {
			const [subject, remainTime] = delay.pop();

			if (remainTime <= term) {
				result.push(subject);
				term -= remainTime;
			} else {
				delay.push([subject, remainTime - term]);
				term = 0;
			}
		}
	}

	while (delay.length > 0) {
		result.push(delay.pop()[0]);
	}

	return result;
}

solution([
	['music', '12:20', '40'],
	['computer', '12:30', '100'],
	['science', '12:40', '50'],
	['history', '14:00', '30'],
]);
