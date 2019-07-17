let calculationArray = [];

function add (num1, num2) {
    return (parseInt(num1, 10) + parseInt(num2, 10));
}
function subtract (num1, num2) {
    return (parseInt(num1, 10) - parseInt(num2, 10));
}
function multiply (num1, num2) {
    return (parseInt(num1, 10) * parseInt(num2, 10));
}
function divide (num1, num2) {
    return (parseInt(num1, 10) / parseInt(num2, 10));
}

function operate (num1,operator,num2) {
    if (operator == '+') {
        return add(num1,num2);
    }
    if (operator == '-') {
        return subtract(num1,num2);
    }
    if (operator == 'x') {
        return multiply(num1,num2);
    }
    if (operator == '/') {
        return divide(num1,num2);
    }
}

function updateDisplay(char) {
    document.getElementById('screen').innerHTML = char;
}

const numberButtons = Array.from(document.querySelectorAll('.numberButton'));
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentScreen = document.getElementById('screen').innerHTML;
        calculationArray.push(button.innerHTML);
        if (currentScreen == '+' || currentScreen == '-' || currentScreen == 'x' || currentScreen == '/') {
            document.getElementById('screen').innerHTML = button.innerHTML;
            //console.log(calculationArray);
            //calculationArray.push(operate(calculationArray[calculationArray.length - 3],calculationArray[calculationArray.length - 2],calculationArray[calculationArray.length - 1]));
            //console.log(calculationArray);
            //store the above calculation array push in a temporary variable. in the equals section, lookup the calculation array lenght, if it's more than 2 you know there have been extra multiplications, so use the variable
            //as part of the calculation.
        }
        else {
            document.getElementById('screen').innerHTML = (currentScreen + '' + button.innerHTML);
        }
    })
})

const operatorButtons = Array.from(document.querySelectorAll('.operatorButton'));
operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentScreen = document.getElementById('screen').innerHTML;
        if (currentScreen == '+' || currentScreen == '-' || currentScreen == 'x' || currentScreen == '/') {
            alert('Please enter a number');
        }
        else {
        document.getElementById('screen').innerHTML = button.innerHTML;
        calculationArray.push(button.innerHTML);
        }
    })
})

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {
    document.getElementById('screen').innerHTML = operate(calculationArray[calculationArray.length - 3],calculationArray[calculationArray.length - 2],calculationArray[calculationArray.length - 1]);
})

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', (e) => {
    calculationArray = [];
    document.getElementById('screen').innerHTML = "";
})