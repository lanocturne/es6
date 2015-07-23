function stringReplace(str, match, replace) {
	return match ? str.split(match).join(replace) :
		str;
}

function regexReplace(str, match, replace) {
	var regex = new RegExp(match, 'g'),
		matches;
	while ((matches = regex.exec(str))) {
		str = str.substr(0, matches.index) + replace + str.substr(matches.index + match.length, str.length);
	}
	console.log(str);
}
// regexReplace('test123123','123','456');
console.log(stringReplace('abc123', '', 'xx'));