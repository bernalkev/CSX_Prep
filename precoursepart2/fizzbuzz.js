const fb = [];
// ADD CODE HERE
let i=1; // adding a variable
for (i=1; i<17; ++i){
  console.log(i) // iterando del 1-16
}
i=1
while (i<17){
  console.log(i); // evaluacion 
	if (i%15==0){
  fb.push("fizzbuzz")
  }// == comparasion, = asignacion
  else if (i%5==0){
  fb.push("buzz")
  }// == comparasion, = asignacion
  else if (i%3==0){
    fb.push("fizz")
  }
  else{
    fb.push(i)
  }
  i++; // last thing you should do is add
}

console.log(fb)