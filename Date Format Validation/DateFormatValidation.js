/* TASK 4: Date Format Validation  =>>> Write a JavaScript function that use regular expression to validate dates in the format YYYY-MM-DD. The year should be in the range of 1900 to 2099.*/

const dateFormatValidation = (inputDate) => {
  if (typeof inputDate === "string") {
    return /(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/g.test(
      inputDate
    );
  }
  throw new Error("Invalid input! Please enter a date formatted string.");
};

console.log(dateFormatValidation("2023-07-31")); // should return true
console.log(dateFormatValidation("2023-07-1")); // should return false
console.log(dateFormatValidation("2023-20-11")); // should return false
console.log(dateFormatValidation("2223-07-31")); // should return false
console.log(dateFormatValidation(2023)); // throws an Error
