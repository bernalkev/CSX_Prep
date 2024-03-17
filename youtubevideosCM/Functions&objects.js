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