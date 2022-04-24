const rpsArray = ["rock", "paper", "scissors"];
let computerSelection;
let userSelection;


function computerPlay()
{
    computerSelection = Math.floor(Math.random() * rpsArray.length);
    console.log("computer has selected " + rpsArray[computerSelection])
}

computerPlay()

function playGame() {
    userSelection = userSelection.toLowerCase();
    if (rpsArray[computerSelection] == userSelection)
    {
        console.log("It's a tie!")
    }
    else if 
    (
        (rpsArray[computerSelection] == "rock" && userSelection == "scissors") ||
        (rpsArray[computerSelection] == "scissors" && userSelection == "paper") ||
        (rpsArray[computerSelection] == "paper" && userSelection == "rock")
    )
    {
        console.log("Computer wins!");
    }
    else
    {
        console.log("You win!")
    }
}

userSelection = window.prompt("Enter rock, paper or scissors: ", "")

playGame()