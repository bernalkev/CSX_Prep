let iHaveChanged = true;
let iLoveCoding = true;
let codingIsTooHard = false;		

console.log(iHaveChanged)

// COMPARISON OPERATORS

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)

let isSmaller= small < large


// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)

let isLooselyEqual = (num == string)
let isStrictlyEqual = (num === string)

// COERCION, you can't add a string value and a number together, it coerces into a string. Uncomment the code below to test
console.log(10 + 5);
console.log("10" + 5);
console.log(5 + "10");


// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)

let isTrueNotFalse = (isTrue !== isFalse)

// Uncomment these to check your work! 
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);