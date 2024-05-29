class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return [];
  // 1. 레벨 순회
  const queue: TreeNode[][] = [[root]];
  const result: number[] = [];

  while (queue.length > 0) {
    const currLevelNodes: TreeNode[] | undefined = queue.shift();
    const nextLevelNodes: TreeNode[] = [];

    if (currLevelNodes) {
      const rightSightNode = currLevelNodes[currLevelNodes.length - 1].val;
      
      result.push(rightSightNode);

      for (const currNode of currLevelNodes) {
        if (currNode.left) {
          nextLevelNodes.push(currNode.left);
        }
        if (currNode.right) {
          nextLevelNodes.push(currNode.right);
        }
      }
      if (nextLevelNodes.length > 0) {
        queue.push(nextLevelNodes);
      }
    }
  }
  
  return result;
};

export {};