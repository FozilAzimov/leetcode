// Question:
// 136. Single Number

// Answare:
let singleNumber = (nums) => {
  let obj = {};
  nums.forEach((v) => {
    if (obj[v]) obj[v] += 1;
    else obj[v] = 1;
  });
  for (let key in obj) if (obj[key] === 1) return +key;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
