/**
 * @link https://leetcode.com/problems/power-of-three/
 * @description Return true if num is a power of three. Otherwise, return false.
 * @param {Number} num
 * @returns {Boolean}
 */
export default (num) => {
  while (num > 1) {
    num /= 3;
  }
  return num === 1;
};
