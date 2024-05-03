function cascade(number){
    // base case
    if (number === 0){
        return
    }

    console.log(number)
    let lastDigit =  number % 10
    let newNum = number - lastDigit
    let finalNum = newNum / 10
    cascade(finalNum)
    if (!(number < 10 && number > 0)){
        console.log(number) 
    }
}

// 
// 12345
// 1234
// 123
// 12
// 1
cascade(12345)
// 12345

// function holaMundo() {
//     console.log("Hola Mundo")
// }

// console.log("AAA")
// holaMundo()
// console.log("BBBB")