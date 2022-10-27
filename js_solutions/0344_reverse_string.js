/**
 * @link https://leetcode.com/problems/reverse-string/
 * @description Reverse a string in-place,
 * which is given as an array of characters
 * @param {Object []} str
 */
const reverseString = (str) => {
  for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
    const temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
};
