/**
 * @link https://leetcode.com/problems/valid-anagram/
 * @description Return true if target is an anagram of str, and false otherwise.
 * @param {String} str 
 * @param {String} target 
 * @returns 
 */
const isAnagram = (str, target) => {
  // Strings with different lengths are different in any way
  if (str.length !== target.length) {
    return false;
  }

  const chars = {};
  // Iterate through the string and counting
  // number of different chars
  for (const char of str) {
    chars[char] = (chars[char] || 0) + 1;
  }
  // Iterate through the target and check if
  // the string contains current char of target
  for (const char of target) {
    if (chars[char]) {
      chars[char] -= 1;
    }
    else {
      return false;
    }
  }
  return true;
};