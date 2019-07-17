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
        if (currentScreen == '+' || currentScreen == '-' || currentScreen == 'x' || currentScreen == '/') {
            document.getElementById('screen').innerHTML = button.innerHTML;
            console.log(calculationArray);
            //calculationArray.push(operate(calculationArray[calculationArray.length - 2],currentScreen,button.innerHTML));
            //console.log(calculationArray);
            /*take the number just entered and 'operate' using the previous two. Basically just do the calculation, but dont display it on the screen, place it on the end of the calculation array?*/
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
        calculationArray.push(currentScreen);
        document.getElementById('screen').innerHTML = button.innerHTML;
        calculationArray.push(button.innerHTML);
    })
})

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {
    currentScreen = document.getElementById('screen').innerHTML;
    calculationArray.push(currentScreen);
    document.getElementById('screen').innerHTML = operate(calculationArray[calculationArray.length - 3],calculationArray[calculationArray.length - 2],calculationArray[calculationArray.length - 1]);
})

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', (e) => {
    calculationArray = [];
    document.getElementById('screen').innerHTML = "";
})