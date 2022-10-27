/**
 * @link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @description return the index of the first occurrence of needle in haystack
 * @param {String} haystack
 * @param {String} needle
 * @returns
 */
export default (haystack, needle) => {
  for (let i = 0; i < haystack.length; i += 1) {
    if (haystack.slice(i, needle.length + i) === needle) {
      return i;
    }
  }
  return -1;
};
