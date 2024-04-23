function solution(edges) {
	const graph = makeGraph(edges);

	return getGraphInfo(graph);
}

function makeGraph(edges) {
	const graph = {};

	for (const edge of edges) {
		const [startNode, endNode] = edge;
		if (graph[startNode] === undefined) {
			graph[startNode] = { go: 0, receive: 0 };
		}

		if (graph[endNode] === undefined) {
			graph[endNode] = { go: 0, receive: 0 };
		}

		graph[startNode].go += 1;
		graph[endNode].receive += 1;
	}

	return graph;
}

function getGraphInfo(graph) {
	let newNode = 0;
	let lineGraph = 0;
	let loopGraph = 0;

	for (const node in graph) {
		const { go, receive } = graph[node];

		if (go >= 2 && receive === 0) {
			newNode = Number(node);
			continue;
		}
		if (go === 0) {
			lineGraph += 1;
			continue;
		}
		if (go === 2 && receive >= 2) {
			loopGraph += 1;
			continue;
		}
	}

	return [
		newNode,
		graph[newNode].go - (lineGraph + loopGraph),
		lineGraph,
		loopGraph,
	];
}
