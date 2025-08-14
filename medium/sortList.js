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

console.log(sortList([4, 2, 1, 3]));
console.log(sortList([1, 2, 3, 4]));
