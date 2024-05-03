/* Countdown
Create a recursive function countdown that accepts a positive integer n as an input 
and logs every number from n (inclusive) to 0 (exclusive) to the console.
*/
//base case: once

/* Countdown
Create a recursive function countdown that accepts a positive integer n as an input 
and logs every number from n (inclusive) to 0 (exclusive) to the console.
*/
//base case: once n === 0 return
//decrement n every envocation

// function countdown(n, result = []) {
//     if (n < 1) {
//       console.log(result.join(" "))
//       return
//     }
//     result.push(n)
//     countdown(n - 1, result)
//   }

function countdown(num){
    // base case
    if (num < 1){
        return [];
    }
   
    let todoLoDemas = countdown(num-1)
    return [num, ...todoLoDemas]
    
    // 
}
  
  console.log(countdown(5).join(",")); // 5,4,3,2,1
  countdown(10);
  countdown(6);
  
  
  