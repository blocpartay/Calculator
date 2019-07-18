let calculationArray = [];
let tempCalculationTotal = 0;

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
            if (calculationArray.length < 3) {
                tempCalculationTotal = operate(calculationArray[calculationArray.length - 2],calculationArray[calculationArray.length - 1],button.innerHTML);
            }
            else {
                tempCalculationTotal = operate(tempCalculationTotal,calculationArray[calculationArray.length - 1],button.innerHTML);
            }    
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
    document.getElementById('screen').innerHTML = tempCalculationTotal;
    /*
    currentScreen = document.getElementById('screen').innerHTML;
    calculationArray.push(currentScreen);

    if (calculationArray.length >3) {
        console.log(calculationArray);
        console.log(tempCalculationTotal);
        console.log(calculationArray[calculationArray.length - 2]);
        console.log(calculationArray[calculationArray.length - 1]);
        document.getElementById('screen').innerHTML = operate(tempCalculationTotal,calculationArray[calculationArray.length - 2],calculationArray[calculationArray.length - 1]);   
    }
    else {
        document.getElementById('screen').innerHTML = operate(calculationArray[calculationArray.length - 3],calculationArray[calculationArray.length - 2],calculationArray[calculationArray.length - 1]);
    }
    */
})

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', (e) => {
    calculationArray = [];
    document.getElementById('screen').innerHTML = "";
})