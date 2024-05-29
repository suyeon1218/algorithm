function solution(price, money, count) {
	const prices = [...new Array(count)].map((_, index) => price * (index + 1));
	const remain = money - prices.reduce((prev, curr) => prev + curr, 0);

	return remain < 0 ? Math.abs(remain) : 0;
}

// ! 등차수열로 풀수 있음

function solution(price, money, count) {
	const remain = (price * count * (count + 1)) / 2 - money;

	return remain < 0 ? Math.abs(remain) : 0;
}
