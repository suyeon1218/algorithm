"use strict";
function exist(board, word) {
    const rowLen = board.length;
    const colLen = board[0].length;
    function isOutOfBound(row, col) {
        return row < 0 || col < 0 || row >= rowLen || col >= colLen;
    }
    function backtracking(wordPosition, row, col) {
        if (wordPosition >= word.length)
            return true;
        if (isOutOfBound(row, col) || board[row][col] !== word[wordPosition])
            return false;
        const result = backtracking(wordPosition + 1, row - 1, col) ||
            backtracking(wordPosition + 1, row + 1, col) ||
            backtracking(wordPosition + 1, row, col - 1) ||
            backtracking(wordPosition + 1, row, col + 1);
        return result;
    }
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (board[row][col] === word[0]) {
                if (backtracking(0, row, col) === true)
                    return true;
            }
        }
    }
    return false;
}
;
