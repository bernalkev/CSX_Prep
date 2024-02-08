// LOOPING THROUGH ARRAYS

// A value in an array can be accessed using the index of its position in the array: myArray[0]

const myArray = ['string1', 'string2', 'string3'];

for (let i = 0; i < myArray.length; i++) {
  console.log( myArray[i] );
}

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i=0; i< synonyms.length; i++){
  console.log(synonyms[i]);
  greetings.push("Have a" + " " + synonyms[i] + " " + "day!")
}


console.log(greetings)
// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE

// MULTIPLE ARRAYS

/const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'
for (let i=0; i<firstNames.length && i<lastNames.length && i<places.length; i++){
  bios.push("My name is" + " " + firstNames[i] + " " + lastNames[i]+ " " + "and I am from" + " " + places[i]);
}
// ADD CODE HERE
console.log(bios)
