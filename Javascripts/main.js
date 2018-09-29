import {initialDisplay} from "./components/calculator.js";
import newOne from "./helpers/buttonEvents.js";


const initializer = () => {
// calculate(4, 2, 'multiply');
// calculate(4, 4, 'divide');
// calculate(4, 10, 'add');
// calculate(7, 2, 'subtract');
newOne();
initialDisplay();
}

initializer();