// first function reverse array, take an array, produces a new one in a new order
function reverseArray(array){
    let newArr = [];
    for(let i=array.length-1; i>=0; i--){
      newArr.push(array[i])
    }
    return newArr
  }
  
  // function reverseArrayInPlace(array){
  //   for (let i = array.length-1; i>=0; i--){
  //     console.log(array[i]);
  //   }
  // }

  function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  
  
  let myArray = ["A", "B", "C"];
  console.log(reverseArray(myArray));
  // → ["C", "B", "A"];
  console.log(myArray);
  // → ["A", "B", "C"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]