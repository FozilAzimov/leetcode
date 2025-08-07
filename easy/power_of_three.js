// Question:
// 326. Power of Three

// Answare:
let isPowerOfThree = (n) => {
  if (n < 1) return false;
  while (!(n % 3)) n = n / 3;
  return n === 1;
};

console.log(isPowerOfThree(9));
