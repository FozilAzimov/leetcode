// Question:
// 148. Sort List

// Answare:
let sortList = (head) => {
  let arr = [];
  for (let node = head; node; node = node.next) arr.push(node.val);
  arr.sort((a, b) => a - b);
  let obj = { val: 0, next: null };
  let cur = obj;
  arr.forEach((v) => (cur = cur.next = { val: v, next: null }));
  return obj.next;
};
