// //// lexical scope

// // global scope

// let x = 1;

// const parentFunction = () => {
//     // local scope;
//     let myValue = 2
//     console.log(x);
//     console.log(myValue);

//     const childFunction = () => {
//         console.log(x += 5);
//         console.log(myValue += 1);
//     }

//     childFunction()
// }

// parentFunction()

// a closure is a function have access to the parent scope,    
// even after the parent function has closed

// a closure is created when we define a function, not when a function is 
// executed

let x = 1;

const parentFunction = () => {
    // local scope;
    let myValue = 2
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    return childFunction;
}

const result = parentFunction()
console.log(result);

result();
result();
result();
console.log(x);
console.log(myValue);