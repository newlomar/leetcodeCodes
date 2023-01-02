/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null;
  }
  let aux: ListNode | null = head;
  let listSize = 0;
  const nodeArray: ListNode[] = [];
  while (aux !== null) {
    listSize++;
    nodeArray.push(aux);
    if (nodeArray.length > n + 1) {
      nodeArray.shift();
    }

    aux = aux.next;
  }

  if (listSize === 1) {
    return null;
  }

  if (listSize === n) {
    return head.next;
  }

  nodeArray[0].next = nodeArray[0].next?.next ?? null;

  return head;
}
