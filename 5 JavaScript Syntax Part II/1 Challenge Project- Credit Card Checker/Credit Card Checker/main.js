// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
/***************************************************************************
 * validateCred
 * parameter: array of credit card numbers to validate
 * return: true if array is valid, false if invalid (validity based on Luhn algorithm)
 * NOTE: this function should NOT mutate the values of the passed array
 */
const validateCred = array => {
    /* Luhn algorithm:
     * 1. Starting from farthest digit to the right, AKA the check digit, 
     *    iterate to the left.
     * 2. As you iterate to the left, every other digit is doubled (the check)
     *    digit is not doubled). If the number is greater than 9 after doubling,
     *    subtract 9 from its value.
     * 3. Sum up all the digits in the credit card number.
     * 4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of
     *    0) then the number is valid, otherwise, it's invalid.
     */
    // 1. Iterate to from R <-- L
    let checkDigit = array[array.length-1];
    let doubledArray = [];
    // 2. double every other digit, starting after check digit (1st pass = no double)
    let double = false;
    for(let i = array.length-1; i >= 0; i--){
        if(double) {
            double = false;
            let doubled = array[i] * 2;
            if(doubled > 9){
                doubled -= 9;
            }
            doubledArray.push(doubled);
        } else {
            double = true;
            doubledArray.push(array[i]);
        }
    }
    // 3. Sum 
    let sum_doubledArray = doubledArray.reduce((accumulator, currValue) => accumulator+currValue);
    // 4. Check validity
    if(sum_doubledArray % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test validateCred
console.log(batch.map(validateCred)); // 5 valid, 5 invalid, 2 valid mystery, 3 invalid mystery

/***************************************************************************
 * findInvalidCards
 * parameter: nested array of credit card numbers
 * return: a new nested array of invalid credit card numbers
 * NOTE: this function should NOT mutate the values of the passed array
 */
const findInvalidCards = array => {
    let invalidCards = array.filter(value => !validateCred(value)); // have to inverse usage (!)
    return invalidCards;
}

// Test validateCred
let invalidCards = findInvalidCards(batch); // should return 8 invalid cards
console.log(invalidCards.length);

