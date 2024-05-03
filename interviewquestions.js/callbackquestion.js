// Declare a function 'record', which takes a callback function as an argument and returns another function.
// The returned function takes in a number, and when invoked, will run the callback on this number. The function should keep a record of all previous results of running the callback (if it is invoked more than once with the same argument, 
// it should retrieve the correct result from the record rather than running the callback again). 
// On each invocation, it should return the *highest value so far* among all previous calls. Once complete, make sure to test your function.

function record (callback){
    const record = {}
    let highestValue = undefined
    function myFunc (num){
        //console.log("I am here 1: ", num)
        if (record[num] === undefined){
            //console.log("I am here 2")
            record[num] = callback(num)
            if(highestValue === undefined){
                highestValue = record[num];
            }
            highestValue = Math.max(highestValue, record[num]) 
        } 
        return highestValue
    }
    return myFunc
}

function paulCall(num){
    console.log("hello");
    return num * 2;
}

const result2 = record(paulCall)
console.log(result2(100))
console.log(result2(4000))
console.log(result2(200))
console.log(result2(100))