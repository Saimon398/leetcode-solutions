/**
 * @link https://leetcode.com/problems/plus-one/
 * @description Increment the large integer by one and return the resulting array of digits.
 * @param {Object []} digits
 * @returns {Object}
 */
export default (digits) => {
  const numDigits = digits.length;
  const ans = new Array(numDigits).fill(0);
  let currIndex = numDigits - 1;

  while (currIndex >= 0) {
    const currentDigit = digits[currIndex];
    // Case 1: Current digit is less than 9
    if (currentDigit < 9) {
      ans[currIndex] = currentDigit + 1; //
      break;
    } else {
    // Case 2: Current digit == 9
      ans[currIndex] = 0;
      currIndex -= 1;
    }
  }
  // Case 3: All digits are 9s
  if (currIndex < 0) {
    return [1, ...ans];
  }

  while (currIndex > 0) {
    currIndex -= 1;
    ans[currIndex] = digits[currIndex];
  }
  return ans;
};
