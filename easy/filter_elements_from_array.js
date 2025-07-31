// Question:
// 2634. Filter Elements from Array

// Answare:
let filter = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) if (fn(arr[i], i)) newArr.push(arr[i]);
  return newArr;
};
console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);
console.log(
  filter([1, 2, 3], function firstIndex(n, i) {
    return i === 0;
  })
);
