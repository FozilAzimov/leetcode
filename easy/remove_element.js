// Question:
// 27. Remove Element

// Answare:
let removeElement = (nums, val, j = 0) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
console.log(removeElement([3, 3], 3));
