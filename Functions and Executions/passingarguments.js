const x = 3;

function isX1(num) {
    const x = 5;
    return num === x; /// comparacion de tipo y valor triple =, doble solo compara el valor
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3); // if this one is another number result is false, because it goes to the global environment only as there is no constant defined in the isX2 function

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true

