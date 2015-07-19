Array.prototype.rotate = (function(){
	var unshift = Array.prototype.unshift,
	push=Array.prototype.push,
	splice=Array.prototype.splice;

	return function(count){
		var len=this.length >>>0,
		count = count >> 0;
		count = count % len;
		
		push.apply(this,splice.call(this,count,len));
		// console.log(count%len, splice.call(this,count%len,len), this);
		// unshift.apply(this,splice.call(this,count%len,len));
		
		return this;
	};
})();

var arr=[1,2,3,4,5];
arr.rotate(-2);
console.log(arr);