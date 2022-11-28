/**
 * @link https://leetcode.com/problems/valid-perfect-square/
 * @description Given a positive integer num
 * Write a function which returns True if num is a perfect square else False.
 * @param {Number} num
 * @returns {Boolean}
 */
const validPerfectSquare = (num) => {
  // Check square of div till reaching given num
  let div = 1;
  while (div * div < num) {
    div += 1;
  }
  // As div is not less than num, check if it is equal num
  return div * div === num;
};
