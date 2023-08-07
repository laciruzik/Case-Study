/*   TASK 5: Credit Card Masking  =>>> Write a JavaScript function that use regular expression to replace all digits of a credit card number, except the last four digits, with "#".   */

const creditCardMasking = (creditCard) => {
  if (
    typeof creditCard === "string" &&
    /(\d{4}-){3}(\d{4})/g.test(creditCard)
  ) {
    return creditCard.replace(/\d(?=.{4})/g, "#");
  }
  throw new Error(
    "Invalid input! Please enter your credit card number as a string."
  );
};

console.log(creditCardMasking("1234-5678-9876-5432")); // should return "####-####-####-5432"
console.log(creditCardMasking("1111-2222-3333-4444")); // should return "####-####-####-4444"
console.log(creditCardMasking("34-567-986-54")); // throws an Error
console.log(creditCardMasking(1234)); // throws an Error
