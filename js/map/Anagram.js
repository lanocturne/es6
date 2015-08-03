/**
For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
'use strict';
var isAnagram = function(s, t) {
	var firstMap = new Map();
	for (let i = 0; i < s.length; i++) {
		firstMap.set(s[i], (firstMap.get(s[i]) || 0) + 1);
		firstMap.set(t[i], (firstMap.get(t[i]) || 0) - 1);
	}
	for (let entry of firstMap) {
		if (entry[1] !== 0) {
			return false;
		}
	}
	return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));