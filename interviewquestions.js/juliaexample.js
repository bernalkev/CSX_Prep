// Declare a function filterByLength, that takes an array of words and a number 
// as arguments. This function should return a new array containing only the words that are longer 
// than the number provided.

function filterByLength (array, num){
    let newArr = []
    for (let i=0; i<array.length; i++){
        if (array[i].length > num){
            newArr.push(array[i]);
        }
    }
    return newArr
}

// function filterByLength (array, num){
//     let newArr = []
//     newArr = array.filter((element) =>{
//         if(element.length > num){
//             return true
//         } 
//             return false
//     })
//     return newArr
// }



console.log(filterByLength(["word", "Sunday", "dog", "cat"], 3));