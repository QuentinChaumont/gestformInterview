const {isDivisible} = require("./divisible.service");
const environment = require("../config/environment.json");

/**
 * return 'Gestform' if number is divisible by 3 and 5
 * return 'Geste' if number is divisible by 3
 * return 'Forme' if number is divisible by 5
 * return number if not divisible by 3 or 5
 * @param number {number}
 * @returns {string || number}
 */
function gestformComputation(number) {
    if (isDivisible(number, environment.geste.dividedBy) && isDivisible(number, environment.form.dividedBy)) {
        return environment.gestform.text;
    }
    if (isDivisible(number, environment.geste.dividedBy)) {
        return environment.geste.text;
    }
    if (isDivisible(number, environment.form.dividedBy)) {
        return environment.form.text;
    }
    return number;
}

/**
 * check if numbers are all between -1000 and 1000
 * @param numbers {number[]}
 */
function checkNumbersInterval(numbers) {
    if (numbers.includes(NaN) || numbers.some(number => number < environment.interval.min
        || number > environment.interval.max)) {
        throw new Error('Arguments need to be numbers from -1000 to 1000')
    }
}

module.exports = {
    gestformComputation,
    checkNumbersInterval
}
