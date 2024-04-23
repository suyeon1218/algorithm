class Node {
	constructor(value, next) {
		this.value = value ? value : undefined;
		this.next = next ? next : null;
	}
}

class Queue {
	constructor(value) {
		this.head = value ? new Node(value) : null;
		this.tail = this.head;
		this.length = value ? 1 : 0;
	}

	push(value) {
		this.length += 1;

		if (this.head === null) {
			this.head = new Node(value);
			this.tail = this.head;
			return;
		}

		this.tail.next = new Node(value);
		this.tail = this.tail.next;
	}

	shift() {
		if (this.head === null) {
			return;
		}

		const prevHead = this.head;
		this.length -= 1;
		this.head = this.head.next;

		if (this.length === 0) {
			this.tail = this.head;
		}

		return prevHead.value;
	}

	length() {
		return this.length;
	}
}

function solution(x, y, n) {
	const memo = {};
	const queue = new Queue([x, 0]);
	let result = Infinity;

	while (queue.length > 0) {
		const [currNumber, count] = queue.shift();

		if (currNumber >= y) {
			if (currNumber === y) {
				result = Math.min(result, count);
				break;
			}
			continue;
		}

		if (memo[currNumber * 3] === undefined) {
			memo[currNumber * 3] = count + 1;
			queue.push([currNumber * 3, count + 1]);
		}
		if (memo[currNumber * 2] === undefined) {
			memo[currNumber * 2] = count + 1;
			queue.push([currNumber * 2, count + 1]);
		}
		if (memo[currNumber + n] === undefined) {
			memo[currNumber + n] = count + 1;
			queue.push([currNumber + n, count + 1]);
		}
	}

	return result === Infinity ? -1 : result;
}

// queue 만드는 또다른 방법...

function solution2(x, y, n) {
	const queue = [[x, 0]];
	let [l, r] = [0, 1];
	let answer = Infinity;

	const done = {};

	while (l < r) {
		const [num, count] = queue[l++];
		if (done[num] || num > y) continue;
		if (num === y) {
			answer = Math.min(answer, count);
			continue;
		}
		done[num] = true;

		queue[r++] = [num * 3, count + 1];
		queue[r++] = [num * 2, count + 1];
		queue[r++] = [num + n, count + 1];
	}

	return answer === Infinity ? -1 : answer;
}
