
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

    function disableBtn() {
        var element = document.getElementsByClassName("btn");
        console.log(element);
        var i;
        for (i = 0; i < element.length; i++) {
        element[i].classList.remove("btn");
        }
    }
    
    if ((computerScore == 5) || (playerScore == 5)) {
        disableBtn();
        // document.getElementById("gameover").innerHTML = "GAME OVER!";
        // document.getElementsByClassName("btn").classList.remove("btn");
        // document.getElementsByClassName("btn")[1].disabled = true;
        // document.getElementsByClassName("btn")[2].disabled = true;
        // buttonPlayAgain.style.visibility = 'visible';
        // console.log(document.getElementsByClassName("btn")[2])
    }
    resetGame();
    
    function resetGame() {
    buttonPlayAgain.addEventListener('click', () => {
        window.location.reload();
    });
};
}
