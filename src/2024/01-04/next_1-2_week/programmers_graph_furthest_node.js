function solution(n, vertex) {
	const graph = makeGraph(n, vertex); // 기존이랑 똑같은 그래프 만듦
	const distanceGraph = BFS(n, graph); // BFS 탐색

	return getMaxDistNodes(distanceGraph);
}

function makeGraph(n, vertex) {
	const graph = {};

	for (const vertexInfo of vertex) {
		const [nodeA, nodeB] = vertexInfo;

		if (graph[nodeA] === undefined) {
			graph[nodeA] = [];
		}
		if (graph[nodeB] === undefined) {
			graph[nodeB] = [];
		}

		graph[nodeA].push([nodeB, 1]);
		graph[nodeB].push([nodeA, 1]);
	}

	return graph;
}

function BFS(n, graph) {
	const startNode = '1';
	const distanceGraph = new Array(n).fill(Infinity);
	const queue = [];
	const visitStatus = new Array(n).fill(false);

	queue.push(graph[startNode]);
	visitStatus[startNode - 1] = true;
	distanceGraph[startNode - 1] = 0;

	while (queue.length > 0) {
		const linkedNodes = queue.shift();

		for (const linkedNode of linkedNodes) {
			const [nodeNumber, distance] = linkedNode;

			if (visitStatus[nodeNumber - 1] === true) continue;
			visitStatus[nodeNumber - 1] = true;
			distanceGraph[nodeNumber - 1] = Math.min(
				distanceGraph[nodeNumber - 1],
				distance,
			);

			graph[nodeNumber].forEach((nextLinkedNode) => {
				nextLinkedNode[1] = distance + 1;
			});

			queue.push(graph[nodeNumber]);
		}
	}

	return distanceGraph;
}

function getMaxDistNodes(dist) {
	const maxDist = Math.max(...dist);
	let maxDistNode = 0;

	dist.forEach((distInfo) => {
		if (distInfo === maxDist) {
			maxDistNode += 1;
		}
	});

	return maxDistNode;
}
