// Generate a random number between 1 and 3
function computerPlay(computerString) {
   computerOutput = Math.floor(Math.random() * 3) + 1;
// Assign 1 to 'Rock'
    if (computerOutput === 1) {
    computerString = 'rock';
    return 'rock';
// Assign 2 to 'Paper'
    } else if (computerOutput === 2) {
    computerString = 'paper';
    return 'paper';
// Assign 3 to 'Scissors'
    } else {
    computerString = 'scissors';
    return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
// Let user input 'Rock', 'Paper' or 'Scissors', case-insenstive
        playerSelection = window.prompt('Do you want to play Rock, Paper or Scissors?').toLowerCase();
        console.log(`You selected ${playerSelection}!`)
// Check if it's not a draw
        if (computerSelection === 'rock' && playerSelection === 'rock') {
        return 'It\'s a draw!';
        } else if (computerSelection === 'paper' && playerSelection === 'paper') {
        return 'It\'s a draw!';
        } else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        return 'It\'s a draw!';
// Compare input to computerPlay
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You lose! Paper beats Rock!';
        } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win! Rock beats Scissors!';
        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return 'You win! Paper beats Rock!';
        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You lose! Scissors beats Paper!';
        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You lose! Rock beats Scissors!';
        } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You win! Scissors beats Paper!';
// Check if they didn't input anything else
        } else {
        return 'You didn\'t input Rock, Paper or Scissors';
        }
}

const playerSelection = 'rock';
const computerString = 'rock';
const computerSelection = computerPlay();
console.log(playRound (playerSelection, computerSelection));
console.log(`The computer selected ${computerSelection}!`)
