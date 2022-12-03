/**
 * @description Initializes stack as an array limited by max size
 * @param {Number} maxSize
 */
const CustomStack = function (maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
};

/**
 * @description Adds value to the top of the stack
 * @param {Number} value
 * @return {Void}
 */
CustomStack.prototype.push = function (value) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(value);
  }
};

/**
 * @description Returns the top of the stack and removes it
 * @return {Number}
 */
CustomStack.prototype.pop = function () {
  // Забираем элемент из стека
  if (this.stack.length === 0) {
    return -1;
  }
  const takenElement = this.stack.pop();
  return takenElement;
};

/**
 * @description Increments the bottom number of elements by value
 * @param {Number} number
 * @param {Number} value
 * @return {Void}
 */
CustomStack.prototype.increment = function (number, value) {
  // Сначала сравниваем размер стека с k
  if (this.stack.length < number) {
    this.stack = this.stack.map((elem) => elem + value);
  } else {
    for (let i = 0; i < number; i += 1) {
      const elem = this.stack[i];
      this.stack[i] = elem + value;
    }
  }
};
