Array.prototype.rotate = function( n ) {
  this.unshift.apply( this, this.splice( n, this.length ) )
  return this;
}

var arr=[1,2,3,4,5];


console.log(arr.splice(0,-2));