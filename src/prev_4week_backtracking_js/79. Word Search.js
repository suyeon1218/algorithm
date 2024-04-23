"use strict";
function exist(board, word) {
    const rowLen = board.length;
    const colLen = board[0].length;
    let result = false;
    function isOutOfBound(row, col) {
        return row < 0 || col < 0 || row > rowLen - 1 || col > colLen - 1;
    }
    function isSameName(position, row, col) {
        return word[position] === board[row][col];
    }
    function backtracking(position, row, col, isVisit) {
        if (isVisit.includes(`${row},${col}`)) {
            return;
        }
        if (position === word.length - 1) {
            result = true;
            return;
        }
        isVisit.push(`${row},${col}`);
        if (!isOutOfBound(row - 1, col) && isSameName(position + 1, row - 1, col)) {
            backtracking(position + 1, row - 1, col, [...isVisit]);
        }
        if (!isOutOfBound(row + 1, col) && isSameName(position + 1, row + 1, col)) {
            backtracking(position + 1, row + 1, col, [...isVisit]);
        }
        if (!isOutOfBound(row, col - 1) && isSameName(position + 1, row, col - 1)) {
            backtracking(position + 1, row, col - 1, [...isVisit]);
        }
        if (!isOutOfBound(row, col + 1) && isSameName(position + 1, row, col + 1)) {
            backtracking(position + 1, row, col + 1, [...isVisit]);
        }
    }
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (board[row][col] === word[0] && result === false) {
                backtracking(0, row, col, ["0, 0"]);
            }
        }
    }
    return result;
}
;
