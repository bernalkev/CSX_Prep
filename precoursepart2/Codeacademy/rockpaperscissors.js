const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error!");
    }
  };
  
  const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      return "rock";
    }
    if (randomNum === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "TIE!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Wins!";
      } else {
        return "you won!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "computer wins with scissors";
      } else {
        return "you won son of a gun!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "computer wins with rock!";
      } else {
        return "user won with scissors! Fua!!";
      }
    }
    if (userChoice === "bomb") {
        return "USER WINS!";
    }
  };  
  
  const playGame = () => {
    let userChoice = getUserChoice("paper");
    let computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  