alert('Welcome to Tjuster\'s Rock, Paper and Scissors game! You will play five rounds, you get one point for winning and no points for a draw. At the end a winner will be declared. You will have to enter rock, paper or scissors manually each time (case-insensitive). You will get a popup with the computer\'s selection and wheter you\'ve won or lost the round, or if it was a draw. At the end a popup will appear with how many rounds you won and lost and who\'s the winner or loser of the whole game. The game can also end in a draw. Thanks for playing!')

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

// Define global variables
let     gameWins = 0;
let     gameLosses = 0;
let     playerSelection = 'rock';

// Loop 5 games
for (let i = 0; i < 5; i++) {
        computerPlay();
        let computerSelection = computerPlay();
        playerSelection = window.prompt('Do you want to play rock, paper or scissors?').toLowerCase();
        alert(`You selected ${playerSelection}!`);
        alert(`The computer selected ${computerSelection}!`);
        playRound (playerSelection, computerSelection);
        alert(playRound (playerSelection, computerSelection));
}

// Divides the gameWins and gameLosses by two
gameWins = gameWins / 2;
gameLosses = gameLosses / 2;

// Announce how many games are won and how many games are lost
alert(`You won ${gameWins} rounds and lost ${gameLosses} rounds!`)

// Announce a winner, loser or if it's a draw
if (gameWins > gameLosses) {
        alert('Congratulations, you\'ve won the game!')
} else if (gameLosses > gameWins) {
        alert('Too bad, you\'ve lost the game..')
} else {
        alert('It\'s a draw, nobody won or lost the game!')
}
