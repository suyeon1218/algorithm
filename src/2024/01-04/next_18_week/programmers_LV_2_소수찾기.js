function isPrimeNumber(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(paper) {
  const set = new Set();
  paper = paper.split('');

  function recursive(nums, currNum) {
    if (isPrimeNumber(Number(currNum))) {
      set.add(Number(currNum));
    }
    if (nums.length <= 0) {
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      const nextNums = [...nums];
      nextNums.splice(i, 1);
      recursive(nextNums, currNum + nums[i]);
    }
  }

  recursive(paper, '');

  return set.size;
}

solution('17');
