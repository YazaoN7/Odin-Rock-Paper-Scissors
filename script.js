const rpsArray = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;

function computerPlay()
{    
    computerNumber = Math.floor(Math.random() * rpsArray.length);
    computerSelection = rpsArray[computerNumber];
    return computerSelection
}

function playGame(playerSelection, computerSelection)
{
    computerPlay()
    computerSelection = rpsArray[computerNumber];
    playerSelection = window.prompt("Enter rock, paper or scissors: ", "");
    playerSelection = playerSelection.toLowerCase()
    if (computerSelection == playerSelection)
    {
        console.log(computerSelection + " == " + playerSelection)
        return "It's a tie!";
    }
    else if 
    (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    )
    {
        console.log("Computer wins! Computer selected: " + computerSelection)
        return "Computer wins!";
    }
    else
    {
        console.log("You win! Computer selected: " + computerSelection)
        return "You win!";
    }
}


function game()
{
    for (let i = 0; i < 5; i++){
        playGame()
    };
}
game()