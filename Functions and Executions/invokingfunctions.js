let calls = "";

function jerry(str) {
	// concat str with jerry
    str += 'Jerry' // this is equal to str = str + 'Jerry
    // return the invocation of kramer
    return kramer(str);
}

function george(str) {
    // concat str with george
    str += 'George'
    // return the invocation of elaine
    return elaine(str);
}

function elaine(str) {
  // concat str with elaine
    str += 'Elaine'
  // return str
    return str;
}

function kramer(str) {
	// concat str with kramer
    str += 'Kramer'
    // return invocation of george
    return george(str);

}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls)