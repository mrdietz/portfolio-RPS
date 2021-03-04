
let playerScore = 0;
let computerScore = 0;
function assignPlayerSelection(choice) {
    let playerSelection = choice;
    return playerSelection;
};
console.log(playerSelection);

function game() {
    function computerPlay() {
        const choice = ["paper", "rock", "scissors", "thermonuclear device"];  

        const random = Math.floor(Math.random() * choice.length);
        return choice[random];  
    }    

    // const playerSelection = prompt("Pick one: Paper, Rock, or Scissors?");
    

    const computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {

        if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Tied! Play again! You: " + playerScore + " | Computer: " + computerScore;

        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
            computerScore ++;
            return "Paper covers rock, YOU LOSE! You: " + playerScore + " | Computer: " + computerScore;

        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") {
            playerScore ++;
            return "Rock smashes scissors, YOU WIN! You: " + playerScore + " | Computer: " + computerScore;

        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") {
            playerScore ++;
            return "Paper covers rock, YOU WIN! You: " + playerScore + " | Computer: " + computerScore;

        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") {
            computerScore ++;
            return "Scissors cut paper, YOU LOSE! You: " + playerScore + " | Computer: " + computerScore;

        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") {
            computerScore ++;
            return "Rock smashes scissors, YOU LOSE! You: " + playerScore + " | Computer: " + computerScore;

        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") {
            playerScore ++; return "Scissors cut paper, YOU WIN! You: " + playerScore + " | Computer: " + computerScore;

        } else if (computerSelection === "thermonuclear device") {
            return "Thermonuclear device destroys planet...EVERYBODY LOSES!!! You: " + playerScore + " | Computer: " + computerScore;

        } else {
            return "That doesn't make sense. Try again.";
        }
    }   

    console.log("You chose " + playerSelection + ".");
    console.log("Computer chose " + computerSelection + ".")
    console.log(playRound(playerSelection, computerSelection));
}
        
var i;
for (i = 0; i < 5; i++) {
    game ();
}

