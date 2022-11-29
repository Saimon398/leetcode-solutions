/**
 * @link https://leetcode.com/problems/ugly-number/
 * @description Given an integer num, return true if num is an ugly number.
 * @param {Number} num
 * @returns {Boolean}
 */
export default (num) => {
  if (num === 0) return false;
  const limits = [2, 3, 5];
  // Iterate through the limits and check if
  // each of them is a prime factor for num
  for (let i = 0; i < limits.length; i += 1) {
    while (num % limits[i] === 0) {
      num / limits[i];
    }
  }
  return num === 1;
};
