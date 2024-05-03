// Looping a triangle, write a loop that makes seven calls to console.log to output the following triangle.

let result = ""
let counter = 0
while (counter < 7){
  result += "#";
  counter += 1
  console.log(result)
}

// Another, simpler solution

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

  