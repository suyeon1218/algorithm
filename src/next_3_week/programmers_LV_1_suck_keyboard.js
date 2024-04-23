function solution(keymap, targets) {
	const totalInput = [];

	const keyboards = keymap.map((keys) => {
		const keyboard = {};

		keys.split('').forEach((key, index) => {
			if (keyboard[key] === undefined) {
				keyboard[key] = index + 1;
			}
		});

		return keyboard;
	});

	for (const target of targets) {
		let sum = -1;
		for (const alphabet of target) {
			let minInput = Infinity;

			keyboards.forEach((keyboard) => {
				if (keyboard[alphabet] !== undefined) {
					minInput = Math.min(keyboard[alphabet], minInput);
				}
			});

			if (minInput === Infinity) {
				sum = -1;
				break;
			}
			sum += minInput;
		}
		totalInput.push(sum);
	}

	return totalInput;
}
