
/*
Declare a function called 'fundraiser', which will help keep track of donations towards a cause.
When invoked, 'fundraiser' should return another function that's specific to a single cause's fundraising. The returned function should take one argument, representing a donation to that cause, and should keep track of the total donations received.
The fundraising goal is reached once the total donations exceed a specified amount. On reaching the goal, return a message stating how much was raised. Any subsequent donation attempts after the goal has been reached should return a message stating that the fundraising goal has already been achieved.

Example:
const schoolFund = fundraiser(500); // Goal is 500
schoolFund(100);
schoolFund(150);
schoolFund(200);
schoolFund(60); // --> 'Goal reached with 510!'
schoolFund(20); // --> 'Goal already achieved!'

/*/ 

function fundraiser (goal){
    let totalFund = 0;
    const specificFund = (donation) =>{
        if (totalFund >= goal){
            return `Goal already achieved!`
    }
    totalFund += donation;
    if(totalFund>= goal){
        return `Goal reached with ${totalFund}`
    }
    }
    return specificFund;
}



const schoolFund = fundraiser(500); // Goal is 500
schoolFund(100);
schoolFund(150);
schoolFund(200);
console.log(schoolFund(80)); // --> 'Goal reached with 510!'
schoolFund(20); // --> 'Goal already achieved!'


