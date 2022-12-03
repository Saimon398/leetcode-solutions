/**
 * @description Initialize stack as an array
 */
const MinStack = function () {
  this.stack = [];
};

/**
* @description Pushes element to the top of the stack
* @param {Number} value
* @return {Void}
*/
MinStack.prototype.push = function (value) {
  const elem = { value, min: this.stack.length === 0 ? value : Math.min(value, this.getMin()) };
  this.stack.push(elem);
};

/**
* @description Returns element on the top of the stack and removes it
* @return {Void}
*/
MinStack.prototype.pop = function () {
  const { value } = this.stack.pop();
  return value;
};

/**
* @description Returns element on the top of the stack
* @return {Number}
*/
MinStack.prototype.top = function () {
  const { value } = this.stack[this.stack.length - 1];
  return value;
};

/**
* @description Returns the min element in the stack
* @return {Number}
*/
MinStack.prototype.getMin = function () {
  const { min } = this.stack[this.stack.length - 1];
  return min;
};
