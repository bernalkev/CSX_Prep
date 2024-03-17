const participants = ['Alena', 'Sherry', 'Zara'];

participants.forEach(participant =>{
    console.log(participant);
});

const numbers = [16,6,26,5];

const primes = numbers.map (p => {
    return p-3;
});

console.log(primes)


const order = (item, qty) => {
    console.log(`${qty} ${item}(s) added to the cart.`);
}

const orderCopy = order;

orderCopy('Lemon', 5)

const nums = [1, 2, 3, 4];
const initializer = 90;

const addItUp = nums.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initializer);

console.log(addItUp);

const oddNumbers = [1, 3, 5, 7];

const evenNumbers = oddNumbers.map(number => {
  return number * 2  
});

console.log(evenNumbers)