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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let aux1 = l1;
  let aux2 = l2;
  const arrayValuesAsString1 = [];
  const arrayValuesAsString2 = [];
  while (aux1 !== null) {
    arrayValuesAsString1.push(String(aux1.val));
    aux1 = aux1.next;
  }
  while (aux2 !== null) {
    arrayValuesAsString2.push(String(aux2.val));
    aux2 = aux2.next;
  }
  const resultSum = [];
  const arrayValuesAsNumber1 = arrayValuesAsString1
    .reverse()
    .map((item) => Number(item));
  const arrayValuesAsNumber2 = arrayValuesAsString2
    .reverse()
    .map((item) => Number(item));
  let maxLength = Math.max(
    arrayValuesAsNumber1.length,
    arrayValuesAsNumber2.length
  );
  let diffLengthArray1 = maxLength - arrayValuesAsNumber1.length;
  let diffLengthArray2 = maxLength - arrayValuesAsNumber2.length;
  for (let i = 0; i < diffLengthArray1; i++) {
    arrayValuesAsNumber1.unshift(0);
  }
  for (let i = 0; i < diffLengthArray2; i++) {
    arrayValuesAsNumber2.unshift(0);
  }
  let restoAnterior = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = arrayValuesAsNumber1[i] + arrayValuesAsNumber2[i] + restoAnterior;
    resultSum.push(sum >= 10 ? sum % 10 : sum);
    restoAnterior = sum >= 10 ? Math.floor(sum / 10) : 0;
  }
  if (restoAnterior) {
    resultSum.push(restoAnterior);
  }
  let head = new ListNode(Number(resultSum[0]));
  let aux3 = head;
  resultSum.slice(1).forEach((item) => {
    const node = new ListNode(Number(item));
    aux3.next = node;
    aux3 = aux3.next;
  });

  return head;
}
