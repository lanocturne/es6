/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
	if ((root.val - p.val) * (root.val - q.val) <= 0) {
		return root;
	}
	if (p.val < root.val) {
		return lowestCommonAncestor(root.left, p, q);
	} else {
		return lowestCommonAncestor(root.right, p, q);
		return lowestCommonAncestor(root.right, p, q);
	}
};

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/*
		_______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
*/
var root = new TreeNode(6),
	p1 = new TreeNode(2),
	q1 = new TreeNode(8),
	p2l = new TreeNode(0),
	p2 = new TreeNode(4),
	p4l = new TreeNode(3),
	p4r = new TreeNode(5);

root.left = p1;
root.right = q1;
p1.left = p2l;
p1.right = p2;
p2.left = p4l;
p2.right = p4r;

console.log(lowestCommonAncestor(root, p1, p2));
console.log(lowestCommonAncestor(root, p1, q1));