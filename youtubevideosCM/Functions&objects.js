function addFunc(num1,num2){
    console.log(num1 + num2);
}

const output = addFunc(50,75)
console.log(output)

const person = {
    name: 'will',
    company: 'codesmith',
    greeting: function () {
       console.log('hello, everybody'); 
    },
    favNum: 17
};

console.log(person.name)
person.greeting()
console.log(person['favNum'])

console.log(Number("5"))

let strNum = "5"
console.log("5")
console.log(typeof(strNum))

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
