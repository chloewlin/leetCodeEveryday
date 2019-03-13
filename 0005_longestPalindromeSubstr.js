// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// O(n) time
// let isPalindrome = function(str) {
//   const originalStr = str.toLowerCase();
//   const reversedStr = str.toLowerCase().split('').reverse().join('');
//   return originalStr === reversedStr ? true : false;
// }

// O(n3) time
let longestPalindrome = function(str) {
  let palindromes = [];

  if (str.length < 1) return "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j <= str.length; j++) {
      let substr = str.substr(i, j);
      let length = str.substr(i, j).length;
      if (isPalindrome(substr)) {
        palindromes.push({substr, length});
      }
    }
  }

  let maxLength = 0;
  let max = null;
  for (let i = 0; i < palindromes.length; i++) {
    if (palindromes[i].length > maxLength) {
      maxLength = palindromes[i].length;
      max = palindromes[i].substr;
    }
  }
  
  return max;
};

var longestPalindrome = function(s) {
  
};

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("")); // ""