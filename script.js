




function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomElement = choice[Math.floor(Math.random() * choice.length)];
    return randomElement;
}