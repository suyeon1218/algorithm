function solution(a, b) {
	if (a > b) {
		[a, b] = [b, a];
	}

	const interval = b - a;

	return (interval + 1) * (a + interval / 2);
}
