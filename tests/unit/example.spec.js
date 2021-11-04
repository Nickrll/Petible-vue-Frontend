var assert = require('assert');

describe('test1', function() {
    it('should return number of charachters in a string', function() {
        let str = "Hello";
        assert.equal(str.length, 5);
    });
    it('should return first charachter of the string', function() {
        assert.equal("Hello".charAt(0), 'H');
    });
    it('should return last charachter of the string', function() {
        let str = "Hello"
        assert.equal(str.charAt(str.length - 1), 'o');
    });
});