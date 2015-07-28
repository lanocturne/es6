'use strict';

var area = Symbol();

class Polygon {
	constructor(height, width) {
		this.name = 'Polygon';
		this.height = height;
		this.width = width
	}

	toString() {
		console.log('This is ' + this.name);
	}
}

class Triac extends Polygon {
	constructor(height, width) {
		super(height, width);
		this.name = 'Triac'
	}

	get area() {
		return this[area] = this.height * this.width / 2;
	}

	toString() {
		super.toString();
		console.log('Child name is' + this.name);
	}
}

var tri = new Triac(5, 7);
tri.toString();
console.log(tri.area);