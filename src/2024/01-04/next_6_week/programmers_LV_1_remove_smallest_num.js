function solution(arr) {
	let minNum = Infinity;
	let minIndex = -1;

	if (arr.length === 1) {
		return [-1];
	}

	for (let i = 0; i < arr.length; i++) {
		if (minNum > arr[i]) {
			minIndex = i;
			minNum = arr[i];
		}
	}

	arr.splice(minIndex, 1);

	return arr;
}

function solution(arr) {
	const min = Math.min(...arr);
	return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}
