/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (!root) {
		return [];
	}
	var queue = [root],
		res = [],
		level = [1];
	while (queue.length) {
		var node = queue.shift(),
			tempLevel = level.shift();
		if (res.length >= tempLevel) {
			res[tempLevel - 1].push(node.val);
		} else {
			var newLevel = [node.val];
			res.push(newLevel);
		}

		if (node.left) {
			queue.push(node.left);
			level.push(tempLevel + 1);
		}
		if (node.right) {
			queue.push(node.right);
			level.push(tempLevel + 1);
		}
	}
	return res;
};


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
console.log(levelOrder(tree));