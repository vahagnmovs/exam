// Create a constructor function to produce calculator instances (+,-,*,? operations).

function Calculator() {
    return function (number1, number2, operator) {
        switch(operator) {
        case '+': return number1 + number2;
        case '-': return number1 - number2;
        case '*': return number1 * number2;
        case '/': return number1 / number2;
        default: return 'Please enter numbers and curreect calculating operator (+, -, / ot *)';
    }
    }
}

let calc = new Calculator();
console.log(calc(1, 2, '+'));

// function calc(number1, number2, operator) {
//     switch(operator) {
//         case '+': return number1 + number2;
//         case '-': return number1 - number2;
//         case '*': return number1 * number2;
//         case '/': return number1 / number2;
//         default: return 'Please enter numbers and curreect calculating operator (+, -, / ot *)';
//     }
// }
//
// console.log(calc(1, 2, '-'))

// calc(1,2, +) => 3;
// calc(3,4, -) => -1
