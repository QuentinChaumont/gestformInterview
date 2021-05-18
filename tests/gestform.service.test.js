const assert = require('assert').strict;
const {gestformComputation, checkNumbersInterval} = require("../src/gestform.service");
const environment = require("../config/environment.json");

describe('gestformComputation unit tests', () => {
    it('should return "Gestform" for number 0', () => {
        assert.equal(gestformComputation(0), environment.gestform.text);
    });
    it('should return "Gestform" for number 15', () => {
        assert.equal(gestformComputation(15), environment.gestform.text);
    });
    it('should return "Geste" for number 3', () => {
        assert.equal(gestformComputation(3), environment.geste.text);
    });
    it('should return "Forme"for number 3', () => {
        assert.equal(gestformComputation(5), environment.form.text);
    });
    it('should return 7 for number 7', () => {
        assert.equal(gestformComputation(7), 7);
    });
});

describe('checkNumbersInterval unit tests', () => {
    const errorMessage='Arguments need to be numbers from -1000 to 1000';

    it('should throw exception because one value is NaN', () => {
        assert.throws(() => checkNumbersInterval([50, NaN]), Error, errorMessage);
    });
    it('should throw exception because one value is higher than 1000', () => {
        assert.throws(() => checkNumbersInterval([1001]), Error, errorMessage);
    });
    it('should throw exception because one value is smaller than -1000', () => {
        assert.throws(() => checkNumbersInterval([-1001]), Error, errorMessage);
    });
    it('should do nothing because values are valid', () => {
        assert.doesNotThrow(() => checkNumbersInterval([-10 , 56, 783, -999]));
    });
});
