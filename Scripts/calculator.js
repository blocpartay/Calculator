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

function operate (operator,num2,num1) {
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
    document.getElementById('screen').innerHTML = operate(calculationArray[calculationArray.length - 2],calculationArray[calculationArray.length - 1],calculationArray[calculationArray.length - 3]);
})

//pressing = operates them, produces a result and puts that result in [0], and removes [1] and [2]
//if the user presses an operator without typing num1, it uses the previous total in [0]
//the approach above allows the user to do long sums, i.e. 2+2=4*3 
//need to think about how we do long sums without = i.e. 2*3+4-5
//one way could be to store subsequent numbers and operators in the array from [3]