console.log("Hello World");

function getComputerChoice()
{
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0)
    {
        return "rock";
    }
    if (rand === 1)
    {
        return "paper";
    }
    return "scissors";
}


function getHumanChoice()
{
    let choice = prompt("Enter rock, paper, or scissors: ");
    return choice;
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice)
{
    humanChoice.toLowerCase();

    if (humanChoice === "paper" && computerChoice === "scissors")
    {
        console.log("You lose! Scissors beats paper");
        computerScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log("You lose! paper beats rock");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log("You lose! rock beats scissors");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You Win! Scissors beats paper");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You Win! paper beats rock");
        humanScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You Win! rock beats scissors");
        humanScore += 1;
    }
    else if (humanChoice === computerChoice)
    {
        console.log("Tie!");
    }
}


function playGame()
{
    for (let i = 0; i < 5; i += 1)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Computer Score: " + computerScore)
    console.log("Human Score: " + humanScore)
}

playGame();