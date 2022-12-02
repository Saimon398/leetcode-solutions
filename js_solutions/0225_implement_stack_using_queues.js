/**
 * @description Build stack as an empty array
 */
const MyStack = function () {
  this.stack = [];
};

/**
 * @description Pushes element to the top of the stack
 * @param {Number} value
 * @return {Void}
 */
MyStack.prototype.push = function (value) {
  this.stack.push(value);
};

/**
 * @description  Takes element out of the stack and return it
 * @return {Number}
 */
MyStack.prototype.pop = function () {
  const lastElement = this.stack.pop();
  return lastElement;
};

/**
 * @description Returns the element on the top of the stack
 * @return {Number}
 */
MyStack.prototype.top = function () {
  const lastElement = this.stack[this.stack.length - 1];
  return lastElement;
};

/**
 * @description Check if the stack is empty
 * @return {Boolean}
 */
MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};
