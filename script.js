
let playerScore = 0;
let computerScore = 0;

const playerChoice = document.querySelectorAll(".btn");
playerChoice.forEach((button) => button.addEventListener("click", game));

function game(e) {
    function computerPlay() {
        const compChoice = ["paper", "rock", "scissors"];  
        const random = Math.floor(Math.random() * compChoice.length);
        return compChoice[random];  
    }

    let playerSelection = e.target.value;
    const computerSelection = computerPlay();

    let result = (function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
        return "tie";
        
        } else if ((playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock")) {
            playerScore ++; 
            return "pWin";

        } else if ((playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper")) {
            computerScore ++;
            return "cWin";
        }
    })();
document.getElementById("pScore").innerHTML = playerScore;
    if (result === "tie") {
        document.getElementById("pChoice").innerHTML = playerSelection;
        document.getElementById("cChoice").innerHTML = computerSelection;
        document.getElementById("message").innerHTML = "Tie, you're both losers!";

    } else if (result === "pWin") {
        document.getElementById("pChoice").innerHTML = playerSelection;
        document.getElementById("cChoice").innerHTML = computerSelection;
        document.getElementById("message").innerHTML = "Despite what I've heard, you're a real winner!";

    } else if (result === "cWin") {
        document.getElementById("pChoice").innerHTML = playerSelection;
        document.getElementById("cChoice").innerHTML = computerSelection;
        document.getElementById("message").innerHTML = "You disappoint me...again.";
    } 

    // console.log("You chose " + playerSelection + ".");
    // console.log("Computer chose " + computerSelection + ".")
    // console.log(playRound(playerSelection, computerSelection));
}
        
// var i;
// for (i = 0; i < 5; i++) {
//     game ();
// }
