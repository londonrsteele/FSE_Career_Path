// Import Mocha's assert
const assert = require('assert');
// Import Rooster 
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // setup
      const expected = 'cock-a-doodle-doo!';
      
      // exercise
      const result = Rooster.announceDawn();

      // verify
      assert.equal(result, expected);

      // teardown
      // no teardown
    });
  });
});