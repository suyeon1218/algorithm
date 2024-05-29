function solution(n, results) {
	if (n - 1 > results.length) return 0;

	const graph = makeResultGraph(results);

	if (Object.keys(graph).length !== n) {
		return 0;
	}

	const clearRankCount = getClearRank(n, graph);

	return clearRankCount;
}

function makeResultGraph(results) {
	const graph = {};

	for (const result of results) {
		const [winner, loser] = result;

		if (graph[winner] === undefined) {
			graph[winner] = {
				win: new Set(),
				lose: new Set(),
			};
		}
		if (graph[loser] === undefined) {
			graph[loser] = {
				win: new Set(),
				lose: new Set(),
			};
		}

		graph[winner].win.add(loser);
		graph[loser].lose.add(winner);
	}

	return graph;
}

function getClearRank(n, graph) {
	let clearRank = 0;

	for (const player in graph) {
		const playInfo = graph[player];
		const { win, lose } = playInfo;
		const winOpponents = Array.from(win);
		const loseOpponents = Array.from(lose);

		if (win.size + lose.size === n - 1) {
			clearRank += 1;
			continue;
		}

		for (const opponent of winOpponents) {
			for (const winnable of graph[opponent].win) {
				win.add(winnable);
			}
		}

		for (const opponent of loseOpponents) {
			for (const losable of graph[opponent].lose) {
				lose.add(losable);
			}
		}

		if (win.size + lose.size === n - 1) {
			clearRank += 1;
		}
	}

	return clearRank;
}
