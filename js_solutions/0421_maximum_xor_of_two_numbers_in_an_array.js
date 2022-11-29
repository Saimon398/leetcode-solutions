/**
 * @link https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 * @description Return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.
 * @param {Array []} nums
 * @returns {Number}
 */
const findMaximumXOR = (nums) => {
  // To make algo work faster
  const set = [...new Set(nums)];
  if (set.length === 1) return 0;
  // Set first max XOR to be compared further
  let xor = set[0] ^ set[1];
  // Iterate through the nums and calculate XOR
  for (let i = 0; i < set.length; i += 1) {
    for (let j = i + 1; j < set.length; j += 1) {
      xor = Math.max(set[i] ^ set[j], xor);
    }
  }
  return xor;
};
