import generate_matrix from './generate_matrix.js';

/**
 * @link https://leetcode.com/problems/longest-common-subsequence/
 * @description Return the length of sequences' longest common subsequence.
 * @param {String} sequence1
 * @param {String} sequence2 
 * @returns {Number}
 */
const longestCommonSubsequence = (sequence1, sequence2) => {
  const F = generate_matrix(A.length + 1, B.length + 1, 0);

  // Iterate through matrix and fill cells 
  for (let i = 1; i < sequence1.length + 1; i += 1) {
    for (let j = 1; j < sequence2.length + 1; j += 1) {
      // Case 1: If last chars of current sequences are equal
      // length of common subsequence is increased by 1
      if (sequence1[i - 1] === sequence2[j - 1]) {
        F[i][j] = 1 + F[i - 1][j - 1];
      }
      // Case 2: If last chars of current sequences are not
      // equal - select max length among possible options
      else {
        F[i][j] = Math.max(F[i - 1][j], F[i][j - 1]);
      }
    }
  }
  return F[sequence1.length][sequence2.length];
};