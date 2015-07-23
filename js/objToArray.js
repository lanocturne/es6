Array.prototype.each = function(cb) {
    for (var i = 0; i < this.length; i += 1) {
        cb(this[i], i)
    }
};

function stringify(arr) {
    var ret = [];
    arr.each(function(el) {
        console.log(el);
        var current = '[' + el[0] + ', ';
        if (typeof el[1] === 'object') {
            current += stringify(el[1]);
        } else {
            current += el[1];
        }
        current += ']';
        ret.push(current);
    });
    return '[' + ret.join(', ') + ']';
}

function toPairs(obj) {
    var arrs = [];
    for (var p in obj) {
        if (typeof obj[p] === 'object') {
            // toPairs(obj[p]);
            arrs.push([p, toPairs(obj[p])]);
        } else {
            arrs.push([p, obj[p]]);
        }
    }
    return stringify(arrs);
};

toPairs({
    a: {
        b: 'c'
    }
});