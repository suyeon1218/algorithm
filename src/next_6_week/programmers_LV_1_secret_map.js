function solution(n, arr1, arr2) {
	const map1 = arr1.map((num) => decryptionMap(num, n));
	const map2 = arr2.map((num) => decryptionMap(num, n));

	return convertPrint(overlayMap(map1, map2));
}

function decryptionMap(num, n) {
	const map = [];

	while (num > 0) {
		map.push(num % 2);
		num = Math.floor(num / 2);
	}

	while (map.length < n) {
		map.push(0);
	}

	return map.reverse();
}

function overlayMap(map1, map2) {
	return map1.map((line, row) =>
		line.map((cell, col) => !(map1[row][col] || map2[row][col])),
	);
}

function convertPrint(map) {
	return map.map((line) =>
		line.map((cell) => (cell === true ? ' ' : '#')).join(''),
	);
}

// ! 아니 정규식 왜케 좋아해

function solution(n, arr1, arr2) {
	return arr1.map((v, i) =>
		addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
			+a ? '#' : ' ',
		),
	);
}

const addZero = (n, s) => {
	return '0'.repeat(n - s.length) + s;
};

// ! 다른 정규식 ㅠ
var solution = (n, a, b) =>
	a.map((a, i) =>
		(a | b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'),
	);

// ! 오...
function solution(n, arr1, arr2) {
	const answer = [];
	let num1, num2, s;

	for (let i = 0; i < n; i++) {
		num1 = arr1[i];
		num2 = arr2[i];
		s = '';

		for (let j = 0; j < n; j++) {
			s = (num1 % 2) + (num2 % 2) ? '#' + s : ' ' + s;
			num1 = Math.floor(num1 / 2);
			num2 = Math.floor(num2 / 2);
		}

		answer.push(s);
	}

	return answer;
}
