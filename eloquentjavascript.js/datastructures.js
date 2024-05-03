function range(start,end){
    let result = []
    for (let i = start; start<end; start++){
       result.push(start)
    }
    for (let i = start; start>=end; start--){
       result.push(start)
    }
    return result
  }
  
  function sum(array){
    let total = 0;
    for(let value of array){
    total += value;
    }
    return total
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55