var currentMax = 0;

function checkBST(node) {
  if (node) {
    if (!checkBST(node.left)) {
      return false;
    }
    if (currentMax >= node.value) {
      return false;
    }
    currentMax = node.value;
    if (!checkBST(node.right)) {
      return false;
    }
    return true;
  }
}

function isValidBST(root, min, max) {
  if (!root) return true;
  if (min && root.value <= min.value) return false;
  if (max && root.value >= max.value) return false;
  if (!isValidBST(root.left, min, root)) return false;
  if (!isValidBST(root.right, root, max)) return false;
  return true;
}

console.log(isValidBST({
  value: 1,
  left: {
    value: 1
  }
}, null, null));