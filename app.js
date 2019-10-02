import compareNumbers from './compare.js';

const triesRemaining = document.getElementById('tries');
const message = document.getElementById('message');
const numButt = document.getElementById('num-button');
const guess = document.getElementById('guess');

triesRemaining.textContent = 4;
const correctNum = Math.floor(Math.random() * (21 - 1)) + 1;
let tries = 4;

const errorCheck = (guess) => {
    if (Number(guess.value) < 1 || Number(guess.value > 20)) {
        window.alert('Entry must be a number from 1 to 20');
        return;
    }
};

const decrementTries = () => {
    tries--;
    triesRemaining.textContent = tries;
};

const disableButton = () => numButt.setAttribute('disabled', true);

const loseMessage = () => {
        // Display lose message
    message.textContent = 'YOU LOSE, BETTER LUCK NEXT TIME!';
        // change color
    message.style.color = 'red';
};

const winMessage = () => {
    // Display win message
    message.textContent = 'YOU WIN!!!';
    // change color
    message.style.color = 'green';
};

const tooHigh = () => message.textContent = 'TOO HIGH, GUESS AGAIN';

const tooLow = () => message.textContent = 'TOO LOW, GUESS AGAIN';

numButt.addEventListener('click', () => {
    errorCheck(guess);
    decrementTries();
    // out of tries?
    if (tries === 0 || tries < 0){
        loseMessage();
        disableButton();
    // correct guess?
    } else if (compareNumbers(Number(guess.value), correctNum) === 0) {
        winMessage();
        disableButton();
    // too high?
    } else if (compareNumbers(Number(guess.value), correctNum) === 1){
        tooHigh();
    //too low?
    } else {
        tooLow();
    }
});

