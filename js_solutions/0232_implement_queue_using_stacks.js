/**
 * @description Initialize queue as an array
 */
var MyQueue = function() {
  this.queue = [];
};

/** 
 * @description Pushes value to the back of the queue
 * @param {Number} value
 * @return {Void}
 */
MyQueue.prototype.push = function(value) {
  this.queue.push(value);
};

/**
 * @description Removes the element from the front of the queue and returns it
 * @return {Number}
 */
MyQueue.prototype.pop = function() {
  return this.queue.shift();
};

/**
 * @description Returns the element at the front of the queue
 * @return {Number}
 */
MyQueue.prototype.peek = function() {
  const [elem] = this.queue;
  return elem;
};

/**
 * @description Returns true if the queue is empty
 * @return {Boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue.length === 0;
};
