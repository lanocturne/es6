const size = 4;
var placeHolder = '';

function findWord(board, word) {
    for (var i in board) {
        for (var j in board) {
            //4x4
            if (findWordHelper(board, word.toLowerCase(), i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

function findWordHelper(board, word, iStart, jStart, depth) {
    if (depth === word.length) return true;
    /*continue search, if current char match and it's not a placeholder,
     in oter words not the scaned char*/
    if (board[iStart][jStart] !== word[depth] ||
        board[iStart][jStart] === placeHolder) return false;
    //placeholder to check reuse char
    board[iStart][jStart] = placeHolder;
    //search 8 neigbors
    for (var i = iStart - 1; i <= iStart + 1; i++) {
        for (var j = jStart - 1; j <= jStart + 1; j++) {
            if (i >= 0 && i < size && j >= 0 && j < size) {
                if (findWordHelper(board, word, i, j, depth + 1)) {
                    board[iStart][jStart] = word[depth];
                    return true;
                }
            }
        }
    }
    board[iStart][jStart] = word[depth];
    return false;
}

var board = [
    ['t', 'a', 'l', 'p'],
    ['s', 'r', 'e', 'e'],
    ['q', 'w', 'o', 'p'],
    ['k', 'l', 'm', 'n']
];

console.log('Stars', findWord(board, 'stars'));
console.log('star', findWord(board, 'star'));