/**
 * @param {number[]} nums
 * @return {number}
 */
'use strict';
var findPeakElement = function(nums) {
	var current = 0,
		peakIndex = 0;
	nums.forEach(function(n, i) {
		if (i === 0) {
			current = n;
			peakIndex = 0
		}
		if (n > current) {
			current = n;
			peakIndex = i;
		}
	});
	return peakIndex;
};

/**
 * A peak element is an element that is greater than its neighbors.
 */
var bstPeak = function(nums) {
	if (nums.length === 1) {
		return 0;
	}
	if (nums.length === 2) {
		return nums[0] > nums[1] ? 0 : 1;
	}
	return helper(nums, 0, nums.length - 1);
}

function helper(nums, leftIndex, rightIndex) {
	//num[-1]
	if (leftIndex > rightIndex) {
		return -1;
	}
	var midIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
	if ((midIndex === 0 || nums[midIndex - 1] < nums[midIndex]) &&
		(midIndex === rightIndex || nums[midIndex] > nums[midIndex + 1])) {
		return midIndex;
	}
	if (nums[midIndex] < nums[midIndex + 1]) {
		return helper(nums, midIndex + 1, rightIndex); //travase right subtree
	} else {
		return helper(nums, leftIndex, midIndex); //left subtree
	}
}
// console.log(bstPeak([1, 2, 4, 2]));
console.log(bstPeak([1, 2, 3]));
// console.log(findPeakElement([1, 2, 3, 2, 1, 5, 3]));