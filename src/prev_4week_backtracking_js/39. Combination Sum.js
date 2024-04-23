"use strict";
/*
  * explain
  Given an array of distinct integers 'candidates' and a target integer 'target',
  return a list of all unique combinations of candidates where the chosen numbers sum to target.
  You may return the combinations in any order.

  The same number may be chosen from candidates an unlimited number of times.
  Two combinations are unique if the frequency of at least one of the chosen numbers is different.

  The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

  각각 다른 정수의 집합 'candidates' 와 목표 정수인 'target' 이 주어질 때,
  각 숫자를 합해서 'target' 이 되는 유일한 조합들을 반환하는 문제.
  어떤 순서로 반환하든 상관 없다.

  같은 숫자를 여러번 선택할 수 있다.
  같은 숫자를 여러번 선택했더라도 선택한 숫자의 개수가 다르면 유니크한 값이다.

  테스트 케이스는 combinations 의 합들이 150 미만이 되도록 주어진다.
*/
// * ㅋㅋㅋㅋ...beats 5%
function combinationSum(candidates, target) {
    const result = [];
    const numMap = new Map();
    const backtracking = (comb, currSum) => {
        if (currSum >= target) {
            if (currSum === target) {
                const stringKey = comb.sort((a, b) => a - b).join(',');
                if (numMap.has(stringKey) === false) {
                    numMap.set(stringKey, true);
                    result.push(comb);
                }
            }
            return;
        }
        for (let i = 0; i < candidates.length; i++) {
            const num = candidates[i];
            const nextSum = currSum + num;
            backtracking([...comb, num], nextSum);
        }
    };
    backtracking([], 0);
    return result;
}
;
// ! beats 100%
function combinationSum2(candidates, target) {
    const result = [];
    const go = (position, combination, sumValue) => {
        if (sumValue === target) {
            result.push([...combination]); // * pop과 push 에 영향받지 않도록 복사
            return;
        }
        if (sumValue > target) {
            return;
        }
        for (let i = position; i < candidates.length; i++) {
            const num = candidates[i];
            // go(i, [...combination, num], sumValue + num) -> 백트래킹마다 계산해주기 때문에 속도가 느려짐
            combination.push(num);
            go(i, combination, sumValue + num); // 자신보다 뒤 포지션만 backtarcking 가능하도록 함
            combination.pop();
        }
    };
    go(0, [], 0);
    return result;
}
;
