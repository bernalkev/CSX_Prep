function addingAllTheWeirdStuff(array1, array2){
    let sumOdd = 0;
    let sumEven = 0;
    let addOne = false;
    
    for (let i=0; i<array2.length; i++){
           if (array2[i] % 2 !== 0){
            sumOdd += array2[i];
    }   else if {
        sumEven += array2[i];
      } else if (array2[i] > 20){
        addOne = true;
    }
    }
    
    
    let newArray = [];
    for (let j=0; j<array1.length; j++) {
        if (array1[j] < 10) {
        newArray.push(array1[j] + sumOdd);
      } else if (array1[j] > 10) {
        newArray.push(array1[j] + sumEven);
      } else if (addOne) {
        newArray.push(array1[j] + 1);
  }
    
    return newArray;
  }
  }
  
  // Uncomment these to check your work!
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  