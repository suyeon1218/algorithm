const fs = require('fs');
const [n, ...inputArr] = fs
	.readFileSync('dev/stdin')
	.toString()
	.trim()
	.split('\n');

function dfs(node, distance) {
	if (isVisited[node] === true) return;
	isVisited[node] = true;

	if (radius < distance) {
		radius = distance;
		endNode = node;
	}

	for (let [linkedNode, linkedDistance] of graph[node]) {
		dfs(linkedNode, linkedDistance + distance);
	}
}

const getGraph = (arr) => {
	const graph = {};

	for (let node = 0; node < Number(n); node++) {
		const nodeInfo = inputArr[node].split(' ').map((el) => Number(el));
		const currNode = nodeInfo[0];
		graph[currNode] = [];

		for (let i = 1; i < nodeInfo.length; i += 2) {
			if (nodeInfo[i] !== -1) {
				graph[currNode].push([nodeInfo[i], nodeInfo[i + 1]]);
			}
		}
	}

	return graph;
};

const graph = getGraph(inputArr);
const isVisited = new Array(Number(n) + 1).fill(false);
let radius = -1;
let endNode = -1;

dfs(1, 0);
isVisited.fill(false);
dfs(endNode, 0);

console.log(radius);
