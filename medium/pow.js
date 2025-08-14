let myPow = (x, n) => {
  if (!n) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  while (n > 0) {
    if (n % 2) res *= x;
    x *= x;
    n = Math.floor(n / 2);
  }
  return res;
};

console.log(myPow(2.0, 10));

console.log(myPow(2.1, 3));

console.log(myPow(2.0, -2));
