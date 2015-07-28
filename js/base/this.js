'use strict';
// console.log(this == window) //true

function fn() {
	return this; //window.fn == undefined
}
console.log(fn());

var o = {
	prop: 31,
	fn: function() {
		return this.prop; //31
	}
};

console.log(o.fn());

var immediate = {
	prop: 11
};
var selfProp = function() {
	return this.prop;
};

immediate.most = {
	prop: 22,
	fn: selfProp
};

console.log(immediate.most.fn()); //22

//call and apply
function add(c, d) {
	return this.a + this.b + c + d;
}
var o = {
	a: 1,
	b: 2
};
console.log(add.call(o, 3, 4)); //10
console.log(add.apply(o, [4, 5])); //12

//Bind
function f() {
	return this.prop;
}
var g = f.bind({
	prop: 'binded'
});
var o = {
	prop: 31,
	f: f,
	g: g
};
console.log(o.f(), o.g()); //31,binded