function solution(users, emoticons) {
	const discounted = [];
	let joinCount = 0;
	let purchased = 0;
	const discountRates = [10, 20, 30, 40];

	function getAllCases(arr, length) {
		const cases = [];

		function recursiveFunc(currentCase) {
			if (currentCase.length === length) {
				cases.push(currentCase);
				return;
			}

			for (let i = 0; i < arr.length; i++) {
				recursiveFunc([...currentCase, arr[i]]);
			}
		}

		recursiveFunc([]);

		return cases;
	}

	const arr2 = getAllCases(discountRates, emoticons.length);
	console.log(arr2);
}

solution(
	[
		[40, 10000],
		[25, 10000],
	],
	[7000, 9000],
);
