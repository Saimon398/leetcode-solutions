/**
 * @link https://leetcode.com/problems/single-number/
 * @description Every element appears twice except for one in nums. 
 * Find that single one.
 * @param {Array []} nums 
 * @returns {Number}
 */
const singleNumber = (nums) => {
  let uniqueNumber = 0;
  // Use XOR bitwise operation for every num in the array
  for (let i = 0; i < nums.length; i += 1) {
    uniqueNumber = uniqueNumber ^ nums[i];
  }
  return uniqueNumber;
};
