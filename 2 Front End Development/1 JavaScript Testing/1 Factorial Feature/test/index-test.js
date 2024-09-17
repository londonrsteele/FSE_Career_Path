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
  });
});