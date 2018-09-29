import {printToDom} from "../Utilities/utils.js";
import calculation from "../helpers/maths.js";

const calc = {
    firstNumberEntered: '',
    secondNumberEntered: '',
    mathType: '',
    display: ''
};

const calculate = () => {
    let output = 0;
    switch(calc.mathType) {
        case 'multiply':
            output = calculation.multiply(calc.firstNumberEntered, calc.secondNumberEntered);
            break
        case 'divide':
            output = calculation.divide(calc.firstNumberEntered, calc.secondNumberEntered);
            break;
        case 'add':
            output = calculation.add(calc.firstNumberEntered, calc.secondNumberEntered);
            break;
        case 'subtract':
            output = calculation.subtract(calc.firstNumberEntered, calc.secondNumberEntered);
            break;
        default:
            output = 'Nope';
    }
    setDisplay(output);
};

const setDisplay = (someNum) => {
    calc.display = someNum;
    printToDom('output', calc.display)
};

const initialDisplay = () => {
    calc.firstNumberEntered = '';
    calc.secondNumberEntered = '';
    calc.mathType = '';
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