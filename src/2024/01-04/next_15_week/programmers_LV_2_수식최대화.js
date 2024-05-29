// ! 콜백 함수 사용해서 푼 건데... 헷갈려서 나중에 다시 한 번 푸는 거 추천

const calculate = (caseType, strArray) => {
  switch (caseType) {
    case '+':
      return strArray.reduce((acc, val) => acc + Number(val), 0);
    case '-':
      return (
        strArray.reduce((acc, val) => acc - Number(val), 0) + strArray[0] * 2
      );
    case '*':
      return strArray.reduce((acc, val) => acc * Number(val), 1);
    default:
      return [];
  }
};

function solution(expression) {
  const cases = [
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['*', '-', '+'],
    ['*', '+', '-'],
  ];

  let maxValue = -Infinity;
  cases.forEach(([firstOperator, secondOperator, thirdOperator]) => {
    const splitCase = expression
      .split(thirdOperator)
      .map((str) =>
        str.split(secondOperator).map((str) => str.split(firstOperator)),
      );

    const result = calculate(
      thirdOperator,
      splitCase.map((str) =>
        calculate(
          secondOperator,
          str.map((str) => calculate(firstOperator, str)),
        ),
      ),
    );
    maxValue = Math.max(maxValue, Math.abs(result));
  });

  return maxValue;
}
solution('100-200*300-500+20');
