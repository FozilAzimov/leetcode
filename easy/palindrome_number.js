// 9. Palindrome Number

// Answare:
let isPalindrome = (x) => {
  if (x < 0) return false;
  let x_copy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }
  return x_copy == rev ? true : false;
};
console.log(isPalindrome(1122));
