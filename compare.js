const compareNumbers = (guess, correctNum) => {
    if (guess === correctNum){
        return 0;
    } else if (guess > correctNum){
        return 1;
    } else {
        return -1;
    }
};

export default compareNumbers;