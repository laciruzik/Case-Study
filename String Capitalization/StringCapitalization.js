/*   TASK 1: String Capitalization  =>>> Write a JavaScript function that takes a string as input and returns the same string with the first letter of each word capitalized.   */

const capitalize = (input) => {
  if (typeof input === "string") {
    return input
      .split(" ")
      .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
      .join(" ");
    // OR =>>> input.split(' ').map((word)=>word.replace(word[0],word[0].toUpperCase())).join(' ')
  }
  throw new Error("Invalid input! Please enter a string.");
};

console.log(capitalize("hello world")); // should return "Hello World"
console.log(capitalize("also works on longer strings like this")); // should return "Also Works On Longer Strings Like This"
console.log(capitalize(5566)); // throws an Error
