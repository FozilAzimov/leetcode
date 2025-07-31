// 2626. Array Reduce Transformation

// Answare:
let reduce = (nums, fn, init) => nums.reduce(fn, init);
console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr * curr;
    },
    100
  )
);
