/**
 * @link https://leetcode.com/problems/valid-palindrome/
 * @description Given a string s, return true if it is a palindrome, or false otherwise.
 * @param {String} str String to be checked
 * @returns {Boolean}
 */
const isPalindrome = (str) => {
  const { length } = str;
  // Case 1: Empty string is always a palindrome
  if (length === 0 || length === 1) {
    return true;
  }
  // Transform String into an Array of chars with no non-alphanumeric chars
  const letters = str
    .replace(/[^a-zA-Z0-9]/gm, '')
    .split('')
    .map((letter) => letter.toLowerCase());
  // Iterate through the array by two pointers
  for (let i = 0, j = letters.length - 1; i < j; i += 1, j -= 1) {
  // Case 2: If edge letters are not equal - string is not a palindrome
    if (letters[i] !== letters[j]) return false;
  }
  return true;
};
