/**
 * @link https://leetcode.com/problems/valid-parentheses/
 * @description Determine if the given paretheness is valid
 * @param {String} brackets
 * @param {Object} stack
 * @returns {Boolean}
 */
export default (brackets, stack = []) => {
  const typeOfBrackets = { '(': ')', '{': '}', '[': ']' };
  // Set is used to make brackets search faster
  const openBrackets = new Set(Object.keys(typeOfBrackets));

  // Check if open bracket in stack matches close one
  for (let i = 0; i < brackets.length; i += 1) {
    const bracket = brackets[i];
    if (openBrackets.has(bracket)) {
      stack.push(bracket);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const leftBracket = stack.pop();
      const rightBracket = typeOfBrackets[leftBracket];
      if (rightBracket !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
