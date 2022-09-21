/**
 * @link https://leetcode.com/problems/reverse-integer/
 * @description Given a signed 32-bit integer x, return x with its digits reversed.
 * @param {Number} x 
 * @returns {Number}
 */
const reverse = (x) => {
  // Convert number to a string 
  let result = '';
  const str = Math.abs(x).toString();

  // Iterate through all chars in reverse order
  // and build new string
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  result = Number(result);
  // Case 1: Result value goes
  // outside the 32-bit integer range
  if(result > 2 ** 31 || result < -(2 ** 31)) {
    return 0;
  }
  // Case 2: Result value does not go
  // outside the 32-bit integer range
  return x < 0 ? -result : result;
};

