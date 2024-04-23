"use strict";
function partition(s) {
    const result = [];
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    function isPalindrome2(str) {
        let start = 0;
        let end = str.length - 1;
        while (start <= end) {
            if (str[start] !== str[end])
                return false;
            start += 1;
            end -= 1;
        }
        return true;
    }
    function backtracking(remainStr, prefixArr) {
        if (remainStr.length === 0) {
            result.push([...prefixArr]);
            return;
        }
        for (let i = 1; i <= remainStr.length; i++) { // ! slice startPoint, endPoint 에 따라 i 의 범위를 지정해줘야 함
            const prefix = remainStr.slice(0, i); // ! 문자열도 slice 로 자를 수 있음
            const postfix = remainStr.slice(i);
            if (isPalindrome(prefix)) {
                prefixArr.push(prefix);
                backtracking(postfix, prefixArr);
                prefixArr.pop();
            }
        }
    }
    backtracking(s, []);
    return result;
}
;
