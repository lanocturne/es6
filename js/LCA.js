/**
 * Definition for a binary tree node.
 
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //a node to be a descendant of itself
    if (root == p || root == q) {
        return root;
    }
    if (p === q) {
        return root || p;
    }
    var pInLeft = isLeft(root.left, p),
        qInLeft = isLeft(root.left, q);

    if ((pInLeft && !qInLeft) || (!pInLeft && qInLeft)) {
        //found it, 3->5&1
        return root;
    }
    //nodes are both at left
    if (pInLeft && qInLeft) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return lowestCommonAncestor(root.right, p, q);
    }
};

function isLeft(parent, p) {
    if (!parent) return false;
    if (parent == p) {
        return true;
    } else {
        return isLeft(parent.left, p) || isLeft(parent.right, p);
    }
}

var root = new TreeNode(3);
p1 = new TreeNode(5),
q1 = new TreeNode(1);
p2 = new TreeNode(2);
p3 = new TreeNode(4);

p1.right = p2;
p2.right = p3;
root.left = p1;
root.right = q1;

console.log(lowestCommonAncestor(root, p1, q1));
console.log(lowestCommonAncestor(root, p1, p3));