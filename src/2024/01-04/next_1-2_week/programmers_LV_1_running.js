function solution(players, callings) {
	const rankToPlayer = {};
	const playerToRank = {};
	const result = [];

	for (let i = 0; i < players.length; i++) {
		const player = players[i];

		rankToPlayer[i] = player;
		playerToRank[player] = i;
	}

	for (const player of callings) {
		const originRank = playerToRank[player];
		const frontPlayer = rankToPlayer[originRank - 1];

		rankToPlayer[originRank] = frontPlayer;
		rankToPlayer[originRank - 1] = player;
		playerToRank[player] -= 1;
		playerToRank[frontPlayer] += 1;
	}

	for (let i = 0; i < players.length; i++) {
		result.push(rankToPlayer[i]);
	}

	return result;
}
