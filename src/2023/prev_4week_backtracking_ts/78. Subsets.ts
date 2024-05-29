// ! beats 88.16 %
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtracking = (arr: number[], subset: number[]) => {
    const arrLen = arr.length;
    result.push(subset);

    if (arrLen === 0) {
      return;
    }

    for (let i = 0; i < arrLen; i++) {
      const num = arr[0];

      arr.splice(0, 1);
      backtracking([...arr], [...subset, num]);
    }
  };

  backtracking(nums, []);

  return result;
}

// ! beats 97.5%
var subsets2 = function (nums: number[]) {
  const result: number[][] = [];

  const backtracking = (subset: number[], index: number) => {
    result.push(subset);

    if (subset.length === nums.length) { // 모든 숫자를 탐색했으면 return
      return;
    }

    for (let i = index; i < nums.length; i++) {
      backtracking([...subset, nums[i]], i + 1);
    }
  };

  backtracking([], 0);

  return result;
};
