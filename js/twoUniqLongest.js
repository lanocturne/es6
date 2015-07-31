/*How to find the longest substring containing two unique repeating characters
 * in an input string "aabadefghaabbaagad", the longest such string is "aabbaa"
 */
'use strict';

function longestSub(string) {
	var longest = '',
		current = '',
		lettera = '',
		letterb = string[0],
		first_start = 0;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === lettera || string[i] === letterb) {
			if (string[i] !== current.slice(-1)) {
				//not equal to end char
				first_start = current.length;
			}

		} else {
			//new char
			lettera = letterb;
			letterb = string[i];
			current = current.substr(first_start);
			first_start = current.length;
		}

		current += string[i];

		if (current.length >= longest.length) {
			longest = current;
		}
	}

	return longest;
}

console.log(longestSub('aabadefghaabbaagad'))