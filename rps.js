function getComputerChoice() {
    let choice;
    let a = Math.random();
    if (0 <= a && a < 1/3) {
        choice = "rock";
    } else if (1/3 <= a && a < 2/3) {
        choice = "paper";
    } else {
        choice = "scissors";  // Fixed typo from "scissor" to "scissors"
    }
    
    console.log(choice);  // Output the choice to the console
    return choice;  // Return the computer's choice
}

function getHumanChoice() {
    let choice = prompt("Type rock, paper, or scissors").toLowerCase();
    
    // Validate the input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors" && choice !== null) {
        alert("Invalid input. Please type rock, paper, or scissors.");
        choice = prompt("Type rock, paper, or scissors").toLowerCase();
    }

    if (choice === null) {
        alert("You canceled the game.");
        return null;
    }

    console.log(choice);
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // Make both choices lowercase for consistency
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        // Check if it's a tie
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }

        // Check all winning conditions for the human player
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return "You win! " + humanChoice + " beats " + computerChoice;
        }

        // If the above conditions don't apply, the computer wins
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        if (humanChoice === null) {
            console.log("Game canceled.");
            return;
        }

        console.log("Round " + (i + 1) + ": " + playRound(humanChoice, computerChoice));
    }

    // Declare the final winner based on scores
    if (humanScore > computerScore) {
        console.log("You won the game with a score of " + humanScore + " to " + computerScore + "!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game with a score of " + computerScore + " to " + humanScore + "!");
    } else {
        console.log("The game ended in a tie with both scores at " + humanScore + "!");
    }
}

playGame();
