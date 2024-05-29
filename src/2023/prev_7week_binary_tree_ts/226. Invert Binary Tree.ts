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


function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const invertRoot = new TreeNode(root.val);

  function makeInvertTree(node: TreeNode, originNode: TreeNode) {
    if (originNode.right) {
      node.left = new TreeNode(originNode.right.val);
      makeInvertTree(node.left, originNode.right);
    }
    if (originNode.left) {
      node.right = new TreeNode(originNode.left.val);
      makeInvertTree(node.right, originNode.left);
    }
  }

  makeInvertTree(invertRoot, root);

  return invertRoot;
};

function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const invertRoot = root;
  const oldLeft = root.left;
  const oldRight = root.right;

  invertRoot.left = oldRight;
  invertRoot.right = oldLeft;

  invertTree2(root.left);
  invertTree2(root.right);

  return invertRoot;
};

export {};