"use strict";
function searchRange(nums, target) {
    const minIndex = binarySearch(nums, target, false);
    if (minIndex !== -1) {
        const maxIndex = binarySearch(nums, target, true);
        return [minIndex, maxIndex];
    }
    return [-1, -1];
}
function binarySearch(nums, target, findMax) {
    let keyIndex = -1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            keyIndex = mid;
            if (findMax === true) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
    }
    return keyIndex;
}
