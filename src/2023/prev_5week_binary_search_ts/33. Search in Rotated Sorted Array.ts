var search = function (nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) { // 왼쪽은 순방향, 오른쪽은 미정
      if (nums[left] <= target && target < nums[mid]) { // 왼쪽에 있는 경우
        right = mid - 1; 
      } else { // 오른쪽에 있는 경우
        left = mid + 1;
      }
    } else { // 왼쪽 역방향, 오른쪽 순방향
      if (nums[left] <= target || target < nums[mid]) {  
        right = mid - 1;
      } else { 
        left = mid + 1;
      }
    }
  }

  return -1;
};