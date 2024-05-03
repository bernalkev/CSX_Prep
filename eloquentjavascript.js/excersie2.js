// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }

// for loop , where I will check the divisibility of 3 to print Fizz, and Buzz for numbers divisible by 5
for (counter = 1; counter <= 100; counter ++){
    // first condition, divisible by both 3 & 5
    if (counter % 3 === 0 && counter % 5 === 0){
      console.log("FizzBuzz")
    }
    // second condition, divisible by 3, Fizz
    else if (counter % 3 === 0){
      console.log("Fizz")
    } // third condition, divisible by 5, Buzz
    else if (counter % 5 === 0){
      console.log("Buzz")
    } else {
      console.log(counter)
    }
  }
