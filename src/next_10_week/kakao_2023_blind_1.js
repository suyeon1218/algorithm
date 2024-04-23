function sum(arr) {
	return arr.reduce((prev, curr) => prev + curr, 0);
}

// ! 시간 초과
function solution(cap, n, deliveries, pickups) {
	let totalBox = sum(deliveries) + sum(pickups);
	let totalDistance = 0;
	let endPoint = n - 1;

	while (deliveries[endPoint] === 0 && pickups[endPoint] === 0) {
		endPoint -= 1;
	}

	while (totalBox > 0) {
		let deliveryCap = cap;
		let pickupCap = cap;
		let deliveryPoint = endPoint;
		let pickupPoint = endPoint;

		totalDistance += (endPoint + 1) * 2;

		while (deliveryCap > 0 && deliveryPoint >= 0) {
			if (deliveryCap >= deliveries[deliveryPoint]) {
				deliveryCap -= deliveries[deliveryPoint];
				totalBox -= deliveries[deliveryPoint];
				deliveries[deliveryPoint] = 0;
			} else {
				deliveries[deliveryPoint] -= deliveryCap;
				totalBox -= deliveryCap;
				deliveryCap = 0;
				break;
			}
			deliveryPoint -= 1;
		}

		while (pickupCap > 0 && pickupPoint >= 0) {
			if (pickupCap > 0) {
				if (pickupCap >= pickups[pickupPoint]) {
					pickupCap -= pickups[pickupPoint];
					totalBox -= pickups[pickupPoint];
					pickups[pickupPoint] = 0;
				} else {
					pickups[pickupPoint] -= pickupCap;
					totalBox -= pickupCap;
					pickupCap = 0;
					break;
				}
				pickupPoint -= 1;
			}
		}

		while (deliveries[deliveryPoint] === 0 && deliveryPoint > 0) {
			deliveryPoint -= 1;
		}
		while (pickups[pickupPoint] === 0 && pickupPoint > 0) {
			pickupPoint -= 1;
		}

		endPoint = Math.max(deliveryPoint, pickupPoint);
	}
	console.log(totalDistance);
	return totalDistance;
}

solution(2, 5, [0, 0, 0, 0, 0], [0, 4, 0, 0, 2]);
