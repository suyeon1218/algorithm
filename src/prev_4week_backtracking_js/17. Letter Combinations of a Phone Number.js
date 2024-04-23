"use strict";
/*
  * explain
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
  Return the answer in any order.
  A mapping of digits to letters (just like on the telephone buttons) is given below.
  Note that 1 does not map to any letters.

  2~9까지 숫자가 포함된 문자열이 주어질 때, 가능한 문자열의 조합을 전부 반환하는 문제
  답은 어떤 순서로 반환해도 상관없다
  숫자에서 문자로의 맵핑은 아래 주어진 이미지와 같다
  1은 어떤 문자로도 맵핑되지 않는다
*/
;
function letterCombinations(digits) {
    const numberMapping = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    const result = [];
    const numberDigits = digits.split('').map((e) => Number(e));
    const dfs = (arr, comb) => {
        if (arr.length === 0) {
            if (comb.length >= 1) {
                result.push(comb);
            }
            return;
        }
        const currNumber = arr.shift();
        if (typeof currNumber === 'number') {
            const values = numberMapping[currNumber];
            for (let char of values) {
                dfs([...arr], comb + char);
            }
        }
        return;
    };
    dfs(numberDigits, "");
    return result;
}
;
