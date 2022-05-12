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

function playRound (playerSelection, computerSelection, gameWins, gameLosses) {
// Check if it's not a draw
        if (computerSelection === 'rock' && playerSelection === 'rock') {
        return 'It\'s a draw!';
        } else if (computerSelection === 'paper' && playerSelection === 'paper') {
        return 'It\'s a draw!';
        } else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        return 'It\'s a draw!';
// Compare input to computerPlay
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
                gameLosses++;
        return 'You lose! Paper beats Rock!';
        } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
                gameWins++;
        return 'You win! Rock beats Scissors!';
        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
                gameWins++;
        return 'You win! Paper beats Rock!';
        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
                gameLosses++;
        return 'You lose! Scissors beats Paper!';
        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
                gameLosses++; 
        return 'You lose! Rock beats Scissors!';
        } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
                gameWins++;    
        return 'You win! Scissors beats Paper!';
// Check if they didn't input anything else
        } else {
        return 'You didn\'t input Rock, Paper or Scissors';
        }
}

let     gameWins = 0;
let     gameLosses = 0;
let     playerSelection = 'rock';

for (let i = 0; i < 5; i++) {
        computerPlay();
        let computerSelection = computerPlay();
        playerSelection = window.prompt('Do you want to play Rock, Paper or Scissors?').toLowerCase();
        console.log(`You selected ${playerSelection}!`);
        playRound (playerSelection, computerSelection, gameWins, gameLosses);
        console.log(playRound (playerSelection, computerSelection, gameWins, gameLosses));
        console.log(`The computer selected ${computerSelection}!`);
        }
console.log(`You won ${gameWins} rounds and lost ${gameLosses} rounds!`)