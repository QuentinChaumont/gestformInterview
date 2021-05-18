const {checkNumbersInterval, gestformComputation} = require("./src/gestform.service");

/** catch args as string */
let numbersAsString = process.argv.slice(2);

/** parse args as INT number */
const numbers = numbersAsString.map(numberAsString => parseInt(numberAsString));

/** check args are number from the correct interval or throw Error */
checkNumbersInterval(numbers);

/** for each argument display associated gestformComputation */
numbers.forEach(number => console.log(gestformComputation(number)));





