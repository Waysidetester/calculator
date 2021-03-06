import {addNumber, initialDisplay, calculate, setMathType} from '../components/calculator.js'

const sevenButton = document.getElementById('7');
const eightButton = document.getElementById('8');
const nineButton = document.getElementById('9');
const fourButton = document.getElementById('4');
const fiveButton = document.getElementById('5');
const sixButton = document.getElementById('6');
const oneButton = document.getElementById('1');
const twoButton = document.getElementById('2');
const threeButton = document.getElementById('3');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const addButton = document.getElementById('add');
const zeroButton = document.getElementById('0');
const subtractButton = document.getElementById('subtract');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
};

const sevenClicker = () => {sevenButton.addEventListener('click', addNumberCaller)};

const zeroClicker = () => {zeroButton.addEventListener('click', addNumberCaller)};

const eightClicker = () => {eightButton.addEventListener('click', addNumberCaller)};

const nineClicker = () => {nineButton.addEventListener('click', addNumberCaller)};

const fourClicker = () => {fourButton.addEventListener('click', addNumberCaller)};

const fiveClicker = () => {fiveButton.addEventListener('click', addNumberCaller)};

const sixClicker = () => {sixButton.addEventListener('click', addNumberCaller)};

const oneClicker = () => {oneButton.addEventListener('click', addNumberCaller)};

const twoClicker = () => {twoButton.addEventListener('click', addNumberCaller)};

const threeClicker = () => {threeButton.addEventListener('click', addNumberCaller)};

const multiplyClicker = () => {multiplyButton.addEventListener('click', () => {
    setMathType('multiply');
})};

const divideClicker = () => {divideButton.addEventListener('click', () => {
    setMathType('divide');
})};

const addClicker = () => {addButton.addEventListener('click', () => {
    setMathType('add');
})};

const subtractClicker = () => {subtractButton.addEventListener('click', () => {
    setMathType('subtract');
})};

const clearClicker = () => {clearButton.addEventListener('click', initialDisplay)};

const equalsClicker = () => {equalsButton.addEventListener('click', calculate   )};

const funtionHolder = () => {
    oneClicker();
    twoClicker();
    threeClicker();
    fourClicker();
    fiveClicker();
    sixClicker();
    sevenClicker();
    eightClicker();
    nineClicker();
    multiplyClicker();
    divideClicker();
    addClicker();
    subtractClicker();
    clearClicker();
    equalsClicker();
    zeroClicker();
};

export default funtionHolder;