function solution(sequence, k) {
	const answer = [0, sequence.length - 1];
	let [left, right] = [0, 0];
	let sum = sequence[0];

	while (right < sequence.length) {
		if (sum === k) {
			if (answer[1] - answer[0] > right - left) {
				answer[0] = left;
				answer[1] = right;
			}
			sum -= sequence[left++];
			sum += sequence[++right];
			continue;
		}
		if (sum > k) {
			sum -= sequence[left];
			left += 1;
		} else {
			right += 1;
			sum += sequence[right];
		}
	}
	return answer;
}
