function getRemainder(num1,num2){
    let rem = 0;
    if (num1 > num2){
        rem = num 
    }
};

console.log(getRemainder(7, 42)); // => 0


/* Create a function called reduce that takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function. */
// what is our input?
// array and instructions(callback)

/*function reduce(array, callback, start){
  let accumulator = 0; // use start here
	for (let i=0; i<array.length ; i++){
    accumulator =  callback(accumulator, array[i])
    }
  return accumulator
  }
	*/

    function reduce(array, callback, acc = 0) {
        // if(array.length === 0) return acc; 
         
         acc = callback(acc, array[0]);
         
         return reduce(array.slice(1), callback, acc);
       }
       
       function reduce(array, callback, init, i = 0) {
          if (init === undefined) {
            init = array[0];
            i = 1;
          }
          if (i >= array.length) return init;
          return reduce(array, callback, callback(init, array[i]), i + 1)
       }
       
       
       function sum(a,b){
         return a+b;
       }
       
       
       console.log(reduce([1,2,3], sum)); // 6

       function firstRepeat(str) {
        // Base case:
        if(str.length <= 1) return -1;
        // Recursive case:
          // Grab the first character in the string
        let firstChar = str[0];
        // Check if there is a matching character in the rest of the string
        let newStr = str.slice(1);
            // Use an if statement. If there is no match:
        if(!newStr.includes(firstChar)) {
                // Remove character and pass in the new string as the new argument to the function
          return firstRepeat(newStr);
        } else {
            // If there is a match
                  // Return character
          return firstChar;
        }
      }
      
      console.log(firstRepeat("legolas")) // ➞ "l"
      
      console.log(firstRepeat("Gandalf")) // ➞ "a"
      
      console.log(firstRepeat("Balrog")) // ➞ "-1"
      
      console.log(firstRepeat("k"));


      function firstRepeat(str, tracker = {}) {
        // Base case:
        if (str.length <= 1) return -1;
        // Recursive case:
          // Grab the first character in the string
        let firstChar = str[0];
        // Check if there is a matching character in the rest of the string
        let newStr = str.slice(1);
            // Use an if statement. If there is no match:
        if (tracker[firstChar]) {
          return firstChar;
        }
        tracker[firstChar] = true;
        // if(!newStr.includes(firstChar)) {
                // Remove character and pass in the new string as the new argument to the function
          return firstRepeat(newStr, tracker);
        // } else {
        // 	// If there is a match
        // // Return character
        //   return firstChar;
        // }
      }

      /* Declare a recursive function 'canFormString', which takes in an array of characters and a string as arguments. Return a boolean value indicating whether the string can be formed with the characters in the array. */
// *

