// 5. Longest Palindromic Substring
// medium
// related topics: string , dynamic programming
// link: https://leetcode.com/problems/longest-palindromic-substring/solution/
// Given a string s, find the longest palindromic substring in s. 
// You may assume that the maximum length of s is 1000.
// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: "cbbd"
// Output: "bb"

//by jeffen
const longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    let start = 0,
      end = 0;
    for (let i = 0; i < s.length; i++) {
      const len1 = expandAroundCenter(s, i, i);
      const len2 = expandAroundCenter(s, i, i + 1);
      const len = Math.max(len1, len2);
      console.log(len,'len')
      console.log("i",i,"start",start,"end",end)
      if (len > end - start) {
        start = i - (len-1) / 2;
        end = i + len / 2;
      }
      console.log('after',start,end)
    }
    console.log("final", Math.ceil(start), end+1)
    console.log(s.length)
    console.log(s.slice(Math.ceil(start), end + 1))
    return s.slice(Math.ceil(start), end + 1);
  };

  function expandAroundCenter(s, left, right) {
    let L = left,
      R = right;
    while (L > -1 && R < s.length) {
        if (s[L] !== s[R]) break;
        L--;
        R++;
    }
    console.log(L,R)
    return R - L - 1;
  }

let test = longestPalindrome("ckkskcpbcsc")
console.log(test)