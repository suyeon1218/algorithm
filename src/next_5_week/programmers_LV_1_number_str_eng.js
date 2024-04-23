const numMap = {
	one: '1',
	two: '2',
	three: '3',
	four: '4',
	five: '5',
	six: '6',
	seven: '7',
	eight: '8',
	nine: '9',
	zero: '0',
};

function solution(s) {
	let str = '';

	for (let i = 0; i < s.length; i++) {
		let currStr = s[i];

		if (!isNaN(Number(currStr))) {
			str += currStr;
			continue;
		}

		while (numMap[currStr] === undefined) {
			i += 1;
			currStr += s[i];
		}

		str += numMap[currStr];
	}

	return Number(str);
}

// ! 배열의 인덱스를 활용하는 방법... + split 했다가 join 하기 (이게 좋긴 한지는 잘 모르겠는데 기발하긴 함)

function solution(s) {
	const numbers = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	let answer = s;

	for (let i = 0; i < numbers.length; i++) {
		let arr = answer.split(numbers[i]);
		answer = arr.join(i);
	}

	return Number(answer);
}
