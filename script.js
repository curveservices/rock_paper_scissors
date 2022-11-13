//function getCumputerChoices random return RP||S
const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
   const choice = options[Math.floor(Math.random() * options.length)];
   return choice;
}   

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Tie"
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Player";
    } else {
        return "Computer"
    }       
}
//Write a function that plays a single round of RPS
// Function has 2 parameters - playerSelection & computerSelection
// then return a string that declares the 
// winner of the round like so: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie! No one wins this time!"
    }
    else if (result == "Player"){
        return `You smashed the computer! WINNER! ${playerSelection} beats ${computerSelection}` 
    }
    else{
        return `You lost to a computer!! LOOSER ${computerSelection} beats ${playerSelection}`
    }

}

// you want to return the results of this function call, 
//not console.log() them. You’re going to use what you return later on,
// so let’s test this function by using console.log to see the results

//Make your function’s playerSelection parameter 
//case-insensitive (so users can input rock, ROCK, RocK or any other variation).

//Write a NEW function called game(). 
//Call the playRound function inside of this one 
//to play a 5 round game that keeps score and reports a winner 
//or loser at the end.
//Remember loops? This is a great opportunity to use one 
//Use prompt() to get input from the user.
function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Let's play Rock Paper scissors!")
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
 }
}
game()