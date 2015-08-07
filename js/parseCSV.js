function parseCSV(str) {
    var arr = [];
    var quote = false;
    for (var c = col = 0; c < str.length; c++) {
        var cc = str[c],
            nc = str[c + 1];
        if (!arr[col]) {
            arr[col] = '';
        }
        // arr[row] = arr[row] || [];
        // arr[row][col] = arr[row][col] || '';

        if (cc == '"' && quote && nc == '"') {
            arr[col] += cc;
            ++c;
            continue;
        }
        if (cc == '"') {
            quote = !quote;
            continue;
        }
        if (cc == ',' && !quote) {
            ++col;
            continue;
        }
        // if (cc == '\n' && !quote) {
        //     ++row;
        //     col = 0;
        //     continue;
        // }

        arr[col] += cc;
    }
    return arr;
}

console.log(parseCSV(`"John Johnson, Jr.",San Francisco`));
console.log(parseCSV(`John Johnson,San Francisco`));