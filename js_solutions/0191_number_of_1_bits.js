/**
 * @link https://leetcode.com/problems/number-of-1-bits/
 * @description Return Hamming weight
 * @param {String} bits
 * @returns
 */
const hammingWeight = (bits) => {
  let counter = 0;
  while (bits) {
    bits &= (bits - 1);
    counter += 1;
  }
  return counter;
};
