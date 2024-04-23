function solution(x, y) {
	const sameNumMap = {};
	const xMap = getMap(x);
	const yMap = getMap(y);

	for (let i = 0; i <= 9; i++) {
		if (xMap[i] && yMap[i]) {
			sameNumMap[i] = Math.min(xMap[i], yMap[i]);
		}
	}

	if (Object.keys(sameNumMap).length === 0) {
		return '-1';
	}

	return getSequence(sameNumMap);
}

function getMap(str) {
	const map = {};

	for (let i = 0; i < str.length; i++) {
		if (map[str[i]] === undefined) {
			map[str[i]] = 0;
		}

		map[str[i]] += 1;
	}

	return map;
}

function getSequence(sameNumMap) {
	let answer = [];

	for (let i = 9; i >= 0; i--) {
		while (sameNumMap[i] && sameNumMap[i] > 0) {
			answer.push(i);
			sameNumMap[i] -= 1;
		}
	}

	if (answer[0] === 0) return '0';

	return answer.join('');
}
