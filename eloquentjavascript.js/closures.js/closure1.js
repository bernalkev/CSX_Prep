// // //// lexical scope

// // // global scope

// // let x = 1;

// // const parentFunction = () => {
// //     // local scope;
// //     let myValue = 2
// //     console.log(x);
// //     console.log(myValue);

// //     const childFunction = () => {
// //         console.log(x += 5);
// //         console.log(myValue += 1);
// //     }

// //     childFunction()
// // }

// // parentFunction()

// // a closure is a function have access to the parent scope,    
// // even after the parent function has closed

// // a closure is created when we define a function, not when a function is 
// // executed

// let x = 1;

// const parentFunction = () => {
//     // local scope;
//     let myValue = 2
//     console.log(x);
//     console.log(myValue);

//     const childFunction = () => {
//         console.log(x += 5);
//         console.log(myValue += 1);
//     }

//     return childFunction;
// }

// const result = parentFunction()
// console.log(result);

// result();
// result();
// result();
// console.log(x);
// console.log(myValue);




/*
Declare a recursive function "mapArray" that takes at least two arguments (an array and a callback function).
"mapArray" should return a new array containing the returned values from running the callback function on each element in the array.

Once complete, write some code to test your 'mapArray' function.
*/

// function mapArray (array, callback)
function mapArray (array, callback, newArr = []){
    // base case where it exits
   if(array.length === 0){
      return newArr
    } 
    const transformedHead = callback(array[0]);
    const transformedTail = mapArray(array.slice(1), callback)
    return [transformedHead, ...transformedTail]
}
    // recursive function
    	// return a new array containing the returned values from running teh callback function of each element in the array

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = mapArray(numbers, (x) => x * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

