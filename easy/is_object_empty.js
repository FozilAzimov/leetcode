// Question:
// 2727. Is Object Empty

// Answare:
let isEmpty = (obj) =>
  Array.isArray(obj) && obj.length
    ? false
    : Object.keys(obj).length
    ? false
    : true;

console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty([null, false, 0]));
console.log(isEmpty([]));
console.log(isEmpty({}));
