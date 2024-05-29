function solution(cap, n, deliveries, pickups) {
	let answer = 0;
	let give = 0;
	let get = 0;

	for (let distance = n - 1; distance >= 0; distance--) {
		if (deliveries[distance] !== 0 || pickups[distance] !== 0) {
			let visit = 0;

			while (give < deliveries[distance] || get < pickups[distance]) {
				visit += 1;
				give += cap;
				get += cap;
			}
			give -= deliveries[distance];
			get -= pickups[distance];
			answer += (distance + 1) * visit * 2;
		}
	}
	return answer;
}

solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]);
