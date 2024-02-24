function getRemainder(num1, num2) {
    let biggestNum;
    let smallestNum;
    if (num1 > num2){
      biggestNum = num1;// assignating num1 variable to biggestNum
      smallestNum = num2; // assignating num2 variable to smallestNum
    } else if (num2 > num1) {  // this could be only >= , no need for if as they're the only cases left
      biggestNum = num2;
      smallestNum = num1;
    } else if (num1 == num2){
      biggestNum = num1
      smallestNum = num2
    } 
    return (biggestNum % smallestNum);
  }
  
  // Uncomment the lines below to test your code
  console.log(getRemainder(17, 5)); // => 2
  console.log(getRemainder(20, 5)); // => 0
  console.log(getRemainder(8, 22)); // => 6
  console.log(getRemainder(7, 42)); // => 0


 // function getRemainder(num1, num2) {
   // let biggestNum = num2;
   //  let smallestNum = num1;
   // if (num1 > num2){
    //  biggestNum = num1;// assignating num1 variable to biggestNum
    //  smallestNum = num2; // assignating num2 variable to smallestNum
  //  } 
   // return (biggestNum % smallestNum);
  //}
  
  // Uncomment the lines below to test your code
//   console.log(getRemainder(17, 5)); // => 2
//   console.log(getRemainder(20, 5)); // => 0
//   console.log(getRemainder(8, 22)); // => 6
//   console.log(getRemainder(7, 42)); // => 0

