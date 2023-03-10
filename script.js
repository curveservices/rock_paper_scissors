// Add a div to DOM to display results
const messageContainer = document.querySelector(".message_container");

const scores = document.createElement("div");
scores.classList.add("scores");

const playerDiv = document.createElement("div");
playerDiv.textContent = "Your Score:";

const scoreCard = document.createElement("div");
scoreCard.classList.add("scorecard");
scoreCard.setAttribute("id", "playerScore");
scoreCard.textContent = "0"

const compDiv = document.createElement("div");
compDiv.textContent = "Computer Score:";

const scoreCard2 = document.createElement("div");
scoreCard2.classList.add("scorecard");
scoreCard2.setAttribute("id", "computerScore");
scoreCard2.textContent = "0";

const messageDiv = document.createElement("div");
messageDiv.setAttribute("id", "message");
messageDiv.textContent = "Don't lose to a computer!!";

messageContainer.append(scores, messageDiv);
scores.append(playerDiv, scoreCard, compDiv, scoreCard2);

// Create three buttons, one for each selection & Add event listener
// Call playRound function with the correct playerSelection
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.dataset.type;
    playRound(playerSelection, getComputerChoice());
    console.log(playerSelection);
  });
});

function refreshPage() {
  window.location.reload();
}

// Get message and score card elements
const message = document.querySelector("#message");
const playerCard = document.querySelector("#playerScore");
const computerCard = document.querySelector("#computerScore");

// Random Computer Choice
// create function getCumputerChoices random return R,P||S
const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Scores
let playerScore = 0;
let computerScore = 0;

// Function has 2 parameters - playerSelection & computerSelection
// winner of the round: "You Lose! Paper beats Rock"
// Display running score & announce winner of game once a player reaches 5
function playRound(playerSelection, computerSelection) {
  // process each selection
  if (playerScore < 5 && computerScore < 5) {
    if (
      (playerSelection === "Rock" && computerSelection === "Rock") ||
      (playerSelection === "Paper" && computerSelection === "Paper") ||
      (playerSelection === "Scissors" && computerSelection === "Scissors")
    ) {
      message.textContent = `It's a Tie! Both Selected ${playerSelection}`;
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      message.textContent = `Winner ! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
    } else {
      message.textContent = `Loser ! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    }
    playerCard.textContent = playerScore;
    computerCard.textContent = computerScore;

    // Display final results
    finalResults(playerScore, computerScore);
  }
}

function finalResults(player, computer) {
  if (player === 5 || computer === 5) {
    if (player > computer) {
      message.textContent = "Game Over! You Win!";
    } else {
      message.innerHTML = "Game Over! Computer Wins!";
    }
  }
}

// Code removed to enable buttons

// function checkWinner(playerSelection, computerSelection) {
//  if (playerSelection == computerSelection){
//      return "Tie"
//     } else if (
//         (playerSelection == "rock" && computerSelection == "scissors") ||
//         (playerSelection == "paper" && computerSelection == "rock") ||
//         (playerSelection == "scissors" && computerSelection == "paper")
//     ) {
//         return "Player";
//     } else {
//         return "Computer"
//     }
//  }

// 1 For now, remove the logic that plays exactly five rounds.
// Write a NEW function called game().
// function game() {
//     let scorePlayer = 0;
//     let scoreComputer = 0;

//     for (let i = 0; i < 1; i++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//     console.log("----------------");
//     if (checkWinner(playerSelection, computerSelection)== "Player") {
//         scorePlayer++;

//     } else if(checkWinner(playerSelection, computerSelection)== "Computer"){
//         scoreComputer++;
//     }
//    }
//   console.log("Game Over!")
//     if (scorePlayer > scoreComputer) {
//      console.log("Congrats!! You win");

//     } else if (scorePlayer < scoreComputer){
//     console.log("Damn! the Computer beat you");

//     } else {
//     console.log("We have a tie!!");
//     }
// };
// game()
