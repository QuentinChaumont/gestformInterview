/**
 * check if number is divisible by divisibleBy
 * @param number {number}
 * @param divisibleBy {number}
 * @returns {boolean}
 */
function isDivisible(number, divisibleBy) {
    return number % divisibleBy === 0;
}

module.exports =  {
    isDivisible: isDivisible,
}
