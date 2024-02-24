const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  // ADD CODE HERE
  console.log(Object.values(checkObj))  /// values
  console.log(Object.keys(checkObj))    /// keys
 for (const key in checkObj){
    console.log(key);
    if(checkObj[key] >= 2){
      objToArray.push(checkObj[key]);
    }
  }
  console.log(objToArray)