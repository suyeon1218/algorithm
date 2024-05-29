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

function levelOrder(root: TreeNode | null): number[][] {
	const result: number[][] = [];
	const queue: TreeNode[][] = [];

  if (root) {
    queue.push([root]);
  }

	while (queue.length > 0) {
		const currLevel: TreeNode[] | undefined = queue.shift();
		const nextLevel: TreeNode[] = [];
		const currValues: number[] = [];

    if (currLevel) {
      for (let i = 0; i < currLevel.length; i++) {
        const currNode = currLevel[i];
  
        currValues.push(currNode.val);
        if (currNode.left) {
          nextLevel.push(currNode.left);
        }
        if (currNode.right) {
          nextLevel.push(currNode.right);
        }
      }
    }

		result.push(currValues);
		if (nextLevel.length > 0) {
			queue.push(nextLevel);
		}
	}

	return result;
}

export {}
