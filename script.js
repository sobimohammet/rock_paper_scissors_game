function getComputerChoice(options) {
    return options[Math.floor(Math.random()*options.length)];
}
let options = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice(options);
let playerInput = prompt("Enter your choice; rock, paper or scissors to play against computer.");
let playerSelection = playerInput.toLowerCase();
function playRound(playerSelection, computerSelection) {
    if ((playerSelection=="rock"&&computerSelection=="scissors") | (playerSelection=="paper"&&computerSelection=="rock") | (playerSelection=="scissors"&&computerSelection=="paper")) {
        return(playerWinStatement);
    }
    else if ((playerSelection=="rock"&&computerSelection=="paper") | (playerSelection=="paper"&&computerSelection=="scissors") | (playerSelection=="scissors"&&computerSelection=="rock")) {
    return(computerWinStatement);
    }
    else if ((playerSelection=="rock"&&computerSelection=="rock") | (playerSelection=="paper"&&computerSelection=="paper") | (playerSelection=="scissors"&&computerSelection=="scissors")) {
        return(drawStatement);
    }
    else {
        return(somethingDifferent);
    }
}
let playerWinStatement = "You won! " + playerSelection + " beats " + computerSelection;
let computerWinStatement = "You lose! " + computerSelection + " beats " + playerSelection;
let drawStatement = "It is a draw! ";
let somethingDifferent = "Wrong input! Please try again";
let result = playRound(playerSelection, computerSelection);
console.log(result);