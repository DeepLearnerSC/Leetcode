// 3. Longest Substring Without Repeating Characters
// Medium
// related topics: Hash Table, Two Pointers, String, sliding Windows
// solution : https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


//Chos version
var lengthOfLongestSubstring = function(s) {
    let substring = []
    let resultSet = {}
    let count = 1

    for (i=0; i<s.length; i++){
        if (resultSet[s[i]]){
            resultSet[s[i]] = count + 1
        } else {
            resultSet[s[i]] = count
            substring.push(s[i])
        }
    }

    if (resultSet[ substring[0]] === 1 && resultSet[ substring[1]] >= 2 ){
        let result=''
        for(k=1; k<substring.length; k++){
            result += "" + substring[k]
        }
        return substring.length-1, result
    } else {
        let result=''
        for(k=0; k<substring.length; k++){
            result += "" + substring[k]
        }
        return substring.length, result
    }
};

let test = lengthOfLongestSubstring("pwwkew")
console.log(test)

//tryck version
var lengthOfLongestSubstring_tryck = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};

let test2 = lengthOfLongestSubstring_tryck("pwwkew")
console.log(test2)
