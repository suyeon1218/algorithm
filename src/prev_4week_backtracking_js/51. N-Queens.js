"use strict";
function solveNQueens(n) {
    const result = [];
    const board = new Array(n).fill(-1);
    function replaceString() {
        const stringBoard = [];
        for (let row = 0; row < n; row++) {
            let rowString = '';
            for (let col = 0; col < n; col++) {
                if (board[row] === col) {
                    rowString += 'Q';
                }
                else {
                    rowString += '.';
                }
            }
            stringBoard.push(rowString);
        }
        result.push(stringBoard);
    }
    function isValidPlace(row) {
        for (let i = 0; i < row; i++) {
            if (board[row] === board[i] || Math.abs(board[row] - board[i]) === row - i) {
                return false;
            }
        }
        return true;
    }
    function backtracking(row) {
        if (row === n) {
            replaceString();
            return;
        }
        for (let col = 0; col < n; col++) {
            board[row] = col;
            if (isValidPlace(row)) {
                backtracking(row + 1);
            }
        }
    }
    backtracking(0);
    return result;
}
