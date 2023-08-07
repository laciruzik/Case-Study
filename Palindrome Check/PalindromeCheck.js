/*   TASK 2: Palindrome Check  =>>> Write a JavaScript function that takes a string as input and returns true if it is a palindrome (reads the same forwards and backwards), and false otherwise.   */

const isPalindrome = (input) => {
  if (typeof input === "string") {
    return input === input.split("").reverse().join("");
  }
  throw new Error("Invalid input! Please enter a string.");
};

console.log(isPalindrome("racecar")); // should return true
console.log(isPalindrome("level")); // should return true
console.log(isPalindrome("this is not a palindrome")); // should return false
console.log(isPalindrome(123)); // throws an Error
