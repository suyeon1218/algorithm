function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (preorder.length === 0) return null;
	const root: TreeNode = new TreeNode(preorder[0]);
	const rootIndex = inorder.findIndex((element) => element === root.val);

	const inorderLeft = inorder.slice(0, rootIndex);
	const inorderRight = inorder.slice(rootIndex + 1);
	const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
	const preorderRight = preorder.slice(inorderLeft.length + 1);

	root.left = buildTree(preorderLeft, inorderLeft);
	root.right = buildTree(preorderRight, inorderRight);

	return root;
}

// 다른 답
function makeTree(preorder: number[], inorder: number[]): TreeNode | null {
	const hash: { [key: number]: number } = {};

	inorder.forEach((value, index) => {
		hash[value] = index;
	});

	function build(start: number, end: number): TreeNode | null {
		if (start > end) return null;

		const root = new TreeNode(preorder.shift());

		root.left = build(start, hash[root.val] - 1);
		root.right = build(hash[root.val] + 1, end);

		return root;
	}

	return build(0, inorder.length - 1);
}
