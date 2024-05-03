let counter = 0
function recurse(){
    if(counter === 3) return 'done';
    console.log(counter)
    counter++
    return recurse()
}

console.log(recurse())
