'use strict';


String.prototype.repeatify = function(times) {
  var me = '';
  for (let i = times; i > 0; i--) {
    me += this;
  }
  console.log(me);
};

let hello = 'hello';
hello.repeatify(3);

//hoisting
function hoisting() {
  console.log(a);
  console.log(foo());

  var a = 1;

  function foo() {
    return 2;
  }
}
// hoisting();

/**
* object in an ECMAScript implementation whose semantics are fully defined
 by this specification rather than by the host environment.
 Object (constructor), Date, Math, parseInt, eval, string methods like indexOf and replace
*/
var nativeObject = Object.create(hoisting);

/*
object supplied by the host environment to complete the execution environment 
of ECMAScript.
window, document, location, history, XMLHttpRequest, setTimeout, getElementsByTagName, querySelectorAll
*/
module.exports = {}; //host Object

/*
 function foo vs var foo=function
 defined at run-time, whereas functionTwo is defined at parse-time
*/
foo(); //parse time
function foo() {
  console.log('parse time');
}

// bar(); //undefined
var bar = function() {
  console.log('run time');
}

var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    }
  }
};

//get Colin
console.log(obj.prop.getFullname.apply(obj)); //call

//map
function reformatObjs(arr) {
  var reformat = arr.map(function(obj) {
    return [obj.key, obj.value];
  });
  return reformat;
}
console.log(reformatObjs([{
  key: 'a',
  value: 1
}, {
  key: 'b',
  value: 2
}]));

//reverse words in a function
function reverseWords(words) {
  return words.split(' ').reverse().join(' ');
}
// console.log(reverseWords(`i'm a lasagna hog`));

var typeA = 10 + '20';
console.log(typeof typeA);

var foo = "Hello";
(function() {
  var bar1 = " World";
  console.log(foo + bar1);
})();
// console.log(foo + bar1); Helloundefined, strict exception

var foo = {
  n: 1
};
var bar = foo;
foo.x = foo = {
  n: 2
};
console.log(foo.x); //undefined
console.log(bar); //{ n: 1, x: { n: 2 } }
console.log(foo); //{ n: 2}

//one three two
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

// [1,2,3,4,5,1,2,3,4,5]
let duplicate = function(nums) {
  return nums.concat(nums.slice());
};

let nums = [1, 2, 3, 4];
console.log(duplicate(nums));

/**
* Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,
 "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
*/
let modLog = function() {
  for (let i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
      console.log(i, 'fizzbuzz');
    } else {
      if (!(i % 3)) {
        console.log(i, 'fizz');
      }
      if (!(i % 5)) {
        console.log(i, 'buzz');
      }
    }
  }
}
modLog();