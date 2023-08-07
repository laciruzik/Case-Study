/*   TASK 3: Array Filtering  =>>> Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the even numbers from the input array.   */

const arrayFilteringEvenNumbers = (inputArray) => {
  if (Array.isArray(inputArray)) {
    return inputArray.filter((number) => number % 2 === 0);
  }
  throw new Error("Invalid input! Please enter an array.");
};

console.log(arrayFilteringEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); // should return  [2, 4, 6, 8]
console.log(arrayFilteringEvenNumbers([1, 1, 2, 2, 3, 3, 4, 4])); // should return  [2, 2, 4, 4]
console.log(arrayFilteringEvenNumbers("this is a string")); // throws an Error
console.log(arrayFilteringEvenNumbers(null)); // throws an Error
