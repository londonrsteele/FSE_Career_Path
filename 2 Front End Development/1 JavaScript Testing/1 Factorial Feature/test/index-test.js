var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if 5! is equal to 120', () => {
        // Setup
        const expected = 120;
        // Exercise
        const actual = Calculate.factorial(5);
        // Verify
        assert.equal(actual, expected);
    });
    it('test if 3! is equal to 6', () => {
        // Setup
        const expected = 6;
        // Exercise
        const actual = Calculate.factorial(3);
        // Verify
        assert.equal(actual, expected);
    });
    it('edge case: 0! is equal to 1', () => {
        // Setup
        const expected = 1;
        // Exercise
        const actual = Calculate.factorial(0);
        // Verify
        assert.equal(actual, expected);
    });
  });
});