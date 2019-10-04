// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare.js';
const test = QUnit.test;
const correctNum = 8;

test('should return 0 if guessed number is 8', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guessedNumber = 8;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guessedNumber, correctNum);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('should return -1 if random number is less than 8', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guessedNumber = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guessedNumber, correctNum);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});

test('should return 1 if random number is greater than 8', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guessedNumber = 15;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guessedNumber, correctNum);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});

test('should throw an error if NaN', function(assert) {
    const guessedNumber = 'string';
    const expectedError = 'error';

    const result = compareNumbers(guessedNumber, correctNum);

    assert.throws(result, expectedError);    
});