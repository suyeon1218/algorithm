function solution(friends, gifts) {
	const friendsMap = makeFriendsMap(friends);
	const giftScoreMap = calculateGiftScore(friendsMap, gifts);

	return calculateNextBestGift(friendsMap, giftScoreMap);
}

function makeFriendsMap(friends) {
	const friendsMap = {};

	for (const me of friends) {
		friendsMap[me] = {};

		for (const friend of friends) {
			if (me === friend) continue;
			friendsMap[me][friend] = {};
			friendsMap[me][friend].give = 0;
			friendsMap[me][friend].receive = 0;
		}
	}

	return friendsMap;
}

function calculateGiftScore(friendsMap, gifts) {
	const giftScoreMap = {};

	for (const giftRecord of gifts) {
		const [giver, receiver] = giftRecord.split(' ');

		if (giftScoreMap[giver] === undefined) {
			giftScoreMap[giver] = 0;
		}

		if (giftScoreMap[receiver] === undefined) {
			giftScoreMap[receiver] = 0;
		}

		friendsMap[giver][receiver].give += 1;
		giftScoreMap[giver] += 1;

		friendsMap[receiver][giver].receive += 1;
		giftScoreMap[receiver] -= 1;
	}

	return giftScoreMap;
}

function calculateNextBestGift(friendsMap, giftScoreMap) {
	let bestGift = 0;

	for (const me in friendsMap) {
		let myNextGift = 0;

		for (const friend in friendsMap[me]) {
			const myGiftRecord = friendsMap[me][friend];
			const myGiftScore = giftScoreMap[me];
			const friendGiftScore = giftScoreMap[friend];

			if (myGiftRecord.give === myGiftRecord.receive) {
				if (myGiftScore === friendGiftScore) continue;

				myNextGift += myGiftScore < friendGiftScore ? 0 : 1;
			} else {
				myNextGift += myGiftRecord.give < myGiftRecord.receive ? 0 : 1;
			}
		}

		bestGift = Math.max(bestGift, myNextGift);
	}

	return bestGift;
}

const result = solution(
	['muzi', 'ryan', 'frodo', 'neo'],
	[
		'muzi frodo',
		'muzi frodo',
		'ryan muzi',
		'ryan muzi',
		'ryan muzi',
		'frodo muzi',
		'frodo ryan',
		'neo muzi',
	],
);

console.log(result);
