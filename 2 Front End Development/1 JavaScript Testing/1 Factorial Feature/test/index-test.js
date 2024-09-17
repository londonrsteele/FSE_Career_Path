var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if 5! is equal to 120', () => {
        assert.equal(Calculate.factorial(5), 120);
    });
  });
});