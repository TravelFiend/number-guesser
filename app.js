import compareNumbers from './compare.js';

const triesRemaining = document.getElementById('tries');
const message = document.getElementById('message');
const numButt = document.getElementById('num-button');
const guess = document.getElementById('guess');

triesRemaining.textContent = 4;
const correctNum = Math.floor(Math.random() * (21 - 1)) + 1;
let tries = 4;

// const compareNumbers = (guess, rightNum) => {
//     if (guess === rightNum) {
//         return 0;
//     } else if (guess > rightNum) {
//         return 1;
//     } else {
//         return -1;
//     }
// }

numButt.addEventListener('click', () => {
    // decrement tries remaining
    tries--;
    triesRemaining.textContent = tries;
    if (tries === 0 || tries < 0){
        // Display lose message
        message.textContent = 'YOU LOSE, BETTER LUCK NEXT TIME!';
        // change color
        message.style.color = 'red';
        // Disable game play
        numButt.setAttribute('disabled', true);
    // correct guess?
    } else if (compareNumbers(Number(guess.value), correctNum) === 0) {
        // Display win message
        message.textContent = 'YOU WIN!!!';
        // change color
        message.style.color = 'green';
        // disable game play

    // too high?
    } else if (compareNumbers(Number(guess.value), correctNum) === 1){
        // Display message
        message.textContent = 'TOO HIGH, GUESS AGAIN';
        // Decrement tries remaining
    //too low?
    } else {
        // Display message
        message.textContent = 'TOO LOW, GUESS AGAIN';
        // Decrement tries remaining
    }
});

