
let playerScore = 0;
let computerScore = 0;

const playerChoice = document.querySelectorAll(".btn");
playerChoice.forEach((button) => button.addEventListener("click", game));

function game(e) {

    function computerPlay() {
        const compChoice = ["paper", "rock", "scissors"];  
        const random = Math.floor(Math.random() * compChoice.length);
        return compChoice[random];  
    };

    let playerSelection = e.target.value;
    let computerSelection = computerPlay();
    let result;

    if (playerSelection == computerSelection) {
    result = "tie";
    document.getElementById("message").innerHTML = "Tie, you're both losers!";

    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock")) {
        result = "pWin";
        playerScore ++; 
        document.getElementById("message").innerHTML = "Despite what I've heard, you're a real winner!";

    } else if ((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper")) {
        result = "cWin";
        computerScore ++;
        document.getElementById("message").innerHTML = "You disappoint me...again.";
    }

    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = computerScore;
    document.getElementById("pChoice").innerHTML = playerSelection;
    document.getElementById("cChoice").innerHTML = computerSelection;

    if ((computerScore == 5) || (playerScore == 5)) {
        document.getElementById("gameover").innerHTML = "GAME OVER!";
        document.getElementsByClassName("btn")[0].disabled = true;
        document.getElementsByClassName("btn")[1].disabled = true;
        document.getElementsByClassName("btn")[2].disabled = true;
    }
};