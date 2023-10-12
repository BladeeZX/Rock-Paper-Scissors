alert('Welcome to the hunger games');
let userInput = prompt("Choose Wisely");

/*defines what happens with input and converts input to lover case*/

let playerChoice = userInput => {
    /*Turns input to lower case for the sake of clarity and fixing errors*/
    userInput = userInput.toLowerCase();

    if (userInput === "rock"){
      return userInput;
    } else if (userInput === "paper"){
      return userInput;
    } else if (userInput === "scissors"){
      return userInput;
    } else{
      console.log("Error! not valid input.")
      return;
    }

  }

/* Allows computer to select random thing from array*/

function getComputerChoice() {

    let choice = ["rock", "paper", "scissors"];
    let randomElement = choice[Math.floor(Math.random() * choice.length)];
    return randomElement;

}

let computerChoice = getComputerChoice();

/* Allows round to play out */
function round() {

    if (computerChoice === playerChoice) {
        result = "Draw";
    } else if (
        (playerChoice === rock && computerChoice === paper) ||
        (playerChoice === paper && computerChoice === scissors) ||
        (playerChoice === scissors && computerChoice === rock)
    ) {
        result = "You lose this round";
    }
    else {
        result = "You win this round";
    }

}

/*let playerChoice = prompt("What is your choice?");*/
round();

console.log(round(playerChoice, computerChoice));