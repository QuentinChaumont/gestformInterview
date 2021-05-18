const assert = require('assert').strict;
const {isDivisible} = require("../src/divisible.service");

describe('isDivisible unit tests', function() {
    it('should return true for 10 divided by 2', () => {
        assert.equal(isDivisible(10, 2), true);
    });
    it('should return true for 10 divided by 5', () => {
        assert.equal(isDivisible(10, 5), true);
    });
    it('should return true for 10 divided by 10', () => {
        assert.equal(isDivisible(10, 10), true);
    });
    it('should return false for 10 divided by 3', () => {
        assert.equal(isDivisible(10, 3), false);
    });
    it('should return false for 10 divided by 4', () => {
        assert.equal(isDivisible(10, 4), false);
    });
    it('should return false for 10 divided by 20', () => {
        assert.equal(isDivisible(10, 20), false);
    });
});
