// any situation where you do something, and depending on the results you might do it again

// in programming, recursion occurs when a function calls itself


// any iterator function ( loop functions) can be a recursive instead
//RECURSIVE FUNCTIONS HAVE 2 PARTS:
    // 1.the recursive call to the function
    // 2.at least one condition to exit

    const countToTen = (num = 1) =>{
        while(num<=10){
            console.log(num);
            num++
        }
    }

    // countToTen();

    const recurToTen = (num = 1) => {
        if(num>10) return;
        console.log(num);
        num++;
        recurToTen(num);
    }
    recurToTen()