const assert = require("assert");
const {exec} = require('child_process');
const environment = require("../../config/environment.json");


describe('integration tests', function () {
    const errorMessage = 'Arguments need to be numbers from -1000 to 1000';

    it('should throw exception because argument is a string', (done) => {
        exec('node index.js notNumber', (error, stdout, stderr) => {
            assert.equal(stderr.includes(errorMessage), true)
            done();
        });
    });
    it('should throw exception because arguments are numbers and a string', (done) => {
        exec('node index.js 3 45 98 notNumber', (error, stdout, stderr) => {
            assert.equal(stderr.includes(errorMessage), true)
            done();
        });
    });
    it('should throw exception because arguments contain number bigger than interval -1000/1000', (done) => {
        exec('node index.js 1001', (error, stdout, stderr) => {
            assert.equal(stderr.includes(errorMessage), true)
            done();
        });
    });
    it('should throw exception because arguments contain number smaller than interval -1000/1000', (done) => {
        exec('node index.js -1001', (error, stdout, stderr) => {
            assert.equal(stderr.includes(errorMessage), true)
            done();
        });
    });
    it('should return "Gestform" for number 0', (done) => {
        exec('node index.js 0', (error, stdout, stderr) => {
            assert.equal(stdout, joinAsStdout([environment.gestform.text]));
            done();
        });
    });
    it('should return "Gestform" for number 15', (done) => {
        exec('node index.js 15', (error, stdout, stderr) => {
            assert.equal(stdout, joinAsStdout([environment.gestform.text]));
            done();
        });
    });
    it('should return "Geste" for number 3', (done) => {
        exec('node index.js 3', (error, stdout, stderr) => {
            assert.equal(stdout, joinAsStdout([environment.geste.text]));
            done();
        });
    });
    it('should return 7 for number 7', (done) => {
        exec('node index.js 7', (error, stdout, stderr) => {
            assert.equal(stdout, joinAsStdout([7]));
            done();
        });
    });
    it('should return multiple answers', (done) => {
        exec('node index.js 7 1000 60 18 9 25 873 -554', (error, stdout, stderr) => {
            assert.equal(stdout, joinAsStdout([
                7,
                environment.form.text,
                environment.gestform.text,
                environment.geste.text,
                environment.geste.text,
                environment.form.text,
                environment.geste.text,
                -554
            ]));
            done();
        });
    });
});

/**
 * Group list of string and/or numbers as stdout string
 * ex : [1, "tests", "367"] => "1\ntests\n367\n"
 * @param list {(string | number)[]}
 * @returns {string}
 */
function joinAsStdout(list) {
    return list.join('\n').concat('\n');
}
