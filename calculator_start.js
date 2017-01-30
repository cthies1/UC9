var currentInput = "0";
var memory = "0";
var operator = 0;
var divByZeroError = "Divide By Zero Error";
var mode = "DEG";
// Helper function for displaying the current input
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}
/**
 * This function adds a digit to the current input
 * @param {number} dig      This is the number selected on the calculator
 * @return {number} Returns the new currentInput
 */
function addDigit(dig) {
    if (currentInput.length < 18) {
        if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
            currentInput = dig;
        }
        else {
            currentInput = currentInput + dig;
        }
    }
    displayCurrentInput();
}
/**
 * This function adds a decimal to the current input
 * @return {number} Returns the new currentInput
 */
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}
/**
 * This function clears everything
 * @return {number} Returns the new currentInput
 */
function allClear() {
    currentInput = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * This function stores the last operator pushed for multiply, divide, add, or subtract
 * @param {number} op       This is the operator that is being used
 * @return {number} Returns the new currentInput
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    memory = currentInput; //store value
    currentInput = "0";
}
/**
 * This function calculates using operator, the memory and what is current
 * @return {number} Returns the new currentInput
 */
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2) {
        if (eval(currentInput) != 0) {
            currentInput = eval(memory) / eval(currentInput);
        }
        else {
            currentInput = divByZeroError;
        }
    }
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * This function changes the sign of the current input
 * @return {number} Returns the new currentInput
 */
function changeSign() {
    currentInput = currentInput * (-1);
    displayCurrentInput();
}
/**
 * This function clears the current input back to 0
 * @return {number} Returns the new currentInput
 */
function clears() {
    currentInput = "0";
    displayCurrentInput();
}
/**
 * This function changes the current input to a percentage
 * @return {number} Returns the new currentInput
 */
function percentage() {
    currentInput = currentInput / 100;
    displayCurrentInput();
}
/**
 * This function calculates the factorial of the current input
 * @return {number} Returns the new currentInput
 */
function factorial() {
    for (i = currentInput; i > 1; i--) {
        currentInput = currentInput * (i - 1);
    }
    displayCurrentInput();
}
/**
 * This function calculates the square of the current input
 * @return {number} Returns the new currentInput
 */
function square() {
    currentInput = Math.pow(currentInput, 2);
    displayCurrentInput();
}
/**
 * This function calculates the square root of the current input
 * @return {number} Returns the new currentInput
 */
function squareRoot() {
    currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
}
/**
 * This function calculates the inverse of the current input
 * @return {number} Returns the new currentInput
 */
function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}
/**
 * This function calculates the sine of the current input
 * @return {number} Returns the new currentInput
 */
function sin() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}
/**
 * This function calculates the cosine of the current input
 * @return {number} Returns the new currentInput
 */
function cos() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}
/**
 * This function calculates the tangent of the current input
 * @return {number} Returns the new currentInput
 */
function tan() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}
/**
 * This function changes the current input into radians
 * @return {number} Returns the new currentInput
 */
function rad() {
    if (mode == "DEG") {
        //convert current input
        currentInput = currentInput / 57.2958;
    }
    mode = "RAD";
    displayCurrentInput();
}
/**
 * This function changes the current input into degrees
 * @return {number} Returns the new currentInput
 */
function deg() {
    if (mode == "RAD") {
        //convert current input
        currentInput = currentInput * 57.2958;
    }
    mode = "DEG";
    displayCurrentInput();
}
