/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
'use strict';
var sortedListToBST = function(head) {
	if (!head) return null;
	var array = [];
	while (head) {
		array.push(head.val);
		head = head.next;
	}
	return arrayToBST(array);
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var arrayToBST = function(nums) {
	let num2Node = function(beginIndex, endIndex) {
		var node = null;
		if (beginIndex <= endIndex) {
			let m = Math.floor((endIndex + beginIndex) / 2)
			if (m >= 0) {
				node = new TreeNode(nums[m]);
				node.left = num2Node(beginIndex, m - 1)
				node.right = num2Node(m + 1, endIndex);
			}
		}
		return node;
	};
	return num2Node(0, nums.length - 1);
}

var sortedList = new ListNode(1);
sortedList.next = new ListNode(2);
sortedList.next.next = new ListNode(3);
sortedList.next.next.next = new ListNode(4);

console.log(sortedListToBST(sortedList));