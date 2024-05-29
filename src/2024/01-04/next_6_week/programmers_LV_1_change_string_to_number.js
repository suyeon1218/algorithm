function solution(s) {
	if (!isNaN(Number(s))) return Number(s);

	const number = s.slice(1);

	return s[0] === '-' ? -Number(number) : Number(number);
}

function solution(s) {
	return s / 1;
}
