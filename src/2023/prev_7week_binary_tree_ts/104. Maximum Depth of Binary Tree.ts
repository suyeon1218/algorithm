/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  let result: number = 0;

  function searchTree(node: TreeNode | null, depth: number): void {
    if (node === null) return;
    if (depth > result) {
      result = depth;
    }

    searchTree(node.left, depth + 1);
    searchTree(node.right, depth + 1);
  }

  searchTree(root, 1);

  return result;
};