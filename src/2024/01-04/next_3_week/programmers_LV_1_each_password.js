const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
const alphabetMap = {
	a: 0,
	b: 1,
	c: 2,
	d: 3,
	e: 4,
	f: 5,
	g: 6,
	h: 7,
	i: 8,
	j: 9,
	k: 10,
	l: 11,
	m: 12,
	n: 13,
	o: 14,
	p: 15,
	q: 16,
	r: 17,
	s: 18,
	t: 19,
	u: 20,
	v: 21,
	w: 22,
	x: 23,
	y: 24,
	z: 25,
};

function solution(s, skip, index) {
	skip = new Set(skip.split(''));
	let answer = '';

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		let charIndex = alphabetMap[s[i]];
		let count = index;

		while (count > 0) {
			charIndex += 1;

			if (charIndex > 25) {
				charIndex = 0;
			}
			if (!skip.has(alphabetString[charIndex])) {
				count -= 1;
			}
		}

		answer += alphabetString[charIndex];
	}

	return answer;
}
