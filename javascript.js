// Generate a random number between 1 and 3
function computerPlay() {
   computerOutput = Math.floor(Math.random() * 3) + 1;
// Assign 1 to 'Rock'
    if (computerOutput === 1) {
    return 'rock';
// Assign 2 to 'Paper'
    } else if (computerOutput === 2) {
    return 'paper';
// Assign 3 to 'Scissors'
    } else {
    return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
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

let     playerSelection = 'rock';
const   computerSelection = computerPlay();

for (let i = 0; i < 5; i++) {
        computerPlay();
        playerSelection = window.prompt('Do you want to play Rock, Paper or Scissors?').toLowerCase();
        console.log(`You selected ${playerSelection}!`);
        playRound (playerSelection, computerSelection);
        console.log(playRound (playerSelection, computerSelection));
        console.log(`The computer selected ${computerSelection}!`);
        }