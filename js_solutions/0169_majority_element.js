/**
 * @link https://leetcode.com/problems/majority-element/
 * @description Given an array nums, return the majority element.
 * @param {Array []} nums
 * @returns
 */
const majorityElem = (nums) => {
  // Build frequency object for every num in the array
  const frequency = {};
  // Iterate through the array and
  // as needed element is found return him
  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > Math.trunc(nums.length / 2)) {
      return num;
    }
  }
};
