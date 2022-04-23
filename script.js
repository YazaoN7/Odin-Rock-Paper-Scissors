function computerPlay() {
    var computerSelection = ["rock", "paper", "scissors"];
    const answer = Math.floor(Math.random() * computerSelection.length);
    console.log("Computer selected " + computerSelection[answer]);
}
userSelection = window.prompt("Enter rock paper or scissors: ", "")
if (userSelection == "rock")
{
    console.log("User selected rock")
}
else if (userSelection == "paper")
{
    console.log("user selected paper")
}
else if (userSelection == "scissors")
{
    console.log("user selected scissors")
}

computerPlay()