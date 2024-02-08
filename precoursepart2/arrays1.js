// arrays allow for a multiple values in a single place

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
let fourthItem = horror[3]

// Write a console.log statement below to check your work!
console.log(fourthItem)

//push and pop allow either to add an element to the end of an array, or to remove from the end of an array.

let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers); // should log: [1, 2, 3, 4, 5]

numbers.pop();
console.log(numbers); // should log: [1, 2, 3, 4]

//if we need a single element Something that's also very handy is knowing how many elements are in an array at any given time. Arrays come with a built-in length property that tells us how many items are currently in the array.

const myArray = [1, 3, 4, 2];

console.log(myArray.length); // should log 4

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE

netflixShows.push("Breaking Bad")

// Write a console.log statement below to check your work!
console.log(netflixShows)