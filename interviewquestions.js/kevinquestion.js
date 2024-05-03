
/*
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]
*/


// declare the function amplify that takes number

function amplify(num){
    let counter = 1;
    // declare a variable result
    const result = [];
    while (counter <= num) {
      if (counter % 4 === 0) {
        result.push(counter * 10);
      } else {
        result.push(counter);
      }
      counter++;
    }
    return result;
  }
  
  
  console.log(amplify(5)); // [1, 2, 3, 40, 5]