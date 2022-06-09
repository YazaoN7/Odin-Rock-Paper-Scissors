const rpsArray = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
const buttonContainer = document.querySelector("#container");

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
        console.log(computerSelection + " == " + playerSelection)
        return "It's a tie!";
    }
    else if 
    (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    )
    {
        console.log("Computer wins! Computer selected: " + computerSelection + " You selected: " + playerSelection)
        return "Computer wins!";
    }
    else
    {
        console.log("You win! Computer selected: " + computerSelection + " You selected: " + playerSelection)
        return "You win!";
    }
}