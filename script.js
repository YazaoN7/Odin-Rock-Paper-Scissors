const rpsArray = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
const buttonContainer = document.querySelector("#container");
const resultDisplay = document.querySelector("#result");


const playgamebutton = document.querySelector("#playgame");

const handleClick = (e) => {
    playGame(e.target.innerHTML, computerPlay)
}
rpsArray.forEach(member => {
    const button = document.createElement("button")
    button.innerHTML = member;
    button.addEventListener("click", handleClick);
    buttonContainer.appendChild(button);
})

// computer selects a random member of rpsArray
function computerPlay()
{    
    return computerNumber = Math.floor(Math.random() * rpsArray.length);
}

// plays one round of-rock paper-scissors
const playGame = (playerSelection, computerSelection) =>
{
    computerPlay()
    computerSelection = rpsArray[computerNumber];
    
    if (computerSelection === playerSelection)
    {
        resultDisplay.innerHTML = "It's a tie!";
        return "It's a tie!";
    }
    else if 
    (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    )
    {
        computerScore += 1;
        resultDisplay.innerHTML = "Computer wins! Computer selected " + computerSelection + ". You selected " + playerSelection + ". Your score: " + playerScore + " Computer Score: " + computerScore;
        return "Computer wins!";
    }
    else
    {
        playerScore += 1;
        resultDisplay.innerHTML = "You win! Computer selected " + computerSelection + ". You selected " + playerSelection + ". Your score: " + playerScore + " Computer score: " + computerScore;
        return "You win!";
    }
}