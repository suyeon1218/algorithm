const timeCal = (hour, min) => {
	if (min >= 60) {
		hour += Math.floor(min / 60);
		min = 60 % min;
	}

	return [hour, min];
};

function solution(plans) {
	const totalPlan = plans.length;
	const complete = [];
	const delay = [];

	plans.sort((a, b) => (a[1] > b[1] ? 1 : -1));

	const calMinute = (hour, min, playTime = 0) => {
		return Number(hour) * 60 + Number(min) + Number(playTime);
	};

	while (complete.length !== totalPlan) {
		const [name, startTime, playTime] = plans.shift();

		if (plans.length !== 0) {
			const [currHour, currMin] = startTime.split(':');
			const [nextHour, nextMin] = plans[0][1].split(':');
			const currTotalMin = calMinute(currHour, currMin, playTime);
			const nextTotalMin = calMinute(nextHour, nextMin);

			if (currTotalMin > nextTotalMin) {
				// 딜레이
				const delayTime = currTotalMin - nextTotalMin;

				delay.push([name, delayTime]);
			} else {
				// 완료
				let lastTime = nextTotalMin - currTotalMin;
				complete.push(name);

				while (delay.length > 0 && lastTime > 0) {
					let [delayName, delayMin] = delay.pop();

					delayMin -= lastTime;

					if (delayMin > 0) {
						delay.push([delayName, delayMin]);
						lastTime = 0;
					} else {
						complete.push(delayName);
						lastTime = Math.abs(delayMin);
					}
				}
			}
		} else {
			complete.push(name);
			for (let i = delay.length - 1; i >= 0; i--) {
				complete.push(delay[i][0]);
			}
		}
	}

	return complete;
}
