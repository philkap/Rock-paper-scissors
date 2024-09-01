let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        document.getElementById('winner').textContent = "You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('winner').textContent = "The computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => {
    const humanChoice = 'rock';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    document.getElementById('round-result').textContent = result;
    updateScore();
    checkWinner();
});

document.getElementById('paper').addEventListener('click', () => {
    const humanChoice = 'paper';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    document.getElementById('round-result').textContent = result;
    updateScore();
    checkWinner();
});

document.getElementById('scissors').addEventListener('click', () => {
    const humanChoice = 'scissors';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    document.getElementById('round-result').textContent = result;
    updateScore();
    checkWinner();
});
