/**
 * @link https://leetcode.com/problems/missing-number/
 * @description Return the only number in the range
 * that is missing from the array.
 * @param {Array []} nums
 * @returns {Number}
 */
export default (nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i += 1) {
    result = result ^ i ^ nums[i];
  }
  return result ^ nums.length;
};
