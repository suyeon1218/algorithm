function solution(users, emoticons) {
	const discounts = [10, 20, 30, 40];
	const allDiscount = [];
	let maxUser = 0;
	let maxMoney = 0;

	function getAllDiscount(currDiscount) {
		if (currDiscount.length === emoticons.length) {
			allDiscount.push(currDiscount);
			return;
		}

		for (const discount of discounts) {
			getAllDiscount([...currDiscount, discount]);
		}
	}

	getAllDiscount([]);

	const totalEmoticon = allDiscount.map((discounts) => {
		return discounts.map((discount, index) => [
			discount,
			emoticons[index] * ((100 - discount) / 100),
		]);
	});

	for (const changedEmoticons of totalEmoticon) {
		let enjoyUser = 0;
		let totalMoney = 0;
		for (const [rate, limitMoney] of users) {
			let consumeMoney = 0;
			for (const [discount, discountedMoney] of changedEmoticons) {
				if (rate > discount) continue;

				consumeMoney += discountedMoney;
			}
			if (consumeMoney >= limitMoney) {
				enjoyUser += 1;
			} else {
				totalMoney += consumeMoney;
			}
		}
		if (enjoyUser > maxUser) {
			maxUser = enjoyUser;
			maxMoney = totalMoney;
		} else if (enjoyUser === maxUser) {
			maxMoney = Math.max(maxMoney, totalMoney);
		}
	}

	return [maxUser, maxMoney];
}

solution(
	[
		[40, 10000],
		[25, 10000],
	],
	[7000, 9000],
);
