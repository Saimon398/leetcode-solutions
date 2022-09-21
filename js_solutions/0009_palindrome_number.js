/**
 * @link https://leetcode.com/problems/palindrome-number/
 * @description Check if given number is a palindrome
 * @param {Number} number
 * @returns {Boolean}
 */
const isPalindrome = (number) => {
  const convertedToString = number.toString();
  for (let i = 0, j = convertedToString.length - 1; i < j; i += 1, j -= 1) {
    if (string[i] !== string[j]) {
      return false;
    }
  }
  return true;
};
