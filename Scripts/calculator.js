let calculationArray = [];

function add (num1, num2) {
    return num1 + num2;
}
function subtract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2;
}

let display = 10;

function operate (operator,num2,num1) {
    if (num1 == null) {
        num1 = display;
    }
    console.log(display);
    if (operator == '+') {
        return add(num1,num2);
    }
    if (operator == '-') {
        return subtract(num1,num2);
    }
    if (operator == '*') {
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
    //document.getElementById('screen').innerHTML = button.innerHTML;
    //calculationArray.push(button.innerHTML);
    console.log(calculationArray);
})

//These could be in an array, i.e. [0] is num1, [1] is operator, [2] is num2
//when you press a number it should check whether anything is stored in the operator position [1]
//if not, store that value in [0] and replace any existing total, because it's deemed to be a new number.
//if so, store it in [2]. This could be a function number press to do this.
//when you press the operator, this should store the operator in [1]
//pressing = operates them, produces a result and puts that result in [0], and removes [1] and [2]
//if the user presses an operator without typing num1, it uses the previous total in [0]
//the approach above allows the user to do long sums, i.e. 2+2=4*3 
//need to think about how we do long sums without = i.e. 2*3+4-5
//one way could be to store subsequent numbers and operators in the array from [3]