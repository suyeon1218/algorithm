const solution = (students) => {
	let answer = 0;

	const dfs = (count, sum) => {
		if (count >= 3) {
			if (sum === 0) {
				answer += 1;
			}
			return;
		}

		students.forEach((student) => dfs(count + 1, sum + student));
	};

	dfs(0, 0);

	return answer;
};
