let countSheep = function (num){
    let result = "";
     let start = 1
     if (num === undefined){
        return console.log(result)
     }
     while (start <= num){
       result += `${start} sheep...`;
       start++
     }
     return console.log(result)
   }
   
   countSheep(4)
   countSheep(0)