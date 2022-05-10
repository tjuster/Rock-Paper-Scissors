// Generate a random number between 1 and 3
function computerPlay () {
   computerOutput = Math.floor(Math.random() * 3) + 1;
   let computerString = ('');
// Assign 1 to 'Rock'
    if (computerOutput === 1) {
        computerString = ('rock');
    return;
// Assign 2 to 'Paper'
    } else if (computerOutput === 2) {
        computerString = ('paper');
    return;
// Assign 3 to 'Scissors'
    } else {
        computerString = ('scissors');
    return;
    }
}

function playRound(playerSelection, computerSelection) {
// Let user input 'Rock', 'Paper' or 'Scissors', case-insenstive
    playerSelection = window.prompt('Do you want to play Rock, Paper or Scissors?').toLowerCase();
// Check if it's not a draw
    if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log('It\'s a draw!')
    return;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    console.log('It\'s a draw!')
    return;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    console.log('It\'s a draw!')
    return;
// Compare input to computerPlay
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    console.log('You lose! Paper beats Rock!')
    return;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log('You win! Rock beats Scissors!')
    return;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    console.log('You win! Paper beats Rock!')
    return;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    console.log('You lose! Scissors beats Paper!')
    return;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    console.log('You lose! Rock beats Scissors!')
    return;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    console.log('You win! Scissors beats Paper!')
    return;
// Check if they didn't input anything else
    } else {
    console.log('You didn\'t input Rock, Paper or Scissors!')
    return;
    }
  }
  
  const playerSelection = 'rock';
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));