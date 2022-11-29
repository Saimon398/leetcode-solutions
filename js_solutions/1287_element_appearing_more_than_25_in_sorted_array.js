/**
 * @link https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 * @description Given an integer array sorted in non-decreasing order
 * There is exactly one integer in the array that occurs more than 25% of the time,
 * return that integer.
 * @param {Array []} nums
 * @returns {Number}
 */
const findSpecialInteger = (nums) => {
  // Find 25 %
  const quarter = Math.trunc(nums.length / 4);
  const frequency = {};
  // Find required element in the array
  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > quarter) {
      return num;
    }
  }
};
