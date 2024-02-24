const nestedArr = [];
// ADD CODE HERE

for (let i=0; i<5; i++){
  let nestedArrTemp = []
  nestedArrTemp.push("loop" + i);
  nestedArrTemp.push(i);
  nestedArr.push(nestedArrTemp)
}
console.log(nestedArr)

// creando un array 
const nestedArr = [];
// ADD CODE HERE

for (let i=0; i<5; i++){
  nestedArr.push(["loop" + i, i])
}
console.log(nestedArr)