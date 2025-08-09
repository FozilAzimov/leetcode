// Question:
// 383. Ransom Note

// letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Answare:
let canConstruct = (ransomNote, magazine) => {
  let count = 0;
  let len = ransomNote.length;
  for (let value of ransomNote) {
    if (magazine.includes(value)) {
      count++;
      ransomNote = ransomNote.replace(value, "");
      magazine = magazine.replace(value, "");
    }
  }
  return count == len;
};

console.log(canConstruct("aa", "ab"));
