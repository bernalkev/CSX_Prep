// // for loop, with index, if index is even is empty, if index is odd is #, added into a string
// let emptyStr = " "
// let numChar = "#"
// let firstLine = ""
// let secondLine = ""
// let finalResult = ""
// let size = 8

// for (i=0; i<size; i++){
//   if(firstLine === ""){
//     firstLine += emptyStr
//     }
//   else if(i % 2 === 0){
//     firstLine += numChar
//   }
//   else if(i % 2 !== 0){
//     firstLine += emptyStr
//   }
// }


// for (i=0; i<size; i++){
//   if(secondLine === ""){
//     secondLine += numChar
//     }
//   else if(i % 2 === 0){
//     secondLine += emptyStr
//   }
//   else if(i % 2 !== 0){
//     secondLine += numChar
//   }
// }
// console.log(firstLine + secondLine)

//"This is the first line\nAnd this is the second"

// important will be to write in separate lines of code, review notes to see 

// at the end, once I get the result, need to define a variable size so that the program works for any size, outputing any kind of grid

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);