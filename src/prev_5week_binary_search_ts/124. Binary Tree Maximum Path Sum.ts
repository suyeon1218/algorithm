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

function maxPathSum(root: TreeNode | null): number {
  let result: number = -Infinity;

  function getMaxGain(node: TreeNode) {
    if (node === null) return 0;

    const gainOnLeft = Math.max(getMaxGain(node.left), 0);
    const gainOnRight = Math.max(getMaxGain(node.right), 0);
    const currMaxPath = node.val + gainOnLeft + gainOnRight;
    result = Math.max(result, currMaxPath);

    return node.val + Math.max(gainOnLeft, gainOnRight);
  }
  getMaxGain(root);

  return result;
};