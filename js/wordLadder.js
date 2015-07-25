/*Given:
start = "hit"
end = "cog"
dict = ["hot","dot","dog","lot","log"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {set<string>} wordDict
 * @return {number}
 */
'use strict';
var ladderLength = function(beginWord, endWord, wordDict) {
	var setHead = new Set(),
		setTail = new Set();

	setHead.add(beginWord);
	setTail.add(endWord);

	return distanceHelper(wordDict, setHead, setTail, 1);
};

function distanceHelper(wordDict, setHead, setTail, distance) {
	if (!setHead.size) {
		return 0;
	}
	//bfs from root
	if (setHead.size > setTail.size) {
		return distanceHelper(wordDict, setTail, setHead, distance);
	}
	//dequeue
	for (let sh of setHead) {
		wordDict.delete(sh);
	}
	for (let st of setTail) {
		wordDict.delete(st);
	}
	//next distance set
	var newSet = new Set();
	//match word
	for (let s of setHead) {
		//replace char with other letters to find contained word
		for (let i in s) {
			for (let asc = 97; asc <= 122; asc++) {
				let word = s.split('');
				word[i] = String.fromCharCode(asc);
				word = word.join('');

				if (setTail.has(word)) {
					return distance + 1;
				}
				//next distance, hit->hot
				if (wordDict.has(word)) {
					newSet.add(word);
				}
			}
		}
	}

	return distanceHelper(wordDict, setTail, newSet, distance + 1);

}

var wordDict = new Set(["hot", "dot", "dog", "lot", "log"]);

console.log(ladderLength('hit', 'cog', wordDict));