let a = 0;
let b = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        let options = ["rock", "paper", "scissors"];
function getComputerChoice(options) {
    return options[Math.floor(Math.random()*options.length)];
}
let computerSelection = getComputerChoice(options);
function getPlayerChoice() {
    let playerChoice = prompt("Enter your selection");
    return playerChoice;
}
let selection = getPlayerChoice();
let playerSelection = selection.toLocaleLowerCase();
let draw = "It's a draw, try again!";
let win = "You win!" + " " + playerSelection + " beats " + computerSelection;
let lose = "You lose! " + computerSelection + " beats " + playerSelection;
let wrongSelection = "Wrong input! please try again!";
function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draw;
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        return win;
    }
    else if ((playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "rock" && computerSelection === "paper")) {
        return lose;
    }
    else {
        return wrongSelection;
    }
}
console.log(singleRound(playerSelection, computerSelection));
if (singleRound(playerSelection, computerSelection) === win) {
    a = a + 1;
}
else if (singleRound(playerSelection, computerSelection) === lose) {
    b = b + 1;
}
    }
}
game();
if (a > b) {
    console.log("You win! score is You: " + a + " Computer: " + b);
}
else if (a < b) {
    console.log("You lose! score is You: " + a + " Computer: " + b);
}
else if (a === b) {
    console.log("It's a draw! score is  You: " + a + " Computer: " + b);
}
