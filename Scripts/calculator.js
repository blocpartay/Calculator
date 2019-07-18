let calcArray = [];
let runningTotal = 0;

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
        
        if ((currentScreen == "/") && (button.innerHTML == 0)) {
            alert('Ok clever cloggs, diving by zero is a bad idea');
            calcArray = [];
            document.getElementById('screen').innerHTML = "";
        }
        else if (currentScreen == '+' || currentScreen == '-' || currentScreen == 'x' || currentScreen == '/') {
            document.getElementById('screen').innerHTML = button.innerHTML;

            return (calcArray.length < 3)
               ? runningTotal = operate(calcArray[0],calcArray[1],button.innerHTML)
               : runningTotal = operate(runningTotal,calcArray[calcArray.length - 1],button.innerHTML);   
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
        calcArray.push(currentScreen);

        if (currentScreen == '+' || currentScreen == '-' || currentScreen == 'x' || currentScreen == '/') {
            alert('Please enter a number');
        }
        else {
            document.getElementById('screen').innerHTML = button.innerHTML;
            calcArray.push(button.innerHTML);
        }
    })
})

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {
    currentScreen = document.getElementById('screen').innerHTML;
    if (currentScreen == '+' || currentScreen == '-' || currentScreen == 'x' || currentScreen == '/') {
        alert('You need to enter another number');
    }
    else if (calcArray.length < 2) {
        alert('You cant perform a calculation like this');
    }
    else {
        document.getElementById('screen').innerHTML = runningTotal;
    }
    
})

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', (e) => {
    calcArray = [];
    document.getElementById('screen').innerHTML = "";
})