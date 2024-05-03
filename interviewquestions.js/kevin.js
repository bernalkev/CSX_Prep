/* 
Create a function "countChar" that takes two arguments (an input 
string and a target string of length 1). "countChar" will 
return the number of times the target string is found in the 
input string.

Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/


function countChar (inputStr, target, counter = 0, index = 0){
    // base case
      // first step in recurssion, console log passed in arguments
      // console.log({inputStr}, {target}, {counter}, {index})

      if(inputStr.length <= index){
        return counter
      }
    //   if (inputStr[index] === undefined){ // we need to adjust base, once we checked all characters we return, use .  // if (index === inputStr.length)
    //     return counter;
    //   }
    
    // set up
      
     // console.log(inputStr[0])
     //  counter++
      if (target === inputStr[index]){
         counter += 1 // we need to increment counter here
      } 
      
    // recursive function
      return countChar(inputStr, target, counter, index+1)
      
    };
    
    // James post increment operator increments value by 1 but it returns the previous value 
    // so index++ will cause
    // stackoverflow as the previous value is returned so index stays 0 when 
    // we check what is the value of passed in arguments


    function countChar (inputStr, targetChar){
        // base case
        if (inputStr === ""){
            return 0
        }
        let todoLoDemas = countChar(inputStr.substr(1), targetChar)
        // recursive function
        if (targetChar === inputStr[0]){
            todoLoDemas += 1 
        }
        return todoLoDemas
    }
    
    console.log(countChar('hello world', 'o'));//  -> 2
    console.log(countChar('javascript', 'j'));//  -> 1