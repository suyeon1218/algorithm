function searchRow(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function searchMatrix(matrix: number[][], target: number): boolean {
  let rowStart = 0;
  let rowEnd = matrix.length - 1;

  while (rowStart <= rowEnd) {
    const rowCenter = Math.floor((rowStart + rowEnd) / 2);
    const centerMatrix = matrix[rowCenter];

    if (target < centerMatrix[0]) {
      rowEnd = rowCenter - 1;
    } else if (target > centerMatrix[centerMatrix.length - 1]) {
      rowStart = rowCenter + 1;
    } else {
      return searchRow(centerMatrix, target);
    }
  }

  return false;
};