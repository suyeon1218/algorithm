class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function isSymmetric(root: TreeNode | null): boolean {
	if (!root || (!root.left && !root.right)) return true;
	if (!root.left || !root.right) return false;

	return compareTree(root.left, root.right);
}

function compareTree(left: TreeNode | null, right: TreeNode | null): boolean {
	if (!left && !right) return true;
	if (!left || !right || left.val !== right.val) return false;

	return (
		compareTree(left.left, right.right) && compareTree(left.right, right.left)
	);
}

export {}