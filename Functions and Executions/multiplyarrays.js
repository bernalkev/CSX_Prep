function multiplyAll(arr){
    if (arr.length === 0){
      return 0;
    }
    let prod = 1;
    for (let i=0; prod < arr.length; i++){
      prod *= arr[i];
    }
   return prod;
  }
  
  
  console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)); // should log: 362880
  console.log(multiplyAll)
  