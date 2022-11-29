/**
 * @link https://leetcode.com/problems/hamming-distance/
 * @description Given two integers x and y
 * Return the Hamming distance between them.
 * @param {Number} x
 * @param {Number} y
 * @returns {Number}
 */
const hammingDistance = (x, y) => {
  const xor = x ^ y;
  let hammingDistance = 0;
  for (const bit of xor.toString(2)) {
    hammingDistance += bit === '0' ? 0 : 1;
  }
  return hammingDistance;
};
