/*
  * explain
  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  n 쌍의 괄호가 주어질 때, 올바른 괄호를 모두 출력할 수 있는 함수를 작성하는 문제
*/

function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  const backtracking = (openCount: number, closeCount: number, parenthesis: string) => {
    if (openCount === 0 && closeCount === 0) {
      if (parenthesis.length > 0) {
        result.push(parenthesis);
      } 
      return;
    }

    if (openCount > 0) {
      backtracking(openCount - 1, closeCount, parenthesis + '('); 

      if (closeCount > openCount) {
        backtracking(openCount, closeCount - 1, parenthesis + ')');
      }
    } else {
      backtracking(openCount, closeCount - 1, parenthesis + ')');
    }
    return;
  }

  backtracking(n, n, '');
  return result;
};