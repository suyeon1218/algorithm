function solution(n, nodes) {
	const graph = makeNodeGraph(nodes);
	const parentInfo = getParentInfo(n, graph);

	return parentInfo;
}

function makeNodeGraph(nodes) {
	const graph = {};

	for (const link of nodes) {
		const [nodeA, nodeB] = link.split(' ');

		if (graph[nodeA] === undefined) {
			graph[nodeA] = [];
		}
		if (graph[nodeB] === undefined) {
			graph[nodeB] = [];
		}

		graph[nodeA].push(nodeB);
		graph[nodeB].push(nodeA);
	}

	return graph;
}

// 현재 탐색 중인 부모 노드를 어떻게 알 수 있을가...
// 1부터 시작 -> 4, 6
function getParentInfo(n, graph) {
	const parentInfo = new Array(n + 1).fill(0);
	const queue = [1];

	parentInfo[1] = 1;

	while (queue.length > 0) {
		const currentNode = queue.shift();
		const childeNodes = graph[currentNode];

		childeNodes.forEach((childNode) => {
			if (parentInfo[childNode] === 0) {
				parentInfo[childNode] = currentNode;
				queue.push(childNode);
			}
		});
	}

	return parentInfo;
}

const result = solution(7, ['1 6', '6 3', '3 5', '4 1', '2 4', '4 7']);
console.log(result);
