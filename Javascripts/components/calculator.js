import {printToDom} from "../Utilities/utils.js";
import calculation from "../helpers/maths.js";

const calculate = (firstNumber, secondNumber, operation) => {
    let output = 0;
    switch(operation) {
        case 'multiply':
            output = calculation.multiply(firstNumber, secondNumber);
            break
        case 'divide':
            output = calculation.divide(firstNumber, secondNumber);
            break;
        case 'add':
            output = calculation.add(firstNumber, secondNumber);
            break;
        case 'subtract':
            output = calculation.subtract(firstNumber, secondNumber);
            break;
        default:
            output = 'Nope';
    }
    printToDom('output',output);
};

export {calculate};