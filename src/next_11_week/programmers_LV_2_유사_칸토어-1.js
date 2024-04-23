function solution(n, l, r) {
	const defaultCantor = [1, 1, 0, 1, 1];

	function countBit(index) {
		let base = 0;

		if (index <= 5) {
			let count = 0;

			for (let i = 0; i < index; i++) {
				if (defaultCantor[i] === 1) count += 1;
			}

			return count;
		}

		while (Math.pow(5, base + 1) < index) {
			base += 1;
		}

		const section = Math.floor(index / Math.pow(5, base));
		const remainder = index % Math.pow(5, base);

		let count = section * Math.pow(4, base);

		if (section === 2) {
			return count;
		}
		if (section > 2) {
			count -= Math.pow(4, base);
		}

		return count + countBit(remainder);
	}

	return countBit(r) - countBit(l - 1);
}

solution(2, 4, 17);
