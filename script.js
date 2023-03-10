let choiceBtn = document.querySelectorAll('.choice');
let options = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;
let a = 0;
let b = 0;


choiceBtn.forEach(button => button.addEventListener("click", e => {
    playerSelection = button.textContent;
    getComputerChoice(options);
    computerSelection = getComputerChoice(options);
    

    document.querySelector('#playerselection').textContent = playerSelection;
    document.querySelector('#computerselection').textContent = computerSelection;

    scoreControl();

    document.querySelector('#playerscore').textContent = a;
    document.querySelector('#computerscore').textContent = b;
    

    result();
}))
function getComputerChoice(options) {
    return options[Math.floor(Math.random()*options.length)];
}
function scoreControl() {
    if ((playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock")) {
        a += 1;
    }
    else if ((playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper")) {
        b += 1;
    }
    else if (playerSelection === computerSelection) {
        return a;
    }
    else {
        console.log('Error');
    }
}
function result() {
    if (a+b === 10) {
        if (a>b) {
            document.querySelector('#result').textContent = "You win! score is You: " + a + " Computer: " + b;
        }
        else if (a<b) {
            document.querySelector('#result').textContent = "You lose! score is You: " + a + " Computer: " + b;
        }
        else {
            document.querySelector('#result').textContent = "It's a draw! score is You: " + a + " Computer " + b;
        }
    }
}
function refreshPage() {
    window.location.reload(true);
}