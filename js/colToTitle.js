/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        pass = Math.floor(n / 26);
    mod = n % 26,
    result = '';
    console.log(pass,mod);
    if (pass > 0) {
        result = base[pass-1];
        if (mod > 0) {
            result += base[mod-1];
        }
    } else {
        result = base[n - 1];
    }

    return result;
};

console.log(convertToTitle(51));