function solution(bandage, health, attacks) {
	const lastAttackTime = attacks[attacks.length - 1][0];
	const maxHealth = health;
	const [consumeTime, recovery, bonusRecovery] = bandage;
	let attackCount = 0;
	let healCount = 0;

	for (let time = 1; time <= lastAttackTime; time++) {
		if (attacks[attackCount][0] === time) {
			health -= attacks[attackCount][1];

			if (health <= 0) {
				return -1;
			}

			attackCount += 1;
			healCount = 0;
			continue;
		}
		if (health < maxHealth) {
			health += recovery;
			healCount += 1;
		}
		if (healCount === consumeTime) {
			health += bonusRecovery;
			healCount = 0;
		}

		health = health > maxHealth ? maxHealth : health;
	}

	return health;
}
