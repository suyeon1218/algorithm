function solution(s, n) {
	return s
		.split('')
		.map((el) => {
			const ascii = el.charCodeAt();
			const newAscii =
				ascii <= 90
					? (((ascii % 65) + n) % 26) + 65
					: (((ascii % 97) + n) % 26) + 97;

			return el === ' ' ? ' ' : String.fromCharCode(newAscii);
		})
		.join('');
}
