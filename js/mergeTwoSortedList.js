/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one * sorted array.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	var mIndex = m - 1,
		nIndex = n - 1,
		mergedIndex = m + n - 1;
	while (mIndex >= 0 && nIndex >= 0) {
		nums1[mergedIndex--] = nums1[mIndex] > nums2[nIndex] ?
			nums1[mIndex--] : nums2[nIndex--];
	}
	while (nIndex >= 0) {
		nums1[mergedIndex--] = nums2[nIndex--];
	}
};

var nums1 = [1, 4, 5, 8, 9],
	nums2 = [3, 4, 4, 6];
merge(nums1, nums1.length, nums2, nums2.length);
console.log(nums1);