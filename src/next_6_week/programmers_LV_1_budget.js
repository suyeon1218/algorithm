function solution(d, budget) {
	let maxTeam = 0;
	d.sort((a, b) => a - b);

	for (let i = 0; i < d.length && budget > 0; i++) {
		budget -= d[i];
		maxTeam += 1;
	}

	if (budget < 0) {
		maxTeam -= 1;
	}

	return maxTeam;
}
