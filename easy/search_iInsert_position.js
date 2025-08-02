// Question:
// 35. Search Insert Position

// Answare:
let searchInsert = (nums, target, j = 0) => {
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) return i;
    else if (target > nums[i]) j = i + 1;
    else if (target < nums[i]) {
      j = i;
      break;
    }
  }
  return j;
};
console.log(searchInsert([1, 3, 5, 6], 7));
