/**
 * @description Find sum of digits square of num
 * @param {Number} num
 * @returns {Number}
 */
const findDigitsSquate = (num) => {
  let sumOfDigitsSquares = 0;

  while (num > 0) {
    const lastDigit = num % 10;
    sumOfDigitsSquares += lastDigit ** 2;
    num = Math.trunc(num / 10);
  }

  return sumOfDigitsSquares;
};

/**
 * @link https://leetcode.com/problems/happy-number/
 * @description Return true if n is a happy number, and false if not.
 * @param {Number} num Number to be checked
 * @returns {Boolean}
 */
const isHappy = (num) => {
  let iterationCount = 0;
  while (iterationCount !== 1000) {
    num = findDigitsSquate(num);
    if (num === 1) return true;
    iterationCount += 1;
  }
  return false;
};
