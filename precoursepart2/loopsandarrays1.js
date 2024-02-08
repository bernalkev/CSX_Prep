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