function solution(arr1, arr2) {
	return arr1.map((line, row) =>
		line.map((_, col) => arr1[row][col] + arr2[row][col]),
	);
}
