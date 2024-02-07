// Variables can store different type of data

//Primitive data types

// string: a series of characters (letters,numbers, spaces, symbols, wrapped in quotes)
// number: integer, floats, etc
// boolean: true or false
// null : intentionaly having no value
// undefined: a declared variable with no value yet
// symbol = a unique value that's not equal to any other value

//Composite data types

// object: standalone entities, with properties stored in key/value pairs. Just like a person has properties: date of birth, weight, height, eye color

//Array; to store multiple values in a single variable, similar to a list

// String
const name1 = "Kyle"; // <= quotes tell us this is a string

// Number
const favNum = 17;

// Boolean
const iLoveCoding = true; // <= no quotes
const iLoveBeets = false;

// Null
const blackHole = null;

// Undefined
let address; // here we declared the variable, 
             // but never gave it a value, so 
             // it is Undefined

// Object
const person = {
  name: "Bart Simpson",
  dob: "02/23/88", 
  weight: 65,
  hairColor: "blonde" 
}

// Array // they can contain different data types
const fruits = ["apples", "oranges", "pears", "bananas"];
const myArray = [21, "pear", [3, 7, 22], { objectsToo: true }];

console.log(fruits)

// ADD CODE HERE
const name = "Kevin"
let age = 31
const loveJavaScript = true
let listOfComplaints = null



// Uncomment these to check your work!
 console.log('My name is ' + name);
console.log('I am ' + age + ' years old');
console.log('It\'s ' + loveJavaScript + ', I love JavaScript');
 console.log('The list of things I hate about JavaScript is ' + listOfComplaints);

 