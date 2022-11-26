/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @link https://leetcode.com/problems/reverse-linked-list/
 * @description Reverse the list, and return the reversed list.
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let currentNode = head;
  let reversedList = null;

  while (currentNode) {
    reversedList = new ListNode(currentNode.val, reversedList);
    currentNode = currentNode.next;
  }

  return reversedList;
};
