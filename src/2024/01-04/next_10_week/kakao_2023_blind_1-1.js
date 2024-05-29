// ! stack 으로 해결하니까 쉽다 ㅠㅠ
function solution(cap, n, deliveries, pickups) {
	while (deliveries[n - 1] === 0 && pickups[n - 1] === 0) {
		n -= 1;
		deliveries.pop();
		pickups.pop();
	}

	let totalDistance = n * 2;
	// ! && 연산자로 취해서 실패했었음 ㅠㅠ
	while (deliveries.length > 0 || pickups.length > 0) {
		let deliveryCap = cap;
		let pickupCap = cap;

		while (deliveryCap > 0 && deliveries.length > 0) {
			const box = deliveries.pop();

			if (box > deliveryCap) {
				deliveries.push(box - deliveryCap);
				deliveryCap = 0;
			} else {
				deliveryCap -= box;
			}
		}

		while (pickupCap > 0 && pickups.length > 0) {
			const box = pickups.pop();

			if (box > pickupCap) {
				pickups.push(box - pickupCap);
				pickupCap = 0;
			} else {
				pickupCap -= box;
			}
		}

		while (deliveries[deliveries.length - 1] === 0) {
			deliveries.pop();
		}
		while (pickups[pickups.length - 1] === 0) {
			pickups.pop();
		}

		totalDistance += Math.max(deliveries.length, pickups.length) * 2;
	}

	return totalDistance;
}

solution(2, 5, [0, 0, 0, 0, 0], [0, 4, 0, 0, 2]);
