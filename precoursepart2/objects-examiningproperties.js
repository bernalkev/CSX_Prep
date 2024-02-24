// objects are data structures used to store related data represented with keys and associated values
// keys are also referred to as properties
// keys give us an easy way to reference the values
// so they are almost always descriptive strings

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let found = 0;
  // ADD CODE HERE
  if("foundNum" in checkObj){
    found = 1
  }
  console.log(found)
  
  for (const key in checkObj){
    console.log(key) // logging el nombre de las llaves "keys"
    if(key == "foundNum"){ // comparing if one is called foundNum
     found = 1;
   } 
  }
  console.log(found)