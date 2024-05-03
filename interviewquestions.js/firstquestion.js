/* 
Declare a recursive function 'findIndex', which takes in at least two arguments (an array and a value).
'findIndex' should search the array for the passed-in value. If found, it should return the first index number at which the value appears. If not, it should return -1.

Example: findIndex([1, 2, 3, 4, 5, 3], 3) --> 2

*/

//iterate through array recursively
//check each index for target value
//base case is when array[i] returns undefined
//when base case is hit i return the index of matching value

function findIndex(arr, target, i = 0) { // default
    if (i === arr.length) {
      return -1;
    }
    if (arr[i] === target) {
      return i;
    }
    return findIndex(arr, target, i + 1);
  }
  
                      // 0  1  2  3  4  5   
  console.log(findIndex([1, 2, 3, 4, 5, 3], 3)); // 2
  console.log(findIndex([1, 2, 3, 4, 5, 3], undefined)); // -1 