import add , {multiply} from './calc.js';

export const calculate = () => {
    console.log("Addition:", add(10,5));
    console.log("Multiplication:", multiply(10,5));
};