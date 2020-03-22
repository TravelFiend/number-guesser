const compareNumbers = (guess, correctNum) => {
    if (guess < 1 || guess > 20 || typeof Number(guess.value) !== 'number'){
        throw 'error';
    } else if (guess > correctNum){
        return 1;
    } else if (guess < correctNum){
        return -1;
    } else {
        return 0;
    }
};

export default compareNumbers;