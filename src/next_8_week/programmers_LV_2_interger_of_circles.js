function solution(r1, r2) {
	let point = 0;

	for (let x = 0; x < r2; x++) {
		let y1 = Math.sqrt(Math.pow(r1, 2) - Math.pow(x, 2));
		let y2 = Math.sqrt(Math.pow(r2, 2) - Math.pow(x, 2));

		y1 = isNaN(y1) ? 0 : y1;
		y2 = isNaN(y2) ? 0 : y2;

		console.log(y2, y1);

		point += Math.floor(y2) - Math.ceil(y1) + 1;
	}

	return point * 4;
}

solution(2, 3);
