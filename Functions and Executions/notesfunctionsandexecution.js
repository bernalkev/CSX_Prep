// What happens when javascript executes (runs) my code?

const num = 3;
function multiplyBy2 (inputNumber){
    const result = inputNumber*2;
    return result;
}

const output = multiplyBy2(4);
const newoutput = multiplyBy2(10);
console.log(output);
console.log(newoutput)




// As soon as we start running our code, we create a global execution context
// thread of execution(parsing and executing the code line after line)
// live memory of variables with data (known as a Global Variable environment)
// the call stack, pop it off, push it up 