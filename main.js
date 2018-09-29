const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

const calculate = (firstNumber, secondNumber, operation) => {
    let output = 0;
    switch(operation) {
        case 'multiply':
            output = multiply(firstNumber, secondNumber);
            break
        case 'divide':
            output = divide(firstNumber, secondNumber);
            break;
        case 'add':
            output = add(firstNumber, secondNumber);
            break;
        case 'subtract':
            output = subtract(firstNumber, secondNumber);
            break;
        default:
            output = 'Nope';
    }
    printToDom('output',output);
};

const multiply = (num1, num2) => {
    return (num1 * num2);
};

const divide = (num1, num2) => {
    return (num1 / num2);
};

const add = (num1, num2) => {
    return (num1 + num2);
};

const subtract = (num1, num2) => {
    return (num1 - num2);
};

calculate(4, 2, 'multiply');
calculate(4, 4, 'divide');
calculate(4, 10, 'add');
calculate(7, 2, 'subtract');

