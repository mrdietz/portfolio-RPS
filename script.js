
let playerScore = 0;
let computerScore = 0;
const buttonPlayAgain = document.querySelector('.play-again');

const playerChoice = document.querySelectorAll(".btn");
playerChoice.forEach((i) => i.addEventListener("click", game));

function game(e) {

    function computerPlay() {
        const compChoice = ["paper", "rock", "scissors"];  
        const random = Math.floor(Math.random() * compChoice.length);
        return compChoice[random];  
    };

    let playerSelection = e.target.attributes[2].nodeValue;
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
    document.getElementById("message").innerHTML = "Tie, you're both losers!";

    } else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock")) {
        playerScore ++; 
        document.getElementById("message").innerHTML = "Despite what I've heard, you're a real winner!";

    } else if ((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper")) {
        computerScore ++;
        document.getElementById("message").innerHTML = "You disappoint me...again.";
    }

    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = computerScore;
    document.getElementById("pChoice").innerHTML = playerSelection;
    document.getElementById("cChoice").innerHTML = computerSelection;

    function disableBtn() {
        var element = document.getElementsByClassName("btn");
        var i;
        for (i = 0; i < element.length; i++) {
        element[i].removeEventListener("click", game);
        buttonPlayAgain.style.visibility = 'visible';
        }
    }
    
    if ((computerScore == 5) || (playerScore == 5)) {
        disableBtn();
    }

    resetGame();
    
    function resetGame() {
    buttonPlayAgain.addEventListener('click', () => {
        window.location.reload();
    });
};
}
