function solution(N, stages) {
	const stageNonePass = new Array(N + 1).fill(0);
	const stageRate = {};
	let totalUser = stages.length;

	for (const stage of stages) {
		stageNonePass[stage] += 1;
	}

	for (let stage = 1; stage <= N; stage++) {
		if (stageRate[stage] === undefined) {
			stageRate[stage] = 0;
		}

		stageRate[stage] = stageNonePass[stage] / totalUser;
		totalUser -= stageNonePass[stage];
	}

	return Object.keys(stageRate)
		.sort((a, b) => stageRate[b] - stageRate[a])
		.map((el) => Number(el));
}

// ! 다른 사람 풀이

// ! O(N^2) 시간 복잡도
function solution(N, stages) {
	const result = [];

	for (let i = 1; i <= N; i++) {
		let reach = stages.filter((x) => x >= i).length;
		let curr = stages.filter((x) => x === i).length;
		result.push([i, curr / reach]);
	}
	result.sort((a, b) => b[1] - a[1]);
	return result.map((x) => x[0]);
}
