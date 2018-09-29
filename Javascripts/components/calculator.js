import {printToDom} from "../Utilities/utils.js";
import calculation from "../helpers/maths.js";

const calc = {
    firstNumberEntered: '',
    secondNumberEntered: '',
    mathType: '',
    display: ''
};

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
    setDisplay(answer);
};

const setDisplay = (someNum) => {
    calc.display = someNum;
    printToDom('output', calc.display)
};

const initialDisplay = () => {
    calc.firstNumberEntered = '';
    calc.secondNumberEntered = '';
    printToDom('output', '0');
};

const addNumber = (num) => {
    if (calc.mathType === '') {
        calc.firstNumberEntered += num;
        setDisplay(calc.firstNumberEntered);    
    } else {
        calc.secondNumberEntered += num;
        setDisplay(calc.secondNumberEntered);
    }
    
};

const setMathType = (newMathType) => {
    calc.mathType = newMathType;
}

export {calculate, addNumber, initialDisplay, setMathType};