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

hoisting();

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

//closure
function closure() {
  var items = document.querySelectorAll('.items');
  for (var i = 0, max = items.length; i < max; i++) {
    var element = items[i];
    element.addEventListener('click', createLog(i));
  }

  function createLog(i) {
    return function(e) {
      console.log('clicked', i);
    }
  }
}

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
console.log(reverseWords('words should be reversed'));