Array.prototype.rotate = function(n) {
	this.unshift.apply(this, this.splice(n + 1, this.length))
	return this;
}

var arr = [1, 2, 3, 4, 5];
var arr1 = [1, 2, 3, 4, 5];

/*
* Implement a function rotateArray(vector<int> arr, int r) 
which rotates the array by r places. Eg 1 2 3 4 5 on being rotated by 2 gives 4 5 1 2 3.
*/
var rotate = function(arr, r) {
	arr.unshift.apply(arr, arr.splice(r + 1, arr.length));
};

rotate(arr, 2);
console.log(arr);
// arr1.rotate(2);
// console.log(arr1);