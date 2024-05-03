// IIFE (Immediately Invoked Function Expression)

// const privateCounter = (() => {
//     let count = 0; // private variable
//     console.log(`initial value: ${count}`); // this only happens one
//     return () => {count += 1; console.log(count)} // this only returns once, afterwards you only see this function
// })();

// privateCounter();
// privateCounter();
// privateCounter();

const credits = ((num) => {
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return () =>{
        credits -= 1;
        if(credits >0) console.log(`playing game, ${credits} credits remaining` );
        if(credits <=0) console.log(`not enough credits`);
    }
})(3);

credits();
credits()