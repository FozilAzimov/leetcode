// Question:
// 58. Length of Last Word

// Answare:
let lengthOfLastWord = (s) => s.trim().split(" ").at(-1).length;
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
