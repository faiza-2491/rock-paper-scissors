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

/*
function getHumanChoice()
{
    let choice = prompt("Enter rock, paper, or scissors: ");
    return choice;
}
*/

let computerScore = 0;
let humanScore = 0;


function playRound(event, humanChoice)
{
    event.preventDefault();

    let computerChoice = getComputerChoice();

    if (humanChoice.textContent === "paper" && computerChoice === "scissors")
    {
        console.log("You lose! Scissors beats paper");
        computerScore += 1;
    }
    else if (humanChoice.textContent === "rock" && computerChoice === "paper")
    {
        console.log("You lose! paper beats rock");
        computerScore += 1;
    }
    else if (humanChoice.textContent === "scissors" && computerChoice === "rock")
    {
        console.log("You lose! rock beats scissors");
        computerScore += 1;
    }
    else if (humanChoice.textContent === "scissors" && computerChoice === "paper")
    {
        console.log("You Win! Scissors beats paper");
        humanScore += 1;
    }
    else if (humanChoice.textContent === "paper" && computerChoice === "rock")
    {
        console.log("You Win! paper beats rock");
        humanScore += 1;
    }
    else if (humanChoice.textContent === "rock" && computerChoice === "scissors")
    {
        console.log("You Win! rock beats scissors");
        humanScore += 1;
    }
    else if (humanChoice.textContent === computerChoice)
    {
        console.log("Tie!");
    }

    console.log("Computer Score: " + computerScore)
    console.log("Human Score: " + humanScore)
}

/*
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
*/

let choice;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", playRound(e, rock));

paper.addEventListener("click", playRound(e, paper));

scissors.addEventListener("click", playRound(e, scissors));

