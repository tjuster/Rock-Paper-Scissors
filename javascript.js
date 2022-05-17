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
        console.log(playerSelection);
// Check if it's not a draw
        if (computerSelection === playerSelection) {
        return 'It\'s a draw!';
// Compare input to computerPlay
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
                gameLosses += 1;
        return 'You lose! Paper beats rock!';
        } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
                gameWins += 1;
        return 'You win! Rock beats scissors!';
        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
                gameWins += 1;
        return 'You win! Paper beats rock!';
        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
                gameLosses += 1;
        return 'You lose! Scissors beats paper!';
        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
                gameLosses += 1;
        return 'You lose! Rock beats scissors!';
        } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
                gameWins += 1;    
        return 'You win! Scissors beats paper!';
// Check if they didn't input anything else
        } else {
        return 'You didn\'t input rock, paper or scissors.';
        }

}

let computerSelection = computerPlay();
let playerSelection = 'rock';

const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => playRound(), {
  playerSelection : 'rock'
});

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => playRound(), {
  playerSelection : 'paper'
});

const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click', () => playRound(), {
  playerSelection : 'scissors'
});

