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

function isValidBST(root: TreeNode | null): boolean {
  let result: boolean = true;
  if (root) {
    result =
      searchTree(-Infinity, root.val, root.left) &&
      searchTree(root.val, Infinity, root.right)
  }

  return result;
}

function searchTree(minNum: number, maxNum: number, node: TreeNode | null):boolean {
	if (node === null) {
		return true;
	}
	if (node.val >= maxNum || node.val <= minNum) {
		return false;
	}
	return (
		searchTree(minNum, node.val, node.left) &&
		searchTree(node.val, maxNum, node.right)
	);
}

export {};