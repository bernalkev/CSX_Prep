// // we're building a quiz game with users

// // name, score, and functionality, like ability to increase score

// const user1 = {
//     name: "Will",
//     score: 3,
//     increment: function(){
//         user1.score++;
//     }
// };

// console.log(user1.increment());

// function userCreator(name, score){
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function(){
//         newUser.score++;
//     }
//     return newUser;
// }

// const user1 = userCreator ("Will", 3);
// const user2 = userCreator ("Tim", 5);
// console.log(user1)
// console.log(user2)

function userCreator(name, score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};

const userFunctionStore = {
    increment: function(){this.score++;},
    login: function(){console.log("Logged in");}
};

const user1 = userCreator ("Will", 3);
const user2 = userCreator ("Tim", 5);
console.log(user1.increment());