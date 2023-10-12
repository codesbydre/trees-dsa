/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    let queue = [{ node: this.root, depth: 1 }];

    while (queue.length) {
      let { node, depth } = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) queue.push({ node: node.left, depth: depth + 1 });
      if (node.right) queue.push({ node: node.right, depth: depth + 1 });
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function _helper(node) {
      if (!node) return 0;
      return 1 + Math.max(_helper(node.left), _helper(node.right));
    }

    return _helper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;

    let maxSumValue = Number.MIN_SAFE_INTEGER;

    function _helper(node) {
      if (!node) return 0;

      let left = Math.max(0, _helper(node.left));
      let right = Math.max(0, _helper(node.right));

      maxSumValue = Math.max(maxSumValue, node.val + left + right);

      return node.val + Math.max(left, right);
    }

    _helper(this.root);
    return maxSumValue;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    function _helper(node) {
      if (!node) return;

      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }
      _helper(node.left);
      _helper(node.right);
    }

    _helper(this.root);
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
