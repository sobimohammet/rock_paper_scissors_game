/* creation of a function that randomly return either rock, paper or scissors */
function getComputerChoice(options) {
    return options[Math.floor(Math.random()*options.length)];
}
let options = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice(options);


/* creation of a function that returns the player's choice(rock, paper or scissors) */
function getPlayerChoice() {
    return playerChoice;
}
let playerChoice = prompt("Enter your choice(rock, paper or scissors)").toLowerCase();
let playerSelection = getPlayerChoice();


/* creation of a function that plays a single round of rock paper scissors */
function playRound(playerSelection, computerSelection) {
    if ((playerSelection=="scissors" && computerSelection=="paper") |
    (playerSelection=="rock" && computerSelection=="scissors") |
    (playerSelection=="paper" && computerSelection=="rock")) {
        return playerWinStatement;
    }

    else if (playerSelection==computerSelection) {
        return drawStatement;
    }

    else if ((playerSelection=="paper" && computerSelection=="scissors") |
    (playerSelection=="scissors" && computerSelection=="rock") |
    (playerSelection=="rock" && computerSelection=="paper")) {
        return computerWinStatement;
    }

    else {
        return "Please enter either rock, paper or scissors it does not matter whether or not it in lower case";
    }
}
let playerWinStatement = "You win! " + playerSelection + " beats " + computerSelection;
let computerWinStatement = "You lose! " + computerSelection + " beats " + playerSelection;
let drawStatement = "It is a draw!";


/* creation of a function that plays five times */
function game() {
    for (let i=0; i<5; i++) {
        return playRound(playerSelection, computerSelection);
    }
}
console.log(game());