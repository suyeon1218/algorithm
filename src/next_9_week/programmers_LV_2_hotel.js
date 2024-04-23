function solution(times) {
	const rooms = [];
	let answer = 0;

	const newTimes = times.map((timeInterval) => {
		return timeInterval.map((time, index) => {
			const [hour, min] = time.split(':').map(Number);

			return index === 0 ? hour * 60 + min : hour * 60 + min + 10;
		});
	});

	newTimes.sort((a, b) => a[0] - b[0]);

	newTimes.forEach((time) => {
		rooms.push(time[1]);
		rooms.sort((a, b) => a - b);
		if (rooms[0] <= time[0]) {
			rooms.shift();
		} else {
			answer++;
		}
	});
	return answer;
}

// ! 실패 로직...
function solution2(times) {
	const rooms = [];
	times.sort((a, b) => (a[0] < b[0] ? 1 : -1));
	const newTimes = addCleaningTime(times);

	for (const time of newTimes) {
		const room = bookRoom2(rooms, time);

		if (room === -1) {
			rooms.push([]);
			rooms[rooms.length - 1].push(time);
		} else {
			rooms[room].push(time);
		}
	}

	return rooms.length;
}

function addCleaningTime(times) {
	const newTimes = times.map((time) => {
		const [startTime, endTime] = time;
		let [endHour, endMin] = endTime.split(':').map(Number);

		endMin += 10;

		if (endMin >= 60) {
			endHour += 1;
			endMin -= 60;
		}

		return [
			startTime,
			`${String(endHour).padStart(2, '0')}:${String(endMin).padStart(2, '0')}`,
		];
	});

	return newTimes;
}

function bookRoom2(rooms, time) {
	const [startTime, endTime] = time;
	let closestRoom = -1;
	let minTimeInterval = Infinity;

	for (let room = 0; room < rooms.length; room++) {
		for (const bookedTime of rooms[room]) {
			const [bookedStartTime, bookedEndTime] = bookedTime;

			if (endTime <= bookedStartTime) {
				const numberEndTime = Number(endTime.split(':').join(''));
				const numberBookedStartTime = Number(
					bookedStartTime.split(':').join(''),
				);

				if (minTimeInterval > numberBookedStartTime - numberEndTime) {
					minTimeInterval = numberBookedStartTime - numberEndTime;
					closestRoom = room;
				}
			} else if (startTime >= bookedEndTime) {
				const numberStartTime = Number(startTime.split(':').join(''));
				const numberBookedEndTime = Number(bookedEndTime.split(':').join(''));

				if (minTimeInterval > numberStartTime - numberBookedEndTime) {
					minTimeInterval = numberStartTime - numberBookedEndTime;
					closestRoom = room;
				}
			} else {
				break;
			}
		}
	}

	return closestRoom;
}
