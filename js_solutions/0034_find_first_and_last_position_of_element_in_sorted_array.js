/**
 * @description Return the lower bound of target appearance in the array
 * @param {Array []} nums 
 * @param {Number} target 
 * @returns {Number}
 */
const lowerBound = (nums, target) => {
  let lowerBound = -1;
  let upperBound = nums.length;

  while (upperBound - lowerBound > 1) {
    const middleIndex = Math.trunc((lowerBound + upperBound) / 2);
    if (nums[middleIndex] < target) {
      lowerBound = middleIndex;
    }
    else {
      upperBound = middleIndex;
    }
  }
  return lowerBound;
};
/**
 * @description Return the upper bound of target appearance in the array
 * @param {Array []} nums 
 * @param {Number} target 
 * @returns {Number} 
 */
const upperBound = (nums, target) => {
  let lowerBound = -1;
  let upperBound = nums.length;

  while (upperBound - lowerBound > 1) {
    const middleIndex = Math.trunc((lowerBound + upperBound) / 2);
    if (nums[middleIndex] > target) {
      upperBound = middleIndex;
    }
    else {
      lowerBound = middleIndex;
    }
  }
  return upperBound;
};
/**
 * @link https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @description Given an array of integers nums sorted in non-decreasing order, 
 * find the starting and ending position of a given target value.
 * @param {Array []} nums 
 * @param {Number} target 
 * @returns {Array []}
 */
const searchRange = (nums, target) => {
  // Search the lower bound of target
  const lower = lowerBound(nums, target);
  // Search the upper bound of target
  const upper = upperBound(nums, target);
  // If target is absent in the array return [-1, -1]
  if (upper - lower === 1) {
    return [-1, -1];
  }
  return [lower + 1, upper - 1];
};
