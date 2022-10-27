/**
 * @link https://leetcode.com/problems/palindrome-number/
 * @description Check if given number is a palindrome
 * @param {Number} number
 * @returns {Boolean}
 */
const isPalindrome = (number) => {
  const string = number.toString();
  for (let i = 0, j = string.length - 1; i < j; i += 1, j -= 1) {
    if (string[i] !== string[j]) {
      return false;
    }
  }
  return true;
};
