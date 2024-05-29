"use strict";
function findMin(nums) {
    let result = nums[0];
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] < nums[right]) {
        return result;
    }
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (left === mid) {
            result = nums[left] < nums[right] ? nums[left] : nums[right];
        }
        if (nums[mid] > nums[left]) {
            left = mid;
        }
        else {
            right = mid;
        }
    }
    return result;
}
;
