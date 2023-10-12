alert('Welcome to the hunger games');
let userInput = prompt("Choose Wisely");

/*defines what happens with input and converts input to lover case*/

function getPlayerChoice() {
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
let playerChoice = getPlayerChoice();
/*it works till this moment*/


/* Allows round to play out */
function round() {

    if (computerChoice === playerChoice) {
        result = "Draw";
    } else if (playerChoice === rock && computerChoice === paper) {
        result = "You lose, paper beats rock!"
    } else if (playerChoice === paper && computerChoice === scissors) {
        result = "You lose, scissors cut paper!"
    } else if (playerChoice === scissors && computerChoice === rock) {
        result = "You lose, scissors shatter on a rock!"
    }
      else {
        result = "You win this round";
    }

}

round();

console.log(round(playerChoice, computerChoice));