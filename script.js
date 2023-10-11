
let playerChoice = prompt("What is your choice?");

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomElement = choice[Math.floor(Math.random() * choice.length)];
    return randomElement;
}

function round() {
    let computerSelection = getComputerChoice();
    let playerSelection = playerChoice;
}