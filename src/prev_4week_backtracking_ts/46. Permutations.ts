function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtracking = (arr: number[], permutations: number[]) => {
    if (arr.length === 0) {
      result.push(permutations);

      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const nextArr = [...arr];

      nextArr.splice(i, 1);
      backtracking(nextArr, [...permutations, arr[i]]);
    } 
  }

  backtracking(nums, []);

  return result;
};