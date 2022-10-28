/**
 * @link https://leetcode.com/problems/is-subsequence/
 * @description Return true if s is a subsequence of t, or false otherwise.
 * @param {String} sub
 * @param {String} target
 * @returns
 */
export default (sub, target) => {
  // If strings are the same length, they must be identical
  if (sub.length === target.length) {
    return sub === target;
  }
  // If string is longer that target, it cannot be a subsequence
  if (sub.length > target.length) {
    return false;
  }

  // i: subsequence index, j: target index
  let i = 0;
  let j = 0;

  while (i < sub.length && j < target.length) {
    const subChar = sub[i];
    const targetChar = target[j];
    if (subChar === targetChar) {
      i += 1;
      j += 1;
    } else {
      j += 1;
    }
  }
  return i >= sub.length;
};
