/**
 * @link https://leetcode.com/problems/base-7/submissions/
 * @description Return a string of number's base 7 representation.
 * @param {Number} number 
 * @param {Number} base 
 * @returns {String}
 */
 const convertToBase7 = (number, base = 7) => {
  // Case 1: Return 0, if number equals 0
  if(number === 0) {
    return `${0}`;
  }
  let absValue = Math.abs(number);
  let convertedNumber = '';

  // Case 2: Use Gorner's Algorithm to convert number 
  while(absValue > 0) {
    const lastNumber = absValue % base; // Последнее число
    absValue = Math.trunc(absValue / base);
    convertedNumber = `${lastNumber}${convertedNumber}`;
  }
  return number < 0 ? -`${convertedNumber}` : convertedNumber;
};