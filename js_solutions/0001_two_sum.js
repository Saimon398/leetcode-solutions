/**
 * @link https://leetcode.com/problems/two-sum/
 * @description Return indices of the two numbers such that they add up to target.
 * @param {Object []} nums
 * @param {Number} target
 * @returns {Object []}
 */
export default (nums, target) => {
  // key: Number that adds up to target
  // value: Index the number is at
  const twoSum = {};
  // Iterate through nums using indices b/c we need the indices
  // for the final ads
  for (let i = 0; i < nums.length; i += 1) {
    const currentNumber = nums[i];
    // Case 1: We found a pair that adds up to target
    if (currentNumber in twoSum) {
      return [twoSum[currentNumber], i];
    }
    // Case 2: Add a new entry for the current number
    twoSum[target - currentNumber] = i;
  }
  // If we go through the entire for loop without returning
  // there's no valid answe
  return -1;
};
