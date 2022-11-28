/**
 * @link https://leetcode.com/problems/ugly-number-ii/
 * @description Given an integer num, return the num-th ugly number.
 * @param {Number} num
 * @returns {Number}
 */
const nthUglyNumber = (num) => {
  const nums = [1];
  let c2 = 0;
  let c3 = 0;
  let c5 = 0;
  for (let i = 1; i < num; i += 1) {
    nums[i] = Math.min(2 * nums[c2], 3 * nums[c3], 5 * nums[c5]);
    if (2 * nums[c2] === nums[i]) {
      c2 += 1;
    }
    if (3 * nums[c3] === nums[i]) {
      c3 += 1;
    }
    if (5 * nums[c5] === nums[i]) {
      c5 += 1;
    }
  }
  return nums[num - 1];
};
