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
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // setup
      const expected = '5';
      
      // exercise
      const result = Rooster.timeAtDawn(5);

      // verify
      assert.strictEqual(result, expected);

      // teardown
      // no teardown
    });
    it('throws an error if passed a number less than 0', () => {
        // setup
        const hourBelowZero = -1;
  
        // exercise and verify
        assert.throws( 
          () => {
            Rooster.timeAtDawn(hourBelowZero);
          },
          RangeError
        );
        // teardown
        // no teardown
    });
    it('throws an error if passed a number greater than 23', () => {
        // setup
        const hourAbove23 = 24;
  
        // exercise and verify
        assert.throws( 
          () => {
            Rooster.timeAtDawn(hourAbove23);
          },
          RangeError
        );
        // teardown
        // no teardown
    });
  });
});