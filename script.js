alert("Welcome to the hunger games");
let userInput = prompt("Choose Wisely");
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

/*defines what happens with input and converts input to lover case*/

function getPlayerChoice() {
  /*Turns input to lower case for the sake of clarity and fixing errors*/
  userInput = userInput.toLowerCase();

  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.log("Error! not valid input. Enter Valid Input");
    return getPlayerChoice();
  }
}

/* Allows computer to select random thing from array*/

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomElement = choice[Math.floor(Math.random() * choice.length)];
  return randomElement;
}

let computerChoice = getComputerChoice();

/*Allows game to play out*/
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let roundCount = 0; roundCount < 5; roundCount++) {
    function round() {
      /* Allows round to play out */
      let result;
      let playerChoice = getPlayerChoice(); // players choice
      let computerChoice = getComputerChoice(); // computers choice
      if (computerChoice === playerChoice) {
        result = "Draw";
      } else if (
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")
      ) {
        result = "You lose this round";
        computerScore++;
      } else {
        result = "You win this round";
        playerScore++;
      }
      console.log(result); // result of round
    }

    round(); // allows us to have multiple rounds
  }

  // determines the winner
  if (playerScore > computerScore) {
    console.log("Congratulations! You win the match!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lose the match. Better luck next time!");
  } else {
    console.log("It's a draw! The match is tied.");
  }
}

game(); //calls game function
