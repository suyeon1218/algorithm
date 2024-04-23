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

/**
 Do not return anything, modify root in-place instead.
 */
 function flatten(root: TreeNode | null): void {
  const inorder: TreeNode[] = [];
  const stack: TreeNode[] = [];
  let node: TreeNode | null | undefined = root;
  let right: TreeNode | null = null;

  if (root === null) return;

  // 1. 전위 순회 하기
  while (stack.length > 0 || node) {
    if (node) {
      inorder.push(node);
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      node = node ? node.right : null;
    }
  }

  // 2. inorder 돌면서 연결하기
  while(inorder.length > 0) {
    node = inorder.pop();

    if (node) {
      node.left = null;
      node.right = right;
    }
    if (node !== undefined) {
      right = node;
    }
  }
};