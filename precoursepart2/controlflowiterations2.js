const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
let i=0;
while (i < timesTenIfOverFive.length ) {
    console.log(timesTenIfOverFive[i]);
    if (timesTenIfOverFive[i] >=5){
        timesTenIfOverFive[i] = timesTenIfOverFive[i]*10;
    } else {
        timesTenIfOverFive[i]=timesTenIfOverFive[i]*1;
    }
    i++;
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]