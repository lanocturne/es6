'use strict';

class SpellChecker {
	constructor() {
		this.dict = [];
	}

	setup(dict) {
		this.dict = dict;
	}

	isMember(str) {
		if (!str) {
			return false;
		}
		for (let w of this.dict) {
			if (!w) {
				continue;
			}
			let matches = w.match(`^${str}$`);

			if (matches) {
				return true;
			}
		}
		return false;
	}
}

// var sc = new SpellChecker();
// sc.setup(['foo','bar','baz',null]);
// console.log(sc.isMember('f.o')); //true
// console.log(sc.isMember('..')); //false
// console.log(sc.isMember('kanye')); //false

class State {

	constructor() {
		this.isAcceptingState = false;
		this.children = new Map();
		this.initialState;
	}

	setupHelper(currentState, word, position, length) {
		var isAccepting = (position === length - 1);
		var chars = [word[position], '.'];
		for (let c of chars) {
			var childState = currentState.children.get(c);
			if (!childState) {
				childState = new State();
				currentState.children.set(c, childState);
			}
			childState.isAcceptingState = childState.isAcceptingState || isAccepting;
			if (!isAccepting) {
				this.setupHelper(childState, word, position + 1, length);
			}
		}
	}

	setup(words) {
		this.initialState = new State();
		for (let w of words) {
			if (w) {
				this.setupHelper(this.initialState, w, 0, w.length);
			}
		}
	}



	isMember(word) {
		var currentState = this.initialState;
		for (let c of word) {
			currentState = currentState.children.get(c);
			if (!currentState) return false;
		}
		return currentState.isAcceptingState;
	}

	/**
	 * check a string has all valid words;
	 */
	isValid(string) {
		var words = string.match(/\w+/g);
		if (!words) {
			return false;
		}
		for (let w of words) {
			if (!this.isMember(w)) {
				return false;
			}
		}
		return true;
	}
}

var sc = new State();
sc.setup(['foo', 'bar', 'baz', null]);
console.log(sc.isMember('f.o')); //true
console.log(sc.isMember('..')); //false
console.log(sc.isMember('kanye')); //false

console.log(sc.isValid('foo,bo. baz')); //false