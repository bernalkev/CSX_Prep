// ADD CODE HERE
function addS(s){
    return s + 's'
  }
  const animal= addS('dog')
  
  // Uncomment these to check your work!
  console.log(typeof addS); // should log: 'function'
  console.log(addS('cat')); // should log: 'cats'
  console.log(animal)

  // ADD CODE HERE // no consideres de 

function sayHello(name){
    return "Hi, " + name;
  }
  
  // Uncomment these to check your work!
  console.log(sayHello('Mary')); // should log: 'Hi, Mary'
  console.log(sayHello('Haley')); // should log: 'Hi, Haley'

  function wereAwesome(you, yourBuddy) {
    return yourBuddy+ " and " + you + " are awesome!";
  }
  
  
  // Uncomment the lines below to test your function:
  console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
  console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
  console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
  console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"