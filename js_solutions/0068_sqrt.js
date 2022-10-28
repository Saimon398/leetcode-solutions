/**
 * @link https://leetcode.com/problems/sqrtx/submissions/
 * @description Return the square root of x.
 * @param {Number} number
 * @returns {Number}
 */
export default (number) => {
  let ans = 0;
  let sqrt = 0;
  let e = number;
  while (sqrt <= e) {
    const middle = Math.trunc((sqrt + e) / 2);
    if (middle * middle === number) {
      return middle;
    }
    if (middle * middle < number) {
      sqrt = middle + 1;
      ans = middle;
    } else {
      e = middle - 1;
    }
  }
  return ans;
};
