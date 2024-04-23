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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  const rootIndex = Math.floor(nums.length / 2);
  const root: TreeNode | null = new TreeNode(nums[rootIndex]);

  root.left = sortedArrayToBST(nums.slice(0, rootIndex));
  root.right = sortedArrayToBST(nums.slice(rootIndex + 1));

  return root;
};