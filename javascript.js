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
        if (computerSelection === playerSelection) {
                gameDraws += 1;
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
        } else {
                gameWins += 1;    
        return 'You win! Scissors beats paper!';
        }
}

function scoreBoard() {
        if (gameWins === 10) {
                alert('You\'ve won the game!')
                document.location.reload(true)
                } else if (gameLosses === 10) {
                alert('You\'ve lost the game!')
                document.location.reload(true)
                } else if (gameDraws === 10) {
                alert('The game ends in a draw!')
                document.location.reload(true)
                }
        }

function playerChoiceRock () {
        computerPlay()
        computerSelection = computerPlay();
        playerSelection = 'rock';
        playRound(playerSelection, computerSelection);
        document.getElementById("result").innerHTML = playRound(playerSelection, computerSelection).toString();
        document.getElementById("wins").innerHTML = (gameWins / 2).toString();
        document.getElementById("draws").innerHTML = (gameDraws / 2).toString();
        document.getElementById("losses").innerHTML = (gameLosses / 2).toString();
        scoreBoard();
}

function playerChoicePaper () {
        computerPlay()
        computerSelection = computerPlay();
        playerSelection = 'paper';
        playRound(playerSelection, computerSelection);
        document.getElementById("result").innerHTML = playRound(playerSelection, computerSelection).toString();
        document.getElementById("wins").innerHTML = (gameWins / 2).toString();
        document.getElementById("draws").innerHTML = (gameDraws / 2).toString();
        document.getElementById("losses").innerHTML = (gameLosses / 2).toString();
        scoreBoard();
}

function playerChoiceScissors () {
        computerPlay()
        computerSelection = computerPlay();
        playerSelection = 'scissors';
        playRound(playerSelection, computerSelection);
        document.getElementById("result").innerHTML = playRound(playerSelection, computerSelection).toString();
        document.getElementById("wins").innerHTML = (gameWins / 2).toString();
        document.getElementById("draws").innerHTML = (gameDraws / 2).toString();
        document.getElementById("losses").innerHTML = (gameLosses / 2).toString();
        scoreBoard();

}

// Define global variables
let     gameWins = 0;
let     gameLosses = 0;
let     gameDraws = 0;
let     playerSelection = 'rock';

const btnRock = document.querySelector('.rock');
btnRock.addEventListener("click", playerChoiceRock)

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener("click", playerChoicePaper)

const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener("click", playerChoiceScissors)