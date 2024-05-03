function printNumbersInRange(start, end) {
    console.log(start);
    start++
    if(start < end)
        printNumbersInRange(start, end);
}

function printNumbers(num) {
    printNumbersInRange(0,num)
    // for(let i = 0; i < num; ++i) {
    //     console.log(i);
    // }
}



printNumbers(10);

//printNumbersRecursion(0,10)