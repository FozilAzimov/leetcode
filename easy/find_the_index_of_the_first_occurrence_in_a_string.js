// Question:
// 28. Find the Index of the First Occurrence in a String

// Answare:
let strStr = (haystack, needle, i = 0, j = needle.length) => {
  while (1) {
    if (haystack.slice(i, j) === needle) return i;
    else if (j > haystack.length) return -1;
    else {
      i++;
      j++;
    }
  }
};
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
