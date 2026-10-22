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

let computerScore = 0;
let humanScore = 0;


function playRound(humanChoice)
{

    let results = document.querySelector(".results");
    let currentRound = document.createElement("p");
    let compScoreDisplay = document.querySelector(".comp-score");
    let userScoreDisplay = document.querySelector(".user-score");
    let computerChoice = getComputerChoice();

    // checks the winner of current round, updates and displays winner and score
    if (humanChoice.textContent === "paper" && computerChoice === "scissors")
    {
        currentRound.textContent = "You lose! Scissors beats paper";
        computerScore += 1;
        compScoreDisplay.textContent = "Computer Score: " + computerScore;
    }
    else if (humanChoice.textContent === "rock" && computerChoice === "paper")
    {
        currentRound.textContent =  "You lose! paper beats rock";
        computerScore += 1;
        compScoreDisplay.textContent = "Computer Score: " + computerScore;
    }
    else if (humanChoice.textContent === "scissors" && computerChoice === "rock")
    {
        currentRound.textContent =  "You lose! rock beats scissors";
        computerScore += 1;
        compScoreDisplay.textContent = "Computer Score: " + computerScore;
    }
    else if (humanChoice.textContent === "scissors" && computerChoice === "paper")
    {
        currentRound.textContent =  "You Win! Scissors beats paper";
        humanScore += 1;
        userScoreDisplay.textContent = "Your Score: " + humanScore;
    }
    else if (humanChoice.textContent === "paper" && computerChoice === "rock")
    {
        currentRound.textContent =  "You Win! paper beats rock";
        humanScore += 1;
        userScoreDisplay.textContent = "Your Score: " + humanScore;
    }
    else if (humanChoice.textContent === "rock" && computerChoice === "scissors")
    {
        currentRound.textContent =  "You Win! rock beats scissors";
        humanScore += 1;
        userScoreDisplay.textContent = "Your Score: " + humanScore;
    }
    else if (humanChoice.textContent === computerChoice)
    {
        currentRound.textContent =  "Tie!";
    }
    
    
    results.appendChild(currentRound);

    // checks if somebody has reached 5 points and displays winner
    let score = document.createElement("p");
    if (humanScore === 5 && computerScore === 5)
    {
        score.textContent = "final ranking: Tie!";
        results.appendChild(score);
    }
    else if (humanScore === 5)
    {
        score.textContent = "You win the game!";
        results.appendChild(score);
    }
    else if (computerScore === 5)
    {
        score.textContent = "Computer wins the game!";
        results.appendChild(score);
    }
}

let choice;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// adding () => before calling playRound allows the function to be called not immediately when the bpage is reloaded and only when
// the button is clicked
rock.addEventListener("click", () => playRound(rock));

paper.addEventListener("click", () => playRound(paper));

scissors.addEventListener("click", () => playRound(scissors));

