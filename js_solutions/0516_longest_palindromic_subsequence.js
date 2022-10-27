import generate_matrix from './generate_matrix.js';

/**
 * @link https://leetcode.com/problems/longest-palindromic-subsequence/
 * @description Given a string 'string',
 * find the longest palindromic subsequence's length in s.
 * @param {*} string 
 * @returns 
 */
const longestPalindromicSubsequence = (string) => {
  const N = string.length;
  const matrix = generate_matrix(N, N, 0);

  for(let i = 0; i < N; i += 1) {
    matrix[i][i] = 1;
  }

  for(let i = 1; i < N; i += 1) {
    for(let j = 0; j < N - i; j += 1) {
      const col = j + i;
      if(string[j] === string[col]) {
        matrix[j][col] = 2 + matrix[j + 1][col - 1];
      }
      else {
        matrix[j][col] = Math.max(matrix[j][col - 1], matrix[j + 1][col]);
      }
    }
  }
  return matrix[0][N - 1];
};
