let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
/*************************************************************
 * function: generateTarget
 * This function should return a random integer b/t 0 and 9.
 * 
 * This function implicitly returns.
 * 
 * Note: Math.floor(Math.random() * 10) returns a number [0, 10).
 */
const generateTarget = () => Math.floor(Math.random() * 10);

/*************************************************************
 * function: getAbsoluteDistance
 * This helper function calculates the absolute distance between two numbers.
 * This helper function is called in compareGuesses.
 */
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

/*************************************************************
 * function: compareGuesses
 * This function determines which player (human or computer) wins based on which
 * guess is closest to the (secret) target. If both players tied, the human user
 * should win. Return true if human player wins, and false if computer player wins.
 */
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    let humanError = getAbsoluteDistance(humanGuess, secretTarget);
    let computerError = getAbsoluteDistance(computerGuess, secretTarget);
    if (humanError === computerError) {
        // Tie - Human wins
        return true;
    } else if (humanError < computerError) {
        // Human wins
        return true;
    } else {
        // Computer wins
        return false;
    }
}

/*************************************************************
 * function: updateScore
 * This function increases the score variable (global) (humanScore or computerScore)
 * by 1 depending on the winner passed into updateScore. The string passed in 
 * will either be 'human' or 'computer'. No return needed.
 */
const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

/*************************************************************
 * function: advanceRound
 * This function is to be used to update the round number after each round. This
 * function should do that by increasing the value of currentRoundNumber (global)
 * by 1.
 * 
 * This function implicitly returns.
 */
const advanceRound = () => currentRoundNumber++;


// Test generateTarget() 
// console.log(generateTarget());

// Test compareGuesses()
// let secretTarget = generateTarget();
// console.log('Secret: ' + secretTarget);
// console.log(compareGuesses(9, 3, secretTarget)); // >=6, true; <=5, false
// console.log(compareGuesses(9, 9, secretTarget)); // tests equality edge case

// Test updateScore
// console.log('Human: ' + humanScore + ' vs. Computer: ' + computerScore);
// updateScore('human');
// console.log('Human: ' + humanScore + ' vs. Computer: ' + computerScore);
// updateScore('computer');
// console.log('Human: ' + humanScore + ' vs. Computer: ' + computerScore);

// Test advanceRound()
// console.log('Round: ' + currentRoundNumber);
// advanceRound();
// console.log('Round: ' + currentRoundNumber);