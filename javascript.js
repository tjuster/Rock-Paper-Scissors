// Generate a random number between 1 and 3
function computerPlay () {
   computerOutput = Math.floor(Math.random() * 3) + 1;
   let computerString = ('');
// Assign 1 to 'Rock'
    if (computerOutput === 1) {
        computerString = ('Rock');
        return;
// Assign 2 to 'Paper'
    } else if (computerOutput === 2) {
        computerString = ('Paper');
        return;
// Assign 3 to 'Scissors'
    } else {
        computerString = ('Scissors');
        return;
    }
}

